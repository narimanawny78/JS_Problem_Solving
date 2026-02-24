//Problem : Remove First and Last Character Part Two

/*
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

//Steps:
//if str = "" or length = 1 or 2 return null

//solution:
function array(string) {
    //your code here
    let splitedarr = string.split(',');

    if(splitedarr === "" || splitedarr.length < 3) return null;
  
    let arr = [];
    for(let i = 1; i < splitedarr.length -1; i++){
        arr.push(splitedarr[i]);
    }
    return arr.join(" ");
}

//Second solution
function array(string) {
    //your code here
    return string.split(',').slice(1, -1).join(' ') || null;
    //or 
    // let splitedarr = string.split(',');
    // if(splitedarr === "" || splitedarr.length < 3) return null;
    // return splitedarr.slice(1, -1).join(" ");
}

//Wrong Solution:
// function array(string) {
//     //your code here
//     if(string ==="" || string.length < 3){
//         return null;
//     }
//     let arr = [];
//     for(let i = 1; i < string.length -1; i++){
//         if(string[i] === ','){
//             arr.push('');
//         } else {
//             arr[arr.length -1] += string[i];
//         }
//     }
//     return arr.join(' ');
// }



