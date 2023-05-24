Bank Account Statement
This is a simple implementation of a bank account statement generator. It allows you to perform deposits, withdrawals, and view the account statement.


Requirements
Interact with the code using a REPL like IRB or Node.
Perform deposits and withdrawals.
Print an account statement with the following columns: date, credit, debit, and balance.
Data can be kept in memory, without the need for a database.
Acceptance Criteria
Given a client:

Makes a deposit of 1000 on 10-01-2023.
Makes a deposit of 2000 on 13-01-2023.
Makes a withdrawal of 500 on 14-01-2023.
When the client prints their bank statement, they should see:


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
  end


class Transaction
  def initialize(date, amount, type) 
  end

  def addTransaction
   # adds transactions together

  def format
    # Returns a string of the form 'date || credit || debit || balance'
  end
end