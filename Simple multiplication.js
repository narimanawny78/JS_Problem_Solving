//Problem:Simple multiplication

/**
 * This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 */

//Solution:

//wrong solution because the probelm says it is even muliply it with it if it is odd multiply it with nine
function simpleMultiplication(number) {
    // your code........
    let result = 0;
    result = number * 8
    return result % 2 === 0 ? "even" : "odd";
}

//right solution
function simpleMultiplication(number) {
    // your code........
    return number % 2 === 0 ?  number * 8 : number * 9 ;
}

 console.log(simpleMultiplication(4));
