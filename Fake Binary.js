//Problem:Fake Binary

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

//Solution

// function fakeBin(x){
//     for(let i=0; i>= x.length; i++){
//     if(x >= 5){
//         x.replace(1);
//     }else{
//         x.replace(0);
//     }
//     }
//     return x;
// }

function fakeBin(x){
    return x.split('').map((n)=>n < '5' ? '0': '1').join('');
}

console.log(fakeBin(2366));