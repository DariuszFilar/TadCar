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

  // See MDN for more info on IntersectioObserver
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mybutton.style.opacity = 0;
      } else {
        mybutton.style.opacity = 1;
      }
    });
  };
  const mybutton = document.getElementById("back-top");
  const observer = new IntersectionObserver(callback);
  const observed = document.getElementById("observed");
  observer.observe(observed);
};
