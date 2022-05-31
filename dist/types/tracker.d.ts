import { IBlock } from './block';
import { RemoteAdapter, LocalAdapter } from './adapter';
export interface Logger {
    trace(...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    error(msg: string, ...args: any[]): void;
}
export declare enum Step {
    TAIL = 1,
    HEAD = -1
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
export declare class Tracker {
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
    constructor(options: TrackerOptions);
    get currentBlock(): IBlock;
    get remoteBlock(): IBlock;
    doRollback(_block: IBlock, _remote: IBlock): Promise<IBlock>;
    prepare(): Promise<void>;
    /**
     * @param _block current block number
     * @param _blocks need to sync blocks
     * @returns the next block number to sync
     */
    succeeded(_block: IBlock, _blocks: number[]): Promise<IBlock>;
    /**
     *
     * @param _block current block
     * @returns void
     */
    failed(_block: IBlock): Promise<void>;
    get disable(): boolean;
    sleep(_ms: number): Promise<number>;
    refreshBlock(block: IBlock): Promise<IBlock | undefined>;
    pause(blockNumber: number): Promise<boolean | 0>;
    doPause(blockNumber: number): Promise<void>;
    compareSyncedAndRemoteBlocks(blockNumber: number): Promise<{
        equal: boolean | undefined;
        synced: IBlock | undefined;
        remote: IBlock | undefined;
    }>;
    shouldRollback(): Promise<{
        rollback: boolean | "" | undefined;
        synced: IBlock | undefined;
        remote: IBlock | undefined;
    }>;
    start(): Promise<void>;
    stop(): Promise<void>;
    startSync(): Promise<void>;
    loop(): Promise<void>;
}
