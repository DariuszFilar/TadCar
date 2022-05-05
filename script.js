window.onload = function () {
  var counter = 1; //instantiate a counter
  var maxImage = 3; //the total number of images that are available
  setInterval(function () {
    document.querySelector("header").style.backgroundImage =
      "url('images/" + (counter + 1) + ".jpg')";
    if (counter + 1 == maxImage) {
      counter = 0; //reset to start
    } else {
      ++counter; //iterate to next image
    }
    document.querySelector("header").style.transition = "2s";
  }, 5000);
};
