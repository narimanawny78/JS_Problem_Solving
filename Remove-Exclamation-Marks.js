//Problem 
// Remove Exclamation Marks 

/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

//solution

function removeExclamationMarks(s) {
//  return s.replace(/[!]/g,"");
// another solution
    return s.split("").filter((e) => e !== '!').join('');
}

console.log(removeExclamationMarks('hello!! wo!!rld'))