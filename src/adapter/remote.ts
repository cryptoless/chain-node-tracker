export abstract class RemoteAdapter<IBlock> {
  abstract getBlockByNumber(number: number): Promise<IBlock | undefined>;
  abstract getLatestBlock(): Promise<IBlock>;
}
