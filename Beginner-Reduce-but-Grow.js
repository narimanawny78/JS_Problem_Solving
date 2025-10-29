//problem 

//Beginner - Reduce but Grow

/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

/* Steps:
1- Declare Through the Integers(Numbers) Array
2- Loop the Multiplying result
3- Add the Multiplying result to the Variable
4- return the Result
*/

//Soltuion

// function grow(x){
//     let result = 1;
//     for (let i= 0; i < x.length; i++){
//         result *= x[i];
//     }
//     return result;
// }


//another answer:

function grow(x){
    return x.reduce(((acc, curentValue)=> acc * curentValue ));
}

console.log(grow([1, 2, 3, 4]));