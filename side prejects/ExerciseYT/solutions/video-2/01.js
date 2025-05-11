/*
  Exercise 1 : Write a JavaScript program to create a new string from a given taking the first 3 characteres and the last 3 string and adding them together . The string length must be 3 or more , if not  , the original string is returned
*/ 

//----MY SOLUTION---
// let str = ""
// function makeNewString(str) {
//   let newStr = "";
//   if(str.length <= 3){
//     return str;
//   }
//   newStr = str.slice(0 ,3)+ str.slice(-3);
//   return newStr;
  
// }

// console.log(makeNewString('abc'));


const makeNewString = (str) => 
  (str.length < 3) ? str : str.slice(0 , 3) + str.slice(-3);


console.log(makeNewString('abc'))
console.log(makeNewString('abcdef'))
console.log(makeNewString('abc123abc123'))
console.log(makeNewString('ab'))