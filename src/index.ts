import crypto from 'crypto';

interface BlockShape {
  hash: string;
  preHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public preHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(preHash, height, data);
  }
  static calculateHash(preHash: string, height: number, data: string) {
    const toHash = `${preHash}${height}${data}`;
    return crypto.createHash('sha256').update(toHash).digest('hex');
  }
}
