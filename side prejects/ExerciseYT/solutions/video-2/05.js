/*
  Exercise 1 : Write a JS program to check the given striings contain 2 to 4 occurance of a specific characters
*/ 
const countChar = (str , char) =>
  str.split('').filter( ch => ch === char).length;

const contain2To4 = (str , char) =>
  countChar(str , char) >= 2 && countChar(str , char) <=4;


console.log(contain2To4('ooh' , 'o'));
console.log(contain2To4('oh' , 'o'));
console.log(countChar('ooh','o'));
console.log(contain2To4('oooooh','o'));
console.log(contain2To4('oooh','o'));
