

const closeButton = document.querySelector("#close-button")
const xCloseButton = document.querySelector("#x-close-button")
const shoppingCartButton = document.querySelector("#shopping-cart-button")


const submitButton = document.querySelector("form > button");
const spinner = submitButton.querySelector("#spinner");
const statusSpan = submitButton.querySelector(".status");


submitButton.addEventListener("click", function(event) {

    event.preventDefault ();

    
    const km = parseFloat(document.querySelector("#km").value);
    const age = parseFloat(document.querySelector("#age").value);
    let price;

    if (isNaN(km) || (km == 0) || isNaN(age) || (age == 0)) {

            submitButton.disabled = true;
            spinner.classList.toggle("d-none");
            statusSpan.innerHTML = `Loading`;
            
            
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
    const modalPrice = document.querySelector("#price");
    modalPrice.innerHTML = roundedPrice;
    
    }
)


shoppingCartButton.addEventListener("click", function(){

    submitButton.disabled = false;
    spinner.classList.toggle("d-none");
    statusSpan.innerHTML = `Conferma`;
    }
)

closeButton.addEventListener("click", function(){

    submitButton.disabled = false;
    spinner.classList.toggle("d-none");
    statusSpan.innerHTML = `Conferma`;
    }
)

xCloseButton.addEventListener("click", function(){

    submitButton.disabled = false;
    spinner.classList.toggle("d-none");
    statusSpan.innerHTML = `Conferma`;
    }
)

