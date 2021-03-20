

//grab button
var myBtn = document.getElementById("btn");
myBtn.style.background = "yellow;"
myBtn.style.color = "dark blue";

//add event listener to count with each click
var counter = 0;
 myBtn.addEventListener("click", function(){
     counter += 1
     myBtn.textContent = counter
 });

// function bunnyClick() {
//     var bunny = document.getElementById("myDiv");
//     if bunny.style.display === "none") {
//         bunny.style.display = "block";
//     } else {
//         bunny.style.display = "none"
//     }
// }

document.body.innerHTML += "<p id='paragraph'> Hoppin' Right Along! </p>"
document.getElementById("paragraph").style.color = "green";