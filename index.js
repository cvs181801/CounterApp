

//grab button
// var myBtn = document.getElementById("btn");

//add event listener to count with each click
// var counter = 0;
//  myBtn.addEventListener("click", function(){
//      counter += 1
//      myBtn.textContent = counter
//  });

//fun text!
document.body.innerHTML += "<p id='paragraph'> Hoppin' Right Along! </p>"
document.getElementById("paragraph").style.color = "green";

//grab the increment button, the decrement button, and the number
let add = document.getElementById("incrementBtn");
let subtract = document.getElementById("decrementBtn");
let integer = document.getElementById("number");

//set the counter to start at 0
let counter = 0;

//create an 'increment' event listener so the number will increase when button is clicked
add.addEventListener('click', function() {
    counter += 1;
    integer.innerHTML = counter;
})