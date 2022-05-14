import { IBlock } from './block';
import { RemoteAdapter, LocalAdapter } from './adapter';

export interface Options {
  enable?: boolean;
  logger?: any;
  startBlock?: number;
  interval?: number;
  concurrency?: number;
  behind?: number;
  localAdapter: LocalAdapter<IBlock>;
  remoteAdapter: RemoteAdapter<IBlock>;
}

export class Tracker {
  logger: any;
  isSyncing: boolean;
  stopped: boolean;
  enable: boolean;
  interval: number;
  concurrency: number;
  behind: number;

  startBlock?: number;

  _currentBlock?: IBlock;
  _remoteBlock?: IBlock;

  localAdapter: LocalAdapter<IBlock>;
  remoteAdapter: RemoteAdapter<IBlock>;

  constructor(options: Options) {
    this.isSyncing = false;
    this.stopped = false;
    this.enable = options?.enable || false;
    this.logger = options.logger || console;
    this.startBlock = options.startBlock;
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
    const number = this.startBlock ?? block?.number ?? -1;
    this._currentBlock = await this.remoteAdapter.getBlockByNumber(number + 1);
    this._remoteBlock = await this.remoteAdapter.getLatestBlock();
  }

  /**
   * @param _block current block number
   * @param _needed need to sync block count
   * @returns the next block number to sync
   */
  async succeeded(_block: IBlock, _needed = 1): Promise<IBlock> {
    throw new Error('Please implement succeeded function');
  }

  /**
   *
   * @param _block current block
   * @returns void
   */
  async failed(_blockNumber: IBlock) {
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

  async pause(_blockNumber?: number) {
    return false;
  }

  async doPause(): Promise<void> {
    return;
  }

  // previous block hash is changes, need to rollback
  async shouldRollback() {
    const result = { rollback: false, synced: undefined, remote: undefined };
    if (!this.currentBlock.number) {
      return result;
    }
    if (this.startBlock && this._currentBlock?.number === this.startBlock + 1) {
      return result;
    }

    const blockNumber = this.currentBlock.number - 1;
    const [synced, remote] = await Promise.all([
      this.localAdapter.getBlockByNumber(blockNumber), // local
      this.remoteAdapter.getBlockByNumber(blockNumber), // remote
    ]);

    return {
      rollback: synced?.hash === remote?.hash && !remote?.hash,
      synced,
      remote,
    };
  }

  async start() {
    if (this.disable) {
      this.logger.info(`[Tracker]  Disable ${this.constructor.name}`);
      return;
    }
    this.stopped = false;
    await this.prepare();
    return this.startSync();
  }

  async stop() {
    this.logger.info(`[Tracker] Stopping worker for chain at: ${new Date()}`);
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
    try {
      const shouldPause = await this.pause();
      if (shouldPause) {
        await this.doPause();
        return;
      }
      this.isSyncing = true;
      this._currentBlock = await this.refreshBlock(this.currentBlock);

      if (!this._currentBlock?.hash) {
        this.logger.info(`[Tracker] Refresh block failed, current block: ${this.currentBlock.number}`);
        await this.sleep(this.interval);
        this.isSyncing = false;
        return;
      }

      const rollback = await this.shouldRollback();
      if (rollback.rollback) {
        if (!rollback.synced || !rollback.remote) throw new Error('rollback synced or remote is undefined');
        this._currentBlock = await this.doRollback(rollback.synced, rollback.remote);
        this.logger.info(`[Tracker] Rollback... rollback ${rollback.synced}, current ${this.currentBlock}, latest ${this.remoteBlock} at ${new Date()}`);
        this.isSyncing = false;
        return;
      }

      const distance = this.remoteBlock.number - this.behind - this.currentBlock.number + 1;
      const needed = Math.min(Math.max(distance, 1), this.concurrency);
      if (distance < 0) {
        this.logger.info(`[Tracker] Refresh... ${this.currentBlock.number} -> ${this.remoteBlock.number}, will sleep ${this.interval}`);
        this._remoteBlock = await this.remoteAdapter.getLatestBlock();
        await this.sleep(this.interval);
        this.isSyncing = false;
        return;
      }

      this.logger.info(`[Tracker] Ing... ${this.currentBlock.number} -> ${this.remoteBlock.number} behind ${distance}, will sync ${needed} blocks at ${new Date()}`);

      this._currentBlock = await this.succeeded(this.currentBlock, needed);
      this.isSyncing = false;
      return;
    } catch (e: any) {
      this.logger?.error(e, `[Tracker] failed: height ${this.currentBlock.number} at: ${new Date()}`);
      await this.failed(this.currentBlock);
      this.sleep(this.interval);
      this.isSyncing = false;
      return;
    }
  }
}
