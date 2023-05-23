const Transaction = require('./transaction')
const Account = require('./account');


describe('Transaction', () => {
  let transaction;
  let account;

  beforeEach(() => {
    transaction = new Transaction();
    account = new Account();
  });

  test('it should add transactions made', () => {
    transaction.addTransaction('10-01-2023', 1000, 1000);
    transaction.addTransaction('13/01/2023', 2000.00, 3000.00);
    transaction.addTransaction('14/01/2023', 500.00, 2500.00);
    account.transactions = transaction;
  });
});


