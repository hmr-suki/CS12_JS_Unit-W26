/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  let arr = ['Jazz','Blues']

  /* Create an array styles with items Jazz and Blues.
Append Rock-n-Roll to the end.
Replace the value in the middle with Classics. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array. (Prepend means add to the beginning.) */
} //  5 array operations

function t2() {
  let word = 'water,space suite,food,plasma sword,batteries';
  let array= word.split(',');
  array.sort();
  let newWords = array.join(",");
  console.log(newWords);

  /*Start with the string water,space suits,food,plasma sword,batteries.
Use split to create an array, alphabetize the list, and remake it into a string again. */
} // Using split and join
