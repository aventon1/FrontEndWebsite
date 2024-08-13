const button = document.getElementById('button');
const contactName = document.getElementById('name').value;
const contactEmail = document.getElementById('email').value;
const contactMessage = document.getElementById('message').value;


// Function for contact form button click
function displaySubmitForm() {

    if (contactName != "" && contactEmail != "" && contactMessage != "") {
        alert("Thank you for submitting the form, we will be in touch soon!");
    } else {
        alert("Please fill out the form before submitting!");
    }

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('email').value = "";
}
// Listen for click event
button.addEventListener('click', displaySubmitForm);



const contactName2 = document.getElementById('name2').value;
const contactEmail2 = document.getElementById('email2').value;
const contactMessage2 = document.getElementById('message2').value;

const button2 = document.getElementById('button2');

// Function for suggestion form button click
function displaySubmitFormSugg() {

    if (contactName2 != "" && contactEmail2 != "" && contactMessage2 != "") {
        alert("Thank you for submitting the form, we will be in touch soon!");
    } else {
        alert("Please fill out the form before submitting!");
    }

    contactName = "";
    contactEmail = "";
    contactMessage = "";
}
// Listen for click event
button2.addEventListener('click', displaySubmitFormSugg);