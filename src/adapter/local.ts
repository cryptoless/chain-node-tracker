export abstract class LocalAdapter<IBlock> {
  abstract getBlockByNumber(number: number): Promise<IBlock | undefined>;
  abstract getLatestBlock(blockNumber?: number): Promise<IBlock>;
  abstract upsertBlock(block?: IBlock): Promise<IBlock>;
}
