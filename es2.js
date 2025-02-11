let newamount = prompt(` Enter your balance`);
document.getElementById("saldo").innerText = "YOUR BALANCE: \n" + newamount + "€";
function valWithdraw() {
    var numberWithdraw = document.getElementById("number_with").value;
    var val = parseInt(numberWithdraw);
    ba1.withdraw(val);
}
function valDeposit() {
    var numberDep = document.getElementById("number_deposit").value;
    var valfirst = parseInt(numberDep);
    ba1.deposit(valfirst);
}

function showData() {
    const data = new Date();
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDay();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    const dataformat = `${day.toString().padStart(2, '0')}/
                    ${month.toString().padStart(2, '0')}/
                    ${year}
                     - Time: 
                    ${hours.toString().padStart(2, '0')}:
                    ${minutes.toString().padStart(2, '0')}:
                    ${seconds.toString().padStart(2, '0')}`;
    return dataformat;
}

class BankAccount {
    #amount = newamount;
    #maxDeposit = 3000;


    constructor(a = newamount) {
        this.#amount = a;
    }
    deposit(k) {
        if (k > 0) {
            this.#amount = (this.#amount - 0 + k);
            if (k > this.#maxDeposit) {
                document.getElementById("textdeposit").innerText = (`This operation in not allowed, You can deposit max ${this.#maxDeposit} €`);
                return;

            }
            document.getElementById("textdeposit").innerText = (`Deposit of ${k}€ was made correctly.`);
            document.getElementById("saldo").innerText = "YOUR BALANCE: \n" + this.#amount + "€";
            document.getElementById("tableOfOperations").insertAdjacentHTML(`beforeend`, `
             <tr>
                  <td>${showData()}</td>
                  <td> + ${k}</td>
                  <td>${this.#amount}</td>
                </tr>`)
        }
        else if (k == 0) {
            document.getElementById("textdeposit").innerText = ("The amount must be greater than 0");
        }
    }

    withdraw(i) {
        if (i > 0 && i <= this.#amount) {
            this.#amount = (this.#amount - i);
            document.getElementById("textwithdraw").innerText = (`Withdraw of ${i}€ was made correctly.`);
            document.getElementById("saldo").innerText = "YOUR BALANCE: \n" + this.#amount + "€";
            document.getElementById("tableOfOperations").insertAdjacentHTML(`beforeend`, `
                <tr>
                  <td>${showData()}</td>
                  <td> - ${i}</td>
                  <td>${this.#amount}</td>
                </tr>`)
        }
        else {
            document.getElementById("textwithdraw").innerText = (`Withdraw not made, the amount cannot be greater than the assets.  `);
        }

    }
    checkBalance() {
        console.log(`Your current balance :${this.#amount}`);
    }
}
const ba1 = new BankAccount();
