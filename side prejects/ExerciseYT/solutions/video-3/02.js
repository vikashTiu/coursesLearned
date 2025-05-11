/*
  Exercise 1 : write a JS program to find the number of even values upto given number
*/

function evenValues(num) {
  const arr = [];
  // for(let i=0 ; i<num ; i++){
  //   arr[i]= i + 1;
  // }

  for(let i=1; i<= num; i++){
    arr.push(i);
  }
  
  console.log(arr);
  console.log(countEven(arr));
}

const countEven = (arr) =>
  arr.filter(num => num % 2 === 0).length;

evenValues(5);
evenValues(10);
evenValues(500);
evenValues(503);