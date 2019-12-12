import { QueryRunner } from 'typeorm';
import { IUowObject } from './uow-object.interface';

export class UowEntity implements IUowObject<QueryRunner> {
  public async createByTx(tx: QueryRunner): Promise<void> {
    await tx.manager.insert(this.constructor, this);
  }

  public async updateByTx(tx: QueryRunner): Promise<void> {
    const metadata = tx.connection.getMetadata(this.constructor);
    await tx.manager.update(
      this.constructor,
      { ...metadata.getEntityIdMap(this) },
      this,
    );
  }

  public async deleteByTx(tx: QueryRunner): Promise<void> {
    await tx.manager.remove(this);
  }
}
