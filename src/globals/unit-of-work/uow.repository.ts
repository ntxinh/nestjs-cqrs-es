import { Connection, QueryRunner } from 'typeorm';
import { Uow } from './uow';

export class UowRepository extends Uow<QueryRunner> {
  public constructor(private connection: Connection) {
    super();
  }

  protected async begin(): Promise<QueryRunner> {
    const tx = this.connection.createQueryRunner();
    await tx.startTransaction();
    return tx;
  }

  protected commit(tx: QueryRunner): Promise<void> {
    return tx.commitTransaction();
  }

  protected rollback(tx: QueryRunner): Promise<void> {
    return tx.rollbackTransaction();
  }

  protected release(tx: QueryRunner): Promise<void> {
    return tx.release();
  }
}
