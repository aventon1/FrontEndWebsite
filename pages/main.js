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
}
// Listen for click event
button.addEventListener('click', displaySubmitForm);