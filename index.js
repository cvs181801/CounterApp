var myBtn = document.getElementById("btn");

myBtn.addEventListener("click", function() {
    counter += 1
    myBtn.textContent = counter
})