//Problem: Square(n) Sum

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 

*/

function squareSum(numbers){
    let result =0;
    for(let i =0; i < numbers.length; i++){
       result += numbers[i] ** 2;
    }
    return result;
}
//second solution:

function squareSum(numbers){
    return numbers.map((n) => n* n).reduce((acc, currentValule) => acc + currentValule,0)
}

//third solution
function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
}


console.log(squareSum([1, 2, 2]));

