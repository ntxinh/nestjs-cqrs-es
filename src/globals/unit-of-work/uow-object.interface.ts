export interface IUowObject<Tx> {
  createByTx(tx: Tx): Promise<void>;
  updateByTx(tx: Tx): Promise<void>;
  deleteByTx(tx: Tx): Promise<void>;
}
