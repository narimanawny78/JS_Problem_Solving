//First Solution

//create Variable =0
//Loop through the array
//Divide the variable to the Array length

function findAverage(array) {
  if (array === null || array.length === 0 ) return 0;
  let sum =0;
  for(let i =0; i< array.length ;i++){
    sum += array[i];
  }
  return sum/array.length;
}



//Second Solution
function findAverage(array) {
  if (array === null || array.length === 0 ) return 0;
  return array.reduce((acc , current)=> acc + current) / array.length ;
}

//solutions 

var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;