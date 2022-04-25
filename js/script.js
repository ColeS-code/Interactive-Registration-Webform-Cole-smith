
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

let activities = 0;

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

// *Validation*

const userName = document.getElementById("name");

const email = document.getElementById("email");

const creditNumber = document.getElementById("cc-num");

const zipCode = document.getElementById("zip");

const cvv = document.getElementById("cvv");

const form = document.querySelector("form");

const activityBox = document.getElementById("activities")

const emailHint = document.getElementById("email-hint")

// The function below allows for validation testing. then with the helper functions below it, the code will check the required fields for proper inputs.

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
}

const nameValidator = () => {
    const nameValue = userName.value;
    const testUsername = /^[a-zA-Z ]+$/.test(nameValue);
    const test = validationTester(userName, testUsername); 
    return test;
}

const emailValidator = () => {
    const emailValue = email.value;
    const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/i.test(emailValue);
    const test = validationTester(email, emailTest);
    return test;
}

const creditValidator = () => {
    const creditValue = creditNumber.value;
    const cardNumberTest = /^\d{13,16}$/.test(creditValue);
    const test = validationTester(creditNumber, cardNumberTest);
    return test;
}

const zipValidator = () => {
    const zipValue = zipCode.value;
    const zipTest = /^\d{5}$/.test(zipValue);
    const test = validationTester(zipCode, zipTest);
    return test;
}

const cvvValidator = () => {
    const cvvValue = cvv.value;
    const cvvTest = /^\d{3}$/.test(cvvValue);
    const test = validationTester(cvv, cvvTest);
    return test;
}

const activitesValidator = () => { // THIS CODE IS NOT WORKING**
    const activityValue = activities >= 1;
    const test = validationTester(activityBox, activityValue);
    return test;
}

// Inside this event listener helper functions are called and the required fields for validation are checked. if they are not valid, helping messages will appear to guide the user.

form.addEventListener("submit", event => {

    nameValidator();
    emailValidator();
    creditValidator();
    zipValidator();
    cvvValidator();

    if ( nameValidator() && emailValidator() && activitesValidator() ){

    } else {
        if(email.value === ''){
            emailHint.style.display = 'block';
            emailHint.innerHTML = 'Email field cannot be blank';
        }
        event.preventDefault();
    }
    if (paymentMethod.value === 'credit-card'){
        if (creditValidator() && zipValidator() && cvvValidator() ){

        } else {
            event.preventDefault()
        }
    } 
});

// This event listener validates certain fields in realtime using the 'keyup' listener. helping messages appear if the fields are not valid.

userName.addEventListener('keyup', event => {

    if (userName.value){
        nameValidator();
    }
})

email.addEventListener('keyup', event => {

    if(email.value === ''){
        emailHint.style.display = 'block';
        emailHint.innerHTML = 'Email field cannot be blank';
    } else if (!emailValidator()){
        emailHint.innerHTML = 'Email address must be formatted correctly';
    }
    emailValidator();
})

creditNumber.addEventListener('keyup', event => {
    cardNumberValidation();
})

zipCode.addEventListener('keyup', event => {
    zipValidator();
})

cvv.addEventListener('keyup', event => {
    cvvValidator();
});

// This loop is for accessability. it adds or removes a focus/ blur state, when the user interacts with the webform.

const checkbox = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < checkbox.length; i++){

    checkbox[i].addEventListener('focus', event => {
        event.target.parentElement.classList.add('focus');
    })

    checkbox[i].addEventListener('blur', event => {
        event.target.parentElement.classList.remove('focus');
    })
};






