const Account = require('./account.js')
const Transaction = require('./transaction.js');


describe ('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  test('it should deposit amount and update balance', () => {
    account.deposit(1000, '10-01-2023');
    expect(account.getBalance()).toBe(1000);
  });
});

