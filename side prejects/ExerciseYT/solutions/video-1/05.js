//05 - Write a program to add "New!" in front of the string and if it begins with "New!" already then return the original 

//simple addition
// const addNew = (str) => `New! ${str}`
// console.log(addNew("Offers"))

const addNew = (str) =>
  str.indexOf("New!") === 0 ? str : `New! ${str}`

console.log(addNew("Offers"))