import { Block } from './Block';
import { ITransaction } from './interfaces/ITransaction';

class Blockchain {
  private blockchain!: Block[];
  private pendingTransactions!: ITransaction[];

  constructor() {
    this.pendingTransactions = [];
    this.blockchain = [new Block('GENESIS_HASH', 0, '', Date.now(), this.pendingTransactions)];
  }

  public addNewTransaction(transaction: ITransaction) {
    this.pendingTransactions.push(transaction);
  }

  public getBlockchain(): Block[] {
    return this.blockchain;
  }

  public getLastBlock(): Block {
    return this.blockchain[this.blockchain.length - 1] || null;
  }

  public getPendingTransactions(): ITransaction[] {
    return this.pendingTransactions;
  }
}

export { Blockchain };
