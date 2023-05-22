const Transaction =require('./transaction')

class Account {
  constructor() {
    this.transaction = [];
    this.balance = 0;
  }

  deposit(amount, date) {
    const transaction = new Transaction(date,amount, 'deposit');
    this.transaction.push(transaction);
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = Account;