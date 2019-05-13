import { ITransaction } from './interfaces/ITransaction';

class Block {
  private hash: string;
  private nonce: number;
  private previousHash: string;
  private timestamp: number;
  private transactions: ITransaction[];

  constructor(hash: string, nonce: number, previousHash: string, timestamp: number, transactions: ITransaction[]) {
    this.hash = hash;
    this.nonce = nonce;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.transactions = transactions;
  }

  public getHash(): string {
    return this.hash;
  }

  public getNonce(): number {
    return this.nonce;
  }

  public getPreviousHash(): string {
    return this.previousHash;
  }

  public getTimestamp(): number {
    return this.timestamp;
  }

  public getTransactions(): ITransaction[] {
    return this.transactions;
  }
}

export { Block };
