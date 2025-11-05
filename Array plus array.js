//Problem: Array plus array

/**
 * I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
 */

//Solution:

function arrayPlusArray(arr1, arr2) {
 return [...arr1, ...arr2].reduce((a, b) => a + b, 0); //something went wrong
}

console.log(arrayPlusArray([1,2], [1,2]));

//video solution
//Search on concat
function arrayPlusArray(arr1, arr2) {
 return arr1.concat(arr2).reduce((a, b) => a + b, 0); //something went wrong
}