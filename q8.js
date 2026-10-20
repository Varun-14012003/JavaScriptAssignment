class InvalidAmountError extends Error {
    constructor(message) {
        super(message)
        this.name = "InvalidAmountError"
    }
}

class InsufficientBalanceError extends Error {
    constructor(message) {
        super(message)
        this.name = "InsufficientBalanceError"
    }
}

let balance = 5000

function withdraw(amount) {
    if (amount <= 0) {
        throw new InvalidAmountError("Amount must be greater than zero")
    }
    if (amount > balance) {
        throw new InsufficientBalanceError("Amount exceeds available balance")
    }
    balance -= amount
    console.log(`Withdrew ${amount}. Balance: ${balance}`);
}

function tryWithdraw(amount) {
    try {
        withdraw(amount)
    } catch (error) {
        if (error.name === "InvalidAmountError") {
            console.log(`Invalid amount: ${error.message}`);
        } else if (error.name === "InsufficientBalanceError") {
            console.log(`Insufficient balance: ${error.message}`);
        } else {
            console.log(error.message);
        }
    }
}

tryWithdraw(1000)
tryWithdraw(-200)
tryWithdraw(10000)