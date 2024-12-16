


const submitButton = document.querySelector("form > button");
submitButton.addEventListener("click", function(event) {
    event.preventDefault ()
    submitButton.disable = true
    submitButton.querySelector("#spinner").classList.toggle("d-none")
    submitButton.querySelector(".status").innerHTML = `Loading...`
})


