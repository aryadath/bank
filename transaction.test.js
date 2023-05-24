const Transaction = require('./transaction')
const Account = require('./account');


describe('Transaction', () => {
  let transaction;
  let account;

  beforeEach(() => {
    transaction = new Transaction();
    account = new Account();
  });

  test('it should display transactions made in reverse chronological order', () => {
    transaction.addTransaction('14/01/2023','', 500.00, 2500.00);
    transaction.addTransaction('13/01/2023', 2000.00,'', 3000.00);
    transaction.addTransaction('10/01/2023', 1000,'', 1000);
    account.transactions = transaction;
  });

  test('it should display transactions in the specified format', () => {
    transaction.addTransaction('14/01/2023', '', '500.00', '2500.00');
    transaction.addTransaction('13/01/2023', '2000.00', '', '3000.00');
    transaction.addTransaction('10/01/2023', '1000.00', '', '1000.00');
    account.transactions = transaction;

    const printStatement = `date || credit || debit || balance
14/01/2023 ||  || 500.00 || 2500.00
13/01/2023 || 2000.00 ||  || 3000.00
10/01/2023 || 1000.00 ||  || 1000.00`;


    expect(transaction.format()).toBe(printStatement);
  });
});