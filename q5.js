class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder
        this.balance = balance
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Enter a valid amount");
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Enter a valid amount");
        } else if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`Current balance: ${this.balance}`);
    }
}

const account = new BankAccount("Varanasya", 5000)

account.checkBalance() 
account.deposit(2000) 
account.withdraw(1500) 
account.withdraw(10000) 
account.checkBalance() 