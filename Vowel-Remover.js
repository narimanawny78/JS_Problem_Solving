//craete a function called shortcut to remove the lowercase vowels (a,e,i,o,u) in a given string.

//create an Array includes the 5 letters (a,e,i,o,u)
//Loop  Through the String given
// Check if the string includes any of the 5 letters
// Return the result


// function shortcut (string) {
//     let arr = ['a','e','i','o','u'];
//     let result =[];
//     for(let i =0 ; i <= string.length ; i++){
//         if(!arr.includes(string[i]) ){
//             result.push(string[i]);
//         }
//     }
//     return result.join('') ;
// }


//another solution
function shortcut (string) {
    return string.replace(/[aeiou]/g,"");
}

console.log(shortcut('hello'))