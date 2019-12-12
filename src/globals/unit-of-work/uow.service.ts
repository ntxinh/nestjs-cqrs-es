import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { UowEntity } from './uow.entity';
import { UowRepository } from './uow.repository';

@Injectable()
export class UowService extends UowRepository {
  public constructor(connection: Connection) {
    super(connection);
  }

  public async create(entity: UowEntity): Promise<void> {
    await this.markCreate(entity);
  }

  public async update(entity: UowEntity): Promise<void> {
    await this.markUpdate(entity);
  }

  public async delete(entity: UowEntity): Promise<void> {
    await this.markDelete(entity);
  }
}
