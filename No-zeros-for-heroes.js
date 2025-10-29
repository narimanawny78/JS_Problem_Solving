//Problem 
//No zeros for heroes

/**
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450   -> 145
960000 -> 96
1050   -> 105
-1050  -> -105
0      -> 0
Note: Zero should be left as it is.

 */

//Solution

function noBoringZeros(n) {
  let stringParam = String(n);
  while(stringParam.lastIndexOf(0) === stringParam.length -1){
    stringParam =stringParam.slice(0 ,stringParam.length -1);
  }
  return Number(stringParam);
}

console.log(noBoringZeros(1234500000));


//Solution2 with better performans as solution one exceeded the time limit
// function noBoringZeros(n) {
//   let stringParam = String(n);
//   while(stringParam.endsWith(0)){
//     stringParam =stringParam.slice(0 ,stringParam.length -1);
//   }
//   return Number(stringParam);
// }

