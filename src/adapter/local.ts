export abstract class LocalAdapter<IBlock> {
  abstract getBlockByNumber(number: number): Promise<IBlock | null>;
  abstract getLatestBlock(blockNumber?: number): Promise<IBlock>;
}
