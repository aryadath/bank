const Transaction =require('./transaction')

class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  deposit(amount, date) {
    const transaction = new Transaction(date,amount, 'deposit');
    this.transactions.push(transaction);
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }


  withdrawal(amount,date) {
    const transaction = new Transaction(date,amount, 'withdrawal');
    this.transactions.push(transaction);
    this.balance -= amount;
  }
}

module.exports = Account;