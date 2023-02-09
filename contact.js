
document.addEventListener("DOMContentLoaded", function () {

    // Get reference to the form element
    const addform = document.getElementById("addform");

    // Add event listener to the form to listen for the submit event
    addform.addEventListener("submit", handleFormSubmit);

});

function handleFormSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get the values of the form input fields
    const nom = addform.nom.value;
    const prenom = addform.prenom.value;
    const email = addform.email.value;
    const tel = addform.tel.value;
    const textarea = addform.textarea.value;
    const checkbox = document.getElementById("checkbox").checked;

    // Package the form data into an object
    const formData = {
        nom: nom,
        prenom: prenom,
        email: email,
        tel: tel,
        textarea: textarea,
        checkbox: checkbox
    };


    // Send a POST request to the Strapi API endpoint for the "Contact Form" content type
    fetch("http://localhost:1337/api/requests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({ data: formData }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Display a message to the user indicating that the form was submitted successfully.
            alert("Le formulaire à été envoyé avec succès");
        })
        .catch(error => {
            console.error(error);
            alert("Oups... une erreur est survenue");
        });
}