/*
  Exercise 1 : write aJS program to get the largest even number from an array of integers
*/

// ---------my method--------
// const getEven = (arr) => {
//   arr = arr.filter(num => num % 2 === 0); 
//   console.log(Math.max(...arr));//inserting array
// }

//to get largest even number
const getLargestEven = (arr) =>
  console.log(Math.max(...arr.filter(num => num%2 === 0)));

getLargestEven([12,2,3,4,33,6])
getLargestEven([2,33,4,55,6,77])
getLargestEven([2,33,4,5,66,77])


//function to get largest odd number in Array
const getLargestOdd = (arr) =>
  console.log(Math.max(...arr.filter(num => num%2 !== 0)));

getLargestOdd([1,2,22,3,44])
getLargestOdd([2,33,4,5,66,77])
