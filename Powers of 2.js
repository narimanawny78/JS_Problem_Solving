//Problem: Powers of 2

/**
 * Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
 */

//Solution:

function powersOfTwo(n){
  return Array(n + 1).fill(0).map((n, i)=> n + i).map((n) => Math.pow(2 ,n));
}

console.log(powersOfTwo(4))