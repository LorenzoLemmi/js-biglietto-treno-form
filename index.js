// Modal constants
const modalTitle = document.querySelector("#exampleModalLabel");
const modalPrice = document.querySelector("#price");
const closeButton = document.querySelector("#close-button")
const xCloseButton = document.querySelector("#x-close-button")
const shoppingCartButton = document.querySelector("#shopping-cart-button")

// Submit-button constants
const submitButton = document.querySelector("form > button");
const spinner = submitButton.querySelector("#spinner");
const statusSpan = submitButton.querySelector(".status");

// Event on submit-button click
submitButton.addEventListener("click", function(event) {

    event.preventDefault ();


    const km = parseFloat(document.querySelector("#km").value);
    const age = parseFloat(document.querySelector("#age").value);
    let price;

    if (isNaN(km) || (km == 0) || isNaN(age) || (age == 0)) {

            submitButton.disabled = true;
            spinner.classList.toggle("d-none");
            statusSpan.innerHTML = `Loading`;

            closeButton.classList.toggle("d-none");
            shoppingCartButton.classList.toggle("d-none");
            closeButton.disabled = true;
            shoppingCartButton.disabled = true;
            modalTitle.innerHTML = `ATTENZIONE`
            modalPrice.innerHTML = `Per favore riempi i campi con un numero maggiore di 0`

        } else if (age <=17) {

            submitButton.disabled = true;
            spinner.classList.toggle("d-none");
            statusSpan.innerHTML = `Loading`;
            price = ((km * 0.21) - [(km * 0.21) / 100 * 20])

        } else if (age >=65) {

            submitButton.disabled = true;
            spinner.classList.toggle("d-none");
            statusSpan.innerHTML = `Loading`;
            price = ((km * 0.21) - [(km * 0.21) / 100 * 40])

        } else {

            submitButton.disabled = true;
            spinner.classList.toggle("d-none");
            statusSpan.innerHTML = `Loading`;
            price = (km * 0.21)
        };
    
   
    const roundedPrice = `€ ${price.toFixed(2).replace(".", ",")}`;
    modalPrice.innerHTML = `Chilometri: ${km} <br> Età: ${age} <br> Prezzo: ${roundedPrice}`;
    
    }
)
// End

// Event on Shopping-cart-button click
shoppingCartButton.addEventListener("click", function(){

    submitButton.disabled = false;
    spinner.classList.toggle("d-none");
    statusSpan.innerHTML = `Conferma`;
    }
)
// End


// Event on Close-button click
closeButton.addEventListener("click", function(){

    submitButton.disabled = false;
    spinner.classList.toggle("d-none");
    statusSpan.innerHTML = `Conferma`;
    }
)
// End


// Event on X-close-button click
xCloseButton.addEventListener("click", function(){

    submitButton.disabled = false;
    spinner.classList.toggle("d-none");
    statusSpan.innerHTML = `Conferma`;
    setTimeout(function() {

        closeButton.disabled = false;
        shoppingCartButton.disabled = false;
        closeButton.classList.toggle("d-none");
        shoppingCartButton.classList.toggle("d-none");
        modalTitle.innerHTML = `Riepilogo`;
        }, 1000);

    }
)
// End

