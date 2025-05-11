/*
  Exercise 1 : write aJS program to find the number of even digits in an array
*/

const countEvenNumbers = (arr) =>
  arr.filter(num => num % 2 === 0).length;

console.log(countEvenNumbers([1,2,3,5,4,6,7]));
console.log(countEvenNumbers([1,2,3,5,4,6,10,100]));