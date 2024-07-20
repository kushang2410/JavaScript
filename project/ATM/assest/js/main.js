const validUser = "kushang_tanawala";
const validPIN = "1234";
let balance = 10000;
function submitbtn() {
    const user = document.getElementById("user").value;
    const pin = document.getElementById("fakePassword").value;

    if (user === validUser && pin === validPIN) {
        Result("successfully login");
        document.getElementById('option-btn').style.display = 'block'
        document.getElementById('user-name').style.display = 'none'
        document.getElementById('eye-btn').style.display = 'none'
        return true;
    } else {
        Result("Invalid user or PIN. Please try again.");
        return false;
    }
}
function checkBalance() {
    document.getElementById('amount').style.display = 'none'
    if (submitbtn()) {
        Result(`Your balance is ₹${balance}`);
    }
}
function deposit() {
    if (submitbtn()) {
        const amount = parseFloat(document.getElementById('amount').value);
        document.getElementById('amount').style.display = 'block'
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            Result(`Deposit successful. Your new balance is ₹${balance}`);
        } else {
            Result("Invalid amount. Please enter a valid positive number.");
        }
    }
}

function withdraw() {
    if (submitbtn()) {
        const amount = parseFloat(document.getElementById('amount').value);
        document.getElementById('amount').style.display = 'block'
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            Result(`Withdrawal successful. Your new balance is ₹${balance}`);
        } else {
            Result("Invalid amount or insufficient funds.");
        }
    }
}
function exit() {
    document.getElementById('option-btn').style.display = 'none'
    document.getElementById('user-name').style.display = 'inline-flex'
    Result("Thank you for using the ATM. Have a nice day!");
}
function Result(message) {
    const idList = document.querySelectorAll("#result");
    for (i = 0; i < idList.length; i++)
        idList[i].innerHTML = message;
}
var password = document.getElementById('fakePassword');
      var toggler = document.getElementById('toggler');

      showHidePassword = () => {
        if (password.type == 'password') {
          password.setAttribute('type', 'text');
          toggler.classList.add('fa-eye-slash');
        } else {
          toggler.classList.remove('fa-eye-slash');
          password.setAttribute('type', 'password');
        }
      };

      toggler.addEventListener('click', showHidePassword);