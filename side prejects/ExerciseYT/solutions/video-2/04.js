/*
  Exercise 4 : given two values , write a JS to find out which one is nearest to 100
*/ 

function nearValue(val1,val2) {
  let nearVal1 = 100-val1;
  let nearVal2 = 100-val2;

  if (nearVal1<nearVal2){
    return console.log("val1 is near to 100");
  }else{
    return console.log("val2 is near to 100");
  }

}

nearValue(24,25)
nearValue(24,35)
nearValue(98,99)
nearValue(102,99)

