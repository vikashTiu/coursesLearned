//04 - wrtie a program to get the surrent Date 
// Expected output : mm-dd-yyyy , mm/dd/yyyy , dd/mm/yyyy

const currentDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth()+1;
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
} 

console.log(currentDate());