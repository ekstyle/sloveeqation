export class Limiter {
  private connCounter: number = 0;
  constructor(private limitConnection: number) {
    console.log('constructor Limiter');
  }
  public newConnection(): boolean {
    if (this.connCounter < this.limitConnection) {
      // Can accept new connection
      console.log(`Accept new connection. Conn counter:${this.connCounter} Limit is ${this.limitConnection}`);
      this.connCounter++;
      return true;
    }
    // Pool is full
    return false;
  }
  public closeConnection() {
    console.log(`Connection close. Conn counter:${this.connCounter} Limit is ${this.limitConnection}`);
    this.connCounter--;
  }
  public countConnection() {
    return this.connCounter;
  }
}
