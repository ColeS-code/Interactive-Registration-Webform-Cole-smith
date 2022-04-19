
// *Name Focus State* gets the id of 'name' to add a focus state to the text field. Snippet from: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#focus_on_a_text_field

focusMethod = function getFocus() {
    document.getElementById("name").focus();
}

// *Job Role section* variables to store the select, and text id fields in job roles as well as hiding the other drop down menu as default.

const otherJobRole = document.getElementById("other-job-role");

const jobRole = document.getElementById("title");

otherJobRole.hidden = true;

// this listens for any change made to the drop down menu, once a change occurs the job role selection either hides or displays itself.

jobRole.addEventListener("change", event => {
    if (event.target.value === "other") {
        otherJobRole.hidden = false;
    } else if (event.target.value !== "other") {
        otherJobRole.hidden = true;
    }
});

// *T shirt selection section*

const design = document.getElementById("design");

const color = document.getElementById("color");

const option = document.getElementById("color").children;

color.disabled = true;

// listens for a change in the shirt design interface, allowing the user to pick a theme of shirt based on which option they select.

design.addEventListener("change", event => {
    color.disabled = false;
    for (let i = 0; i < option.length; i++) {

        const value = event.target.value;
        const theme = option[i].getAttribute("data-theme");

        if (value === theme) {
            option[i].hidden = false;
            option[i].setAttribute("selcted", true);

        } else if (value !== theme) {
            option[i].hidden = true;
            option[i].removeAttribute("selected", false);
        }
    }  
});

// *register for activites section*

const register = document.getElementById("activities");

const totalPrice = document.getElementById("activities-cost");

let total = 0;

// listens for a check box to be checked, once checked, the total price is added or subtracted at the bottom of the fieldset. 
register.addEventListener("change", event => {
    
    const dataType = +event.target.getAttribute("data-cost");

    const checkedBox = event.target;

        if (checkedBox.checked) {
            total = total + dataType; 
        } else {
            total = total - dataType;
        }
        totalPrice.innerHTML = `total:$${total}`;
    }
);

// *payment method section*

const paymentMethod = document.getElementById("payment");

const creditCard = document.getElementById("credit-card");

const payPal = document.getElementById("paypal");

const bitCoin = document.getElementById("bitcoin");

payPal.hidden = true;
bitCoin.hidden = true;
paymentMethod[1].selected = true;

// listens for one of the payment options to be selected, once selected the other options are hidden.
paymentMethod.addEventListener("change", event => {

    if (event.target.value === "bitcoin") {
        bitCoin.hidden = false;
        payPal.hidden = true;
        creditCard.hidden = true;

    } else if (event.target.value === "paypal") {
        payPal.hidden = false;
        bitCoin.hidden = true;
        creditCard.hidden = true;

    } else {
        payPal.hidden = true;
        bitCoin.hidden = true;
        creditCard.hidden = false;

    }
});

//

const userName = document.getElementById("name");

const email = document.getElementById("email");

const creditNumber = document.getElementById("cc-num");

const zipCode = document.getElementById("zip-code");

const cvv = document.getElementById("cvv");

const form = document.querySelector("form");

//

function validationTester(input, test){
    const parent = input.parentElement;
    if(!test){
        parent.classList.add('not-valid');
        parent.classList.remove('valid');
        parent.lastElementChild.style.display = 'block';
    }
    if(test){
        parent.classList.add('valid');
        parent.classList.remove('not-valid');
        parent.lastElementChild.style.display = 'none';
    }
    return test;



form.addEventListener("submit", event => {
    
});