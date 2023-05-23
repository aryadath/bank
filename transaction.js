class Transaction {
  constructor() {
    this.transactions = [];
  }

  addTransaction(date, amount) {
    const transaction = new Transaction(date, amount);
    this.transactions.push(transaction);
  }

  // formatStatement() {
  //   let statement = "date || credit || debit || balance\n";
  //   for (const transaction of this.transactions) {
  //     statement += `${transaction.date} || ${transaction.credit || ""} || ${transaction.debit || ""} || ${transaction.balance}\n`;
  //   }
  //   return statement;
  // }
}

module.exports = Transaction;
