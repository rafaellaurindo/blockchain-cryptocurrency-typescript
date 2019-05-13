class Transaction {
  private amount: number;
  private sender: string;
  private receiver: string;

  constructor(amount: number, sender: string, receiver: string) {
    this.amount = amount;
    this.sender = sender;
    this.receiver = receiver;
  }

  public toString() {
    return JSON.stringify(this);
  }
}

export { Transaction };
