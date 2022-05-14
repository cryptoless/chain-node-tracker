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
export declare class Tracker {
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
    constructor(options: Options);
    get currentBlock(): IBlock;
    get remoteBlock(): IBlock;
    doRollback(_block: IBlock, _remote: IBlock): Promise<IBlock>;
    prepare(): Promise<void>;
    /**
     * @param _block current block number
     * @param _needed need to sync block count
     * @returns the next block number to sync
     */
    succeeded(_block: IBlock, _needed?: number): Promise<IBlock>;
    /**
     *
     * @param _block current block
     * @returns void
     */
    failed(_blockNumber: IBlock): Promise<void>;
    get disable(): boolean;
    sleep(_ms: number): Promise<number>;
    refreshBlock(block: IBlock): Promise<IBlock | undefined>;
    pause(_blockNumber?: number): Promise<boolean>;
    doPause(): Promise<void>;
    shouldRollback(): Promise<{
        rollback: boolean;
        synced: IBlock | undefined;
        remote: IBlock | undefined;
    }>;
    start(): Promise<void>;
    stop(): Promise<void>;
    startSync(): Promise<void>;
    loop(): Promise<void>;
}
