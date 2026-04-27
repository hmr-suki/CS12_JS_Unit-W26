/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

/* 
Function: number_generator
	In: n - how many numbers to generate,    L - lowest number ,  H - highest number
	Do:  Randomly generate n numbers in the range L to H that are all unique. Return sorted list.
	Out: sorted unique number list
Random number generation → Link to Random Number in JS
Function Notation -> Link to Functions in JS
Using ARRAY  to keep track of list. Checking if an item is already in a list. 
Return (part of function notation)
*/

function number_generator() {
  /* */
  let n = Number(prompt('how many numbers'));
  let L = Number(prompt('What is the lowest number'));
  let H = Number(prompt('what is the highest number'));
  let array=[];

  if (n > H- L +1){
	console.log('Error');
	return;
  }


  while (array.length < n){
	let randomNum = Math.floor(Math.random() * (H - L + 1) + L);

	if (!array.include(randomNum)){
		array.push(randomNum);
	}
  }

  array.sort(function(a,b)) {
	return a - b;
  }


} // number_generator
