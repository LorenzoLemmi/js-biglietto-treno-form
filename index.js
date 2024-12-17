

const submitButton = document.querySelector("form > button");
submitButton.addEventListener("click", function(event) {

    event.preventDefault ();
    submitButton.disable = true;

    const spinnerEl = submitButton.querySelector("#spinner");
    const statusSpan = submitButton.querySelector(".status");
    const originalStatusText = statusSpan.innerHTML;

    spinnerEl.classList.toggle("d-none");
    statusSpan.innerHTML = `Loading`;

    const km = parseFloat(document.querySelector("#km").value);
    const age = parseFloat(document.querySelector("#age").value);
    let price;

    if (isNaN(km) || (km == 0) || isNaN(age) || (age == 0)) {
        alert("Inserisci un numero maggiore di 0 sia per il chilometraggio che per l'età")
    } else if (age <=17) {
        price = ((km * 0.21) - [(km * 0.21) / 100 * 20])
    } else if (age >=65) {
        price = ((km * 0.21) - [(km * 0.21) / 100 * 40])
    } else {
        price = (km * 0.21)
    };
    
    const roundedPrice = alert(`€ ${price.toFixed(2).replace(".", ",")}`);
    

    submitButton.disable = false;
    spinnerEl.classList.toggle("d-none");
    statusSpan.innerHTML = originalStatusText;
    }
)


