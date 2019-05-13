import * as CryptoJS from 'crypto-js';

import { Block } from '../Block';

class BlockUtils {
  public calculateHash(nonce: number, previousHash: string, timestamp: number, data: any): string {
    return CryptoJS.SHA256(nonce + previousHash + timestamp + data).toString();
  }

  public calculateHashForBlock(block: Block): string {
    return this.calculateHash(block.getNonce(), block.getPreviousHash(), block.getTimestamp(), block.getTransactions());
  }
}

export default new BlockUtils();
