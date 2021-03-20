

//grab button
// var myBtn = document.getElementById("btn");

//add event listener to count with each click
// var counter = 0;
//  myBtn.addEventListener("click", function(){
//      counter += 1
//      myBtn.textContent = counter
//  });

document.body.innerHTML += "<p id='paragraph'> Hoppin' Right Along! </p>"
document.getElementById("paragraph").style.color = "green";

let add = document.getElementById("increment");
let subtract = document.getElementById("decrement");
let integer = document.getElementById("number");

let counter = 0;

add.addEventListener('click', function()) {
    counter += 1;
    integer.innerHTML = counter;
};