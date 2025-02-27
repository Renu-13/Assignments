
abstract class BankAccount {
     accountNumber: string;
     balance: number;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    abstract withdraw(amount: number): boolean;

    getBalance(): number {
        return this.balance;
    }
}
class SavingsAccount extends BankAccount {
    withdrawalLimit: number;
    constructor(accountNumber: string, initialBalance: number, withdrawalLimit: number) {
        super(accountNumber, initialBalance);
        this.withdrawalLimit = withdrawalLimit;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.balance && amount <= this.withdrawalLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

class CheckingAccount extends BankAccount {
   overdraftLimit: number;

    constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
const savings = new SavingsAccount("S", 1000, 500);
savings.deposit(200);
console.log(savings.withdraw(300)); 
console.log(savings.withdraw(700)); 

const checking = new CheckingAccount("C", 500, 200);
checking.deposit(100);
console.log(checking.withdraw(550)); 
console.log(checking.withdraw(800)); 
