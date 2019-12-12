export interface IUnitOfWork {
  beginWork(): void;
  commitWork(): Promise<void>;
}
