var color = ["red", "blue", "orange", "yellow", "green", "purple"];
var currentIndex = 0;

function changeColor() {
  var randomIndex = Math.floor(Math.random() * color.length);
  
  if (randomIndex === currentIndex) {
    randomIndex = (randomIndex + 1) % color.length;
  }

  currentIndex = randomIndex;
  document.getElementsByTagName("body")[0].style.background = color[currentIndex];
}
