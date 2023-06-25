let container = document.querySelector(".seamless_container");
container.addEventListener("mousemove", function(e) {
    container.style.backgroundPositionX = -e.offsetX * 1.32 + "px";
    container.style.backgroundPositionY = -e.offsetY * 0.455 + "px";
  }
);

container.addEventListener("mouseleave", function() {
    container.style.backgroundPosition = "0px 0px";
  }
);


function mobile_toggle() {
  var x = document.getElementById("mobilelinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}