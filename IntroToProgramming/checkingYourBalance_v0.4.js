/*
 * Programming Quiz - Checking Your Balance (3-5)
 * ver 0.4
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = true;

// your code goes here
if (isActive && checkBalance) {
    if (balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if (balance === 0) {
        console.log("Your account is empty.");
    } else {
        console.log("Your balance is negative. Please contact bank.");
    }
} else if (isActive && !checkBalance){
      console.log("Thank-you. Have a nice day!");
} else {
    console.log("Your account is no longer active.");
}
