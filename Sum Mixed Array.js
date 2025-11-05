//Problem:Sum Mixed Array

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

//Solution

function sumMix(x){
    let result =0;
    for(let i =0; i < x.length ; i++){
        result += Number(x[i]);
    }
    return result;
}

console.log(sumMix([9, 3, '7', '3']));
// result += x.splice;


//Video Solution

function sumMix(x){
    // let newNumbersArray = [];
    // for(let i = 0; i< x.length; i++){
    //     if(typeof x[i] === 'string'){
    //         newNumbersArray.push(Number(x[i]));
    //     }else{
    //         newNumbersArray.push(x[i]);
    //     }
    // }
    // return newNumbersArray.reduce((acc, currentValue) => acc+currentValue,0);
  return x.map((n) => Number(n)).reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(sumMix([3,'9',5,'10','13',5]));

//Solution from solutions in codewars

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}
