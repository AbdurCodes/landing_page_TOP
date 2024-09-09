

let missingField = document.querySelector('.missingField');
let checkboxFieldset = document.querySelector('.checkboxFieldsetInvalid');
let legend = document.querySelector('.legendInvalid');
let checkboxAll = document.querySelectorAll('input[type="checkbox"]');

Array.from(checkboxAll).forEach(singleCheckbox => {
    singleCheckbox.addEventListener('change', () => {
        if (Array.from(checkboxAll).some(checkbox => checkbox.checked)) {
            checkboxFieldset.classList.remove('checkboxFieldsetInvalid');
            legend.classList.remove('legendInvalid');
            checkboxFieldset.classList.add('checkboxFieldset');
            legend.classList.add('legend');
        }
        else {
            checkboxFieldset.classList.remove('checkboxFieldset');
            legend.classList.remove('legend');
            checkboxFieldset.classList.add('checkboxFieldsetInvalid');
            legend.classList.add('legendInvalid');
        }
    })
})

function validateCheckboxes() {

    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = '* Please enter a valid email address!';
        event.preventDefault();
    } else {
        emailError.textContent = '';
    }


    for (let checkbox of checkboxAll) {
        if (checkbox.checked) {
            missingField.textContent = "";
            return true;
        }
    }
    missingField.textContent = "* Plz choose at least one service!";
    return false;
}

