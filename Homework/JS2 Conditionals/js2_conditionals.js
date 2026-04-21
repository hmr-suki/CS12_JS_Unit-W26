/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You will CALL your functions in the prompt.  !!!  */

function q1() {
  let grade=Number(prompt("What's your grade"));
  if(grade >= 90){
    alert("Excellent");
  }
  else if(grade >= 80 && grade < 90){
    alert("Great Work");
  }
  else if(grade >= 70 && grade < 80){
    alert("Well Done");
  }
  else if(grade >= 60 && grade < 70){
    alert("Pass!");
  }
  else{
    alert("Fail");
  }
  /* Create a grading program that prompts a student to enter their grade on an assignment. Depending on the grade, the console should display a message according to the grade boundaries.*/
} // Grade_Boundaries

function q2() {
  let model = Number(prompt("Enter your car model number"));
  if (model == 119 ||model == 179){
    alert("Recalled");
  }
  else if (model >=189 && model <=203){
    alert("Recalled");
  }
  else if (model >= 235 && model <= 252){
    alert("Recalled");
  }
  else{
    alert("Not recalled");
  }

  /* There have been some safety recalls on a number of cars at your dealership. Cars with model numbers 119, 179, 189 through 203, and 235-252 are all found to be defective. Create a program to enable the user to check the model number. Prompt for model number, print “Recalled” or “Not recalled”.*/
} //Recall_Number

function q3() {
  let Name = prompt("Enter your name");
  let rate = Number(prompt('Enter your hourly wage'));
  let time = Number(prompt("Enter your work hours in a week"));
  let salary = 0;

  if (time <= 40){
    salary = rate * time
  }
  else{
    salary = rate * 40 + rate * 1.5 * (time - 40)
  }

  alert(`Pay of ${Name}: $${salary}`)
  /* Create a wages program for your employees to calculate weekly pay.
Prompt for the employee name, rate of pay, and number of hours.
If the employee works more than 40 hours, they will be paid an overtime rate of 1.5 x normal hourly rate for any hours over 40.  Print the total pay in a nice sentence.*/
} //Weekly_Pay
