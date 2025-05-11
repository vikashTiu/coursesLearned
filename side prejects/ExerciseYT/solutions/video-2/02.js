/*
  Exercise 2 : Write a JS program to extract the first half of a string of even length
*/ 

const firstHalf = (str) => 
  str.slice(0 , str.length / 2)

console.log(firstHalf('temp'))
console.log(firstHalf('temple'))
console.log(firstHalf('temple-Run'))