//Problem : Grasshopper - Summation

/*
Summation
Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

*/

/*
Declare the Result variable
Loop through the Given Number
Add the Number
Return the Result
*/

//Solution 

// var summation = function (num) {
//   // Code here
//   let result = 0;
//   for(let i=0; i <= num; i++ ){
//     result += i;
//   }
//   return result;
// }

// console.log(summation(8));

var summation = function (num) {
  // Code here
  return Array(num).fill(true).reduce((acc,currentValue, index)=> acc + index+1,0)
}

console.log(summation(8));

