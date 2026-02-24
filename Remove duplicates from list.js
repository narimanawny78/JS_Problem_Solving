//Problem: Remove duplicates from list

//Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

//Solution:
// function distinct(a) {
//     // your code here
//     let filteredarr = [];
//     for (let i = 0; i < a.length; i++) {
//         // if (!filteredarr.includes(a[i])) {
//         //     filteredarr.push(a[i]);
//         // }
//         if (filteredarr.indexOf(a[i]) == -1) {
//             filteredarr.push(a[i]);
//         }
//     }
//     return filteredarr;
// }

//Another solution

// function distinct(a) {
//     // your code here
//     let uniqueObj = new Set(a);
//     // return Array.from(uniqueObj);
//     return [...uniqueObj];
// }

//Aw mmkn a5tser el 7al el tani w a3mlou fe str wa7ed ze kda
function distinct(a) {
    // your code here
    return [...new Set(a)];
}