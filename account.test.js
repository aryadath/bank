const Account = require('./account.js')
const Transaction = require('./transaction.js');


describe ('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  test('it should deposit amount and update balance', () => {
    account.deposit(1000, '10-01-2023');
    expect(account.getBalance()).toEqual(1000);
  });

  test('deposit and update balance test 2', () => {
    account.deposit(1000, '10-01-2023')
    account.deposit(2000, '13-01-2023');
    expect(account.getBalance()).toEqual(3000);
  });

  // test('A withdrawal and update balance', () => {
  //   account.withdrawal(500, '14-01-2023');
  //   expect(account.getBalance()).toBe(500);
  // });
});

