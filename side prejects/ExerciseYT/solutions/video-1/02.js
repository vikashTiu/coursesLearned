//02 - Write program to get the extension of a filename

const getFileExtension = (filename) => filename.slice(filename.lastIndexOf("."));

console.log(getFileExtension("index.html"));
console.log(getFileExtension("hello.tsv"));
console.log(getFileExtension("index.js"));
console.log(getFileExtension("index.js.js"));
console.log(getFileExtension("index.cpp"));

