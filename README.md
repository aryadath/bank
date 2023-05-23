User story:
Specification
Requirements
You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).
Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

2. Design Class System

┌────────────────────────────┐
│ Account                    │
│                            │
│ - deposit(amount: float. date:string)               
│ - withdrawal(amount: float, date: str)                     
│ - get balance (returns in date,balance)
  - get transaction(returns list)
  -print statement (form: date, credit/debit, balance)
└───────────┬────────────────┘
            │
            │ owns a list of
            ▼
┌─────────────────────────┐
│ Transactions            │
│                         │
│ - date: str             │
│ - amount:float          │
│ - transaction type: (withdrawl/deposit)   
│                         │
└─────────────────────────┘

class Account
  def initialize
    # ...
  end

  def get balance
  end

  def deposit
    # adds deposit to balance returns new balance
  end
  
  def withdrawal
    # subtracts from balance
  end

  def printStatment
end

class Transaction
  def initialize(date, amount, type) 
  end

  def add
   # adds transactions together

  def format
    # Returns a string of the form 'date || credit || debit || balance'
  end
end