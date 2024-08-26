document.getElementById('myInput').addEventListener('keydown', function(event) {
    // Check if Enter was pressed
    if (event.keyCode === 13) {
      // Prevent the default action
      event.preventDefault();
      
      // Trigger the button click
      document.getElementById('myButton').click();
    }
  });