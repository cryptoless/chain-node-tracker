import { IBlock } from './block';
import { RemoteAdapter, LocalAdapter } from './adapter';

export interface Logger {
  trace?(...args: any[]): void;
  debug(...args: any[]): void;
  info(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
  error(msg: string, ...args: any[]): void;
}

export enum Step {
  TAIL = 1,
  HEAD = -1,
}

export interface TrackerOptions {
  name?: string;
  enable?: boolean;
  logger?: Logger;
  startBlock?: number;
  endBlock?: number;
  interval?: number;
  concurrency?: number;
  step?: number;
  behind?: number;
  localAdapter: LocalAdapter<IBlock>;
  remoteAdapter: RemoteAdapter<IBlock>;
}

// (startBlock, endBlock]
export class Tracker {
  name: string;
  logger: Logger;
  isSyncing: boolean;
  stopped: boolean;
  enable: boolean;
  interval: number;
  concurrency: number;
  step: Step;
  behind: number;

  startBlock: number;
  endBlock: number;

  _currentBlock?: IBlock;
  _remoteBlock?: IBlock;

  localAdapter: LocalAdapter<IBlock>;
  remoteAdapter: RemoteAdapter<IBlock>;

  constructor(options: TrackerOptions) {
    this.name = options.name || Tracker.name;
    this.isSyncing = false;
    this.stopped = false;
    this.step = options.step || 1;
    this.enable = options?.enable || false;
    this.logger = options.logger || console;
    this.startBlock = options.startBlock || -1;
    this.endBlock = options.endBlock || 0;
    this.interval = options.interval || 0;
    this.concurrency = options.concurrency || 1;
    this.behind = options.behind || 0;
    this.localAdapter = options.localAdapter;
    this.remoteAdapter = options.remoteAdapter;
  }

  get currentBlock() {
    if (!this._currentBlock) {
      throw new Error('Please wait for current block init');
    }
    return this._currentBlock;
  }

  get remoteBlock() {
    if (!this._remoteBlock) {
      throw new Error('Please wait for remote block init');
    }
    return this._remoteBlock;
  }

  async doRollback(_block: IBlock, _remote: IBlock): Promise<IBlock> {
    throw new Error('Please implement doRollback function');
  }

  async prepare() {
    const block = await this.localAdapter.getLatestBlock();
    // start from the latest block
    let number = this.startBlock || -1;
    if (block?.number && block.number > number) number = block.number;

    this.logger.debug(`[${this.name}] Start from block: ${number}`);
    this._currentBlock = { number: number + 1, hash: '', time: new Date() };
    this._remoteBlock = await this.remoteAdapter.getLatestBlock();
  }

  /**
   * @param _block current block number
   * @param _blocks need to sync blocks
   * @returns the next block number to sync
   */
  async succeeded(_block: IBlock, _blocks: number[]): Promise<IBlock> {
    throw new Error('Please implement succeeded function');
  }

  /**
   *
   * @param _block current block
   * @returns void
   */
  async failed(_block: IBlock) {
    throw new Error('Please implement failed function');
  }

  get disable() {
    return typeof this.enable === 'string' ? !['true', '1', 'yes'].includes(this.enable) : !this.enable;
  }

  async sleep(_ms: number) {
    return 0;
  }

  async refreshBlock(block: IBlock) {
    if (!block.hash || !block.time) {
      return this.remoteAdapter.getBlockByNumber(block.number);
    }
    return block;
  }

  async pause(blockNumber: number) {
    return (
      (this.startBlock && this.startBlock > 0 && blockNumber < this.startBlock) || // head block
      (this.endBlock && this.endBlock > 0 && blockNumber > this.endBlock) // tail block
    );
  }

  async doPause(blockNumber: number): Promise<void> {
    this.logger.info(`[${this.name}] Pause worker for chain at: ${new Date().toISOString()} block ${blockNumber}`);
    return this.stop();
  }

  async compareSyncedAndRemoteBlocks(blockNumber: number) {
    const [synced, remote] = await Promise.all([
      this.localAdapter.getBlockByNumber(blockNumber), // local
      this.remoteAdapter.getBlockByNumber(blockNumber), // remote
    ]);
    const equal = synced && remote && synced.number == remote.number && synced.hash === remote.hash;
    return {
      equal,
      synced,
      remote,
    };
  }

  // previous block hash is changes, need to rollback
  async shouldRollback() {
    const result = { rollback: false, synced: undefined, remote: undefined };
    if (!this._currentBlock?.number) {
      return result;
    }

    if (this.startBlock && this._currentBlock?.number === this.startBlock + this.step) {
      return result;
    }

    const blockNumber = this.currentBlock.number - this.step;
    const { equal, synced, remote } = await this.compareSyncedAndRemoteBlocks(blockNumber);
    return { rollback: synced?.hash && !equal, synced, remote };
  }

  async start() {
    if (this.disable) {
      this.logger.info(`[${this.name}] Disable ${this.constructor.name}`);
      return;
    }
    this.stopped = false;
    await this.prepare();
    return this.startSync();
  }

  async stop() {
    this.logger.info(`[${this.name}] Stopping worker for chain at: ${new Date().toISOString()}`);
    this.stopped = true;
    this.isSyncing = false;
  }

  async startSync() {
    while (!this.stopped) {
      await this.loop().catch(this.logger.error);
    }
  }

  async loop(): Promise<void> {
    if (this.isSyncing) {
      return;
    }

    const currentBlockNumber = this.currentBlock.number;
    const remoteBlockNumber = this.remoteBlock.number;
    const now = new Date().toISOString();

    try {
      const shouldPause = await this.pause(currentBlockNumber);
      if (shouldPause) {
        await this.doPause(currentBlockNumber);
        return;
      }
      this.isSyncing = true;
      const distance = this.step > 0 ? remoteBlockNumber - currentBlockNumber - this.behind : currentBlockNumber;
      const needed = Math.min(Math.max(distance, 1), this.concurrency);
      if (distance < 0) {
        this.logger.info(`[${this.name}] Refresh... [${currentBlockNumber}, ${remoteBlockNumber}], will sleep ${this.interval}`);
        this._remoteBlock = await this.remoteAdapter.getLatestBlock();
        await this.sleep(this.interval);
        this.isSyncing = false;
        return;
      }

      this._currentBlock = await this.refreshBlock(this.currentBlock);
      if (!this._currentBlock?.hash) {
        this.logger.info(`[${this.name}] Refresh block failed, current block: ${currentBlockNumber}`);
        await this.sleep(this.interval);
        this.isSyncing = false;
        return;
      }

      const { rollback, synced, remote } = await this.shouldRollback();
      if (rollback) {
        if (!synced || !remote) throw new Error('rollback synced or remote is undefined');
        this._currentBlock = await this.doRollback(synced, remote);
        this.logger.info(`[${this.name}] Rollback... rollback ${JSON.stringify(synced)} -> ${JSON.stringify(remote)}, current ${currentBlockNumber}, latest ${remoteBlockNumber} at ${now}`);
        this.isSyncing = false;
        return;
      }

      const blocks = new Array(needed).fill(0).map((_i, idx: number) => this.currentBlock.number + this.step * idx);

      this.logger.info(`[${this.name}] Ing... step(${this.step}) [${currentBlockNumber}, ${remoteBlockNumber}] blocks [${blocks.join(',')}] distance ${distance}, will sync ${needed} blocks at ${now}`);

      this._currentBlock = await this.succeeded(this.currentBlock, blocks);
      this.isSyncing = false;
      return;
    } catch (e: any) {
      this.logger?.error(e, `[${this.name}] failed: height ${currentBlockNumber} at: ${now}`);
      await this.failed(this.currentBlock);
      this.sleep(this.interval);
      this.isSyncing = false;
      return;
    }
  }
}
