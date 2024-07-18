class Account {
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private balance: number){
    }

    deposit(amount: number): void{
        if(amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }

    getBalance(): number {
       return this.balance;
    }
}

let account = new Account(1, 'Mosh',0);
console.log(account.getBalance());