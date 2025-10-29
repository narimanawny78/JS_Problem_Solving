//problem
//Get the mean of an array

/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

//1- Declare Sum Variable to Sum all the Numbers
//2- Declare Empty Vraiable for the average
//3- Looping through the Array of number
//4- Add each Number to the Sum variable
//5- Divide The Sum /The Array length
//6- Round the Numberto the Nearest Integer
//7- Return the Average

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array

  let sum = 0;
  let average;
  for(let i=0; i< marks.length;i++){
    sum += marks[i];
  }
  average = sum / marks.length;
  return Math.floor (average);
}

//Second Solution

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array

  return Math.floor(marks.reduce(((acc , num) => acc + num),0) / marks.length);
  
}