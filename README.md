# Interactive Registration Webform Cole smith
 Project - 7 This repo holds an interactive webform for the user to type input fields, validate them, and be visually responsive.

 This code includes real-time error messages which alert the user if the field is left blank. 

 This code also includes conditional error messages determined by the input's format.

 ```
 email.addEventListener('keyup', event => {

    if(email.value === ''){
        emailHint.style.display = 'block';
        emailHint.innerHTML = 'Email field cannot be blank';
    } else if (!emailValidator()){
        emailHint.innerHTML = 'Email address must be formatted correctly';
    }
    emailValidator();
})
```
