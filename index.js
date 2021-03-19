

//grab button
var myBtn = document.getElementById("btn");

//add event listener to count with each click
var counter = 0;
myBtn.addEventListener("click", function(){
    counter += 1
    myBtn.textContent = counter
});