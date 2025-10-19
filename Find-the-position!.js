
//Problem
//Find the position!

//Problem

/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
*/

//Solution

function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   for( let i = 0; i <= alphabet.length; i++){
//     if(alphabet[i] === letter){
//         return `Position of alphabet: ${i +1}`;
//     }
//   }

//Another Solution

 return `Position of alphabet: ${alphabet.indexOf(letter) +1}`;

}

console.log(position('z'));