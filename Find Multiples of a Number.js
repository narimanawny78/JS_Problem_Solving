//Problem:Find Multiples of a Number

/*
In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.

It is guaranteed that n > 0 and limit >= n.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

Examples
n = 2; limit = 6 --> [2, 4, 6]
n = 2; limit = 5 --> [2, 4]

*/

// function findMultiples(integer, limit) {
//   //your code here
//   let arrResult = [];
//   let i = 1;
//   while(integer * i <= limit ){
//     arrResult.push(integer * i);
//     i++
//   }
//   return arrResult;
// }

//Video Solution:



function findMultiples(integer, limit) {
  //your code here
  let finalArr = [];

  for(let i = 1 ; i<= limit ; i++){
    let multiple = integer *i;
    if(multiple === limit){
        finalArr.push(multiple);
        break;
    }else if(multiple > limit){
        break;
    }else{
        finalArr.push(multiple);
    }
  }
  return finalArr;
}


//Another Solution 
// function findMultiples(integer, limit) {
//   //your code here
//   let finalArr =[];
//   for(let i = 1 ; i<= limit ; i += integer){
//     finalArr.push(i);
//   }
//   return finalArr;
// }

console.log(findMultiples(2,6));