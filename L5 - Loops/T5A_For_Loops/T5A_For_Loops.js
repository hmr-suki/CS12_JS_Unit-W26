/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  /*Exercise #1: Construct for loops that accomplish the following tasks:*/
  //a. Print the numbers 0 - 20, one number per line.
  /*
  for (let i = 0; i <=20; i++){
    console.log(i);
    
  }*/

  //b. Print only the ODD values from 3 - 29, one number per line.
  /*
  for( let i = 3; i<=30; i=i+2){
    console.log(i);
  }*/

  //c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
  /*for (let i = 12; i >= -14; i=i-2){
    console.log(i);
  }*/
  //d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3.
  for ( let i = 50; i>= 20; i=i-1){
    if (i % 3 ==0){
      console.log(i);
    }
  }
  //** (Your code should work even if you replace 50 or 20 with other numbers).
}

function t2() {
  /*Exercise #2:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
  array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  even = [];
  odd =[];
  for (let num of array){
    if (num % 2 ==0){
      even.push(num);
    }else{
      odd.push(num);
    }

  }
  console.log(even);
  console.log(odd);
}
