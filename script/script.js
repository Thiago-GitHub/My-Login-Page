if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {
    setInterval(loop, 400);
}
var x = 0;

var titleText = [ 
 

   "B",
   "Be",
   "Bem",
   "Bem-",
   "Bem-V",
   "Bem-Vi",
   "Bem-Vin",
   "Bem-Vind",
   "Bem-Vindo!",


];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

document.addEventListener("mousemove", function(event) {
    let circle = document.getElementById("circle");
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
  })

document.addEventListener("click", function(event) {
    let circle = document.getElementById("circle");
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
  })