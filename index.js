


const submitButton = document.querySelector("form > button");
submitButton.addEventListener("click", function(event) {
    event.preventDefault ()
    submitButton.disable = true

    const spinnerEl = submitButton.querySelector("#spinner")
    const statusSpan = submitButton.querySelector(".status")
    const originalStatusText = statusSpan.innerHTML

    spinnerEl.classList.toggle("d-none")
    statusSpan.innerHTML = `Loading`

    submitButton.disable = false
    spinnerEl.classList.toggle("d-none")
    statusSpan.innerHTML = originalStatusText
    }
)


