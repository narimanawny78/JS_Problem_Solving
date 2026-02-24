//Problem: Sum of Multiples
/*
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m should be natural numbers (positive integers). Otherwise, see the examples in your language about how to handle invalid input values.
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

//Solution:

   function sumMul(n, m) {
    //your idea here
    let result = 0;
    if (n <= 0 || m <= 0) {
        return "INVALID";
    }else{
    for (let i = n; i < m; i += n) {
        result += i;
    }
    }
    return result;
  }

