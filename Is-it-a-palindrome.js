//problem
//Is it a palindrome

/*
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

//Solution

function isPalindrome(x) {
  // your code here
 return x.toLowerCase() == x.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome("hello"));