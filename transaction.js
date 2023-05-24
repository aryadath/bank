class Transaction {
  constructor() {
    this.transactions = [];
  }
  
  addTransaction(date, credit, debit, balance) {
    const transaction = {
      date: date,
      credit: credit,
      debit: debit,
      balance: balance,
    };
    this.transactions.push(transaction);
  }

  format() {
    let printStatement = 'date || credit || debit || balance\n'
    for (const transaction of this.transactions) {
      printStatement += `${transaction.date } || ${transaction.credit||""} || ${transaction.debit||""} || ${transaction.balance}\n`;
    }
    return printStatement.trim();
  }
}

module.exports = Transaction;
