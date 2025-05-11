const add = function() {
  console.log(2+3);
}


add();
add();

//12b
function runTwice(run){
  run();
  run();
}
runTwice(function(){console.log('12b')})
const add2 = function(){
  console.log(5);
}
runTwice(add2);

//12c&12d
function startfinish(){
  document.querySelector('.button-12c').innerHTML = 'Loading...';
  setTimeout(function(){
    document.querySelector('.button-12c').innerHTML = 'Finished!';
  },1000)
}


let timeoutID;
function addCart(){
  //clear time out and reset the time
  clearTimeout(timeoutID);
  //display added
  document.querySelector('.display-cart-message').innerHTML = 'Added';

  //remove "Added" from display after 2 sec
  timeoutID = setTimeout(function(){
    document.querySelector('.display-cart-message').innerHTML = '';
  },2000);
}

 //12g
 let titleIndex = 0;
 const titles = ["welcome!" , "Hello Japan!" , "New Messages"]

 function titleChange(){
  document.title = titles[titleIndex]
  titleIndex = (titleIndex + 1) % titles.length;
 }

 setInterval(titleChange , 1000)
 
