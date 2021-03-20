

//grab button
var myBtn = document.getElementById("btn");
myBtn.style.background = "yellow;"
myBtn.style.color = "grey";

//add event listener to count with each click
var counter = 0;
 myBtn.addEventListener("click", function(){
     counter += 1
     myBtn.textContent = counter
 });

document.body.innerHTML += "<p id='paragraph'> Hoppin' Right Along! </p>"
document.getElementById("paragraph").style.color = "green";