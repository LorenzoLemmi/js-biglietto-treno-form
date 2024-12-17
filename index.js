

const submitButton = document.querySelector("form > button");
submitButton.addEventListener("click", function(event) {

    event.preventDefault ();

    const spinner = submitButton.querySelector("#spinner");
    const statusSpan = submitButton.querySelector(".status");


    const km = parseFloat(document.querySelector("#km").value);
    const age = parseFloat(document.querySelector("#age").value);
    let price;

    if (isNaN(km) || (km == 0) || isNaN(age) || (age == 0)) {

            submitButton.disabled = true;
            spinner.classList.toggle("d-none");
            statusSpan.innerHTML = `Loading`;
            alert("Inserisci un numero maggiore di 0 sia per il chilometraggio che per l'età")
            
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

const spinner = submitButton.querySelector("#spinner");
const statusSpan = submitButton.querySelector(".status");

const shoppingCartButton = document.querySelector("#shopping-cart-button")
shoppingCartButton.addEventListener("click", function(){

    submitButton.disabled = false;
    spinner.classList.toggle("d-none");
    statusSpan.innerHTML = `Conferma`;
    }
)

const closeButton = document.querySelector("#close-button")
closeButton.addEventListener("click", function(){

    submitButton.disabled = false;
    spinner.classList.toggle("d-none");
    statusSpan.innerHTML = `Conferma`;
    }
)


