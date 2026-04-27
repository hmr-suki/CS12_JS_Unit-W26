/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can CALL your functions in the console.  !!!  */

function q1() {
  /* Get_Five: Get the names of five students and return the sorted name array.
IN: nothing
DO: Ask for five names from the user and store in an array. A loop is required. The final list should be sorted. 
OUT: return the sorted name array.*/
let nameList = []
for (let i = 0; i < 5; i++) {  
  let names = prompt('Enter your name');
  nameList.push(names);

  nameList.sort()
  console.log(`Youe list is: `, nameList )

}

return nameList;
} // Get_Five
//console.log( q1 () )

function q2() {
  /*Average_mark: If a student has their Grade 12 marks in a list, find their mark average. 
IN: An array with numbers representing a student’s grade 12 marks. (Could be of length 1 to 8).
DO: Determine the average of the marks. A loop is required. 
OUT: return the average mark. 
 */


} //Average_mark
//console.log( q2(  [80, 85, 87, 86, 88, 90]  )   )

function q3() {
  /* WarmTemps: A gardener checks the soil temperature every day to see if it is warm enough to plant beans.
IN: an array of daily temperatures, and a number representing the goal temperature
DO: Print the day and the temperature until the first day that reaches or exceeds that goal temperature.
OUT: return the first day on which the goal temperature is reached or exceeded.*/


} //Warm_Temps
// console.log(q3([13, 15, 13, 18, 20, 18, 22], 20)); // returns 5
