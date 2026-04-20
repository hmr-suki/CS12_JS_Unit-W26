/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You will CALL your functions in the console.  !!!  */
"use strict";

function t1() {
  /*  */
  let num=Number(prompt('Give me a number'))
  if (num < 0) {
    alert('-1');
  } else if (num > 0) {
    alert('1');
  } else {
    alert('0');
  }
} //  the sign of a number

function t2() {

  /*Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */
let login=String(prompt('Choose to log in'))
if (login == '' || login == null) {
  alert('Canceled');

} else if (login == admin) {
  let password = (prompt('What is the password?'));

  if (password == 'TheMaster') {
    alert('Welcome');
  }else if (password == '' || password == null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
  

} else {
  alert('I do not know you');
}
} //  th
 //Check the Login

function t3() {
  /* Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.*/
} //Check Range Between
let num=Number(prompt('age'))
if(num <= 90 && num >= 14){
  alert('In range')
}
else{
  alert('Outside the range')
}
function t4a() {
  /* */
} //Check Range outside

function t4b() {
  /* */
} //Check Rang outside
