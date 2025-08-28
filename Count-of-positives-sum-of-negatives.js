//Count of positives / sum of negatives



//question:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//First_Solution:

//Steps:

//Create Empty Array for the positive numbers
//Create a Variable for the sum of Negatives
//Loop through the Given Array
//Check if the numbe is positive add it to the Array , if negative add to the Sum Variable

function countPositivesSumNegatives(input) {

  if (!Array.isArray(input) || input.length === 0) return [];

  let positivesArray = [];
  let sumNegatives = 0;

  for (let i =0 ; i < input.length; i++){
    if (input[i] > 0){
        positivesArray.push(input[i]);
    }else {
        sumNegatives += input[i];
    }
  }
  return [positivesArray.length, sumNegatives];

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


//Secong Solution :

function countPositivesSumNegatives(input) {

  if (!Array.isArray(input) || input.length === 0) return [];

let positivesArray = input.filter((x) => x > 0).length;
let sumNegatives = input.filter((x) => x < 0).reduce ((acc,current) => acc + current,0)
return [positivesArray ,sumNegatives];

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
