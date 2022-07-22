// Check that passwords match and have a certain degree of complexity

const myForm = document.querySelector('form');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submit = document.querySelector('button');
myForm.noValidate = true;

Array.from(myForm.elements).forEach(i => {

    i.addEventListener('input', function (e) {

        // Customized error message to let user know the correct password format
        if (i == password) {
            if (password.validity.patternMismatch) {
                password.setCustomValidity('Your password must be 8 characters long and contain atleast: 1 uppercase letter, 1 lowercase letter, and a number');
                password.reportValidity();
            } else {
                password.setCustomValidity('');
            }
        }

        if (i == confirmPassword) {
            if (confirmPassword.value != password.value) {
                confirmPassword.setCustomValidity('The passwords do not match');
                confirmPassword.reportValidity();
            } else {
                confirmPassword.setCustomValidity('');
            }
        }

        // As the user interacts with any of the inputs, check their validity, if they are invalid, adjust the border color accordingly
        if (i.checkValidity()) {
            i.style.borderBottom = "1px solid green";
        }
        else {
            i.style.borderBottom = "1px solid red";
        }
        
        // If all form inputs are checked and result to true, change the background color of the submit button
        if (myForm.checkValidity()) {
            submit.style.backgroundColor = 'green';
        }
    })
})
