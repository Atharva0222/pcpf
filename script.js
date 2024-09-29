
    // Toggle theme function
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
    }

    // Object-Oriented Paradigm: BankAccount class
    class BankAccount {
        constructor(balance = 0) {
            this.balance = balance;
        }

        deposit(amount) {
            this.balance += amount;
            this.logAction('deposit', amount);
        }

        withdraw(amount) {
            if (amount > this.balance) {
                alert('Insufficient funds.');
            } else {
                this.balance -= amount;
                this.logAction('withdraw', amount);
            }
        }

        getBalance() {
            return this.balance;
        }

        logAction(action, amount) {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `You ${action}ed $${amount}. Current balance: $${this.balance}`;
        }
    }

    // Global instance of BankAccount (initialized later)
    let myAccount;

    // Functional Paradigm: function to initialize the account
    const initAccount = () => {
        const balanceInput = document.getElementById('balance').value;
        const initialBalance = parseFloat(balanceInput) || 0;
        myAccount = new BankAccount(initialBalance);
        document.getElementById('result').innerHTML = `Account initialized with balance: $${myAccount.getBalance()}`;
    };

    // Event-driven function for depositing money
    function deposit() {
        if (!myAccount) initAccount();
        const amountInput = document.getElementById('amount').value;
        const depositAmount = parseFloat(amountInput) || 0;
        myAccount.deposit(depositAmount);
    }

    // Event-driven function for withdrawing money
    function withdraw() {
        if (!myAccount) initAccount();
        const amountInput = document.getElementById('amount').value;
        const withdrawAmount = parseFloat(amountInput) || 0;
        myAccount.withdraw(withdrawAmount);
    }
