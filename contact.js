
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






// function sendEmail() {

//     // Get the values of the form input fields
//     const nom = addform.nom.value;
//     const prenom = addform.prenom.value;
//     const email = addform.email.value;
//     const tel = addform.tel.value;
//     const textarea = addform.textarea.value;
//     const checkbox = document.getElementById("checkbox").checked;

//     // Package the form data into an object
//     const formData = {
//         nom: nom,
//         prenom: prenom,
//         email: email,
//         tel: tel,
//         textarea: textarea,
//         checkbox: checkbox
//     };

//     const apiURL = 'http://localhost:1337/api/requests';

//     fetch("http://localhost:1337/api/requests", {cd
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ data: formData }),
//         body: JSON.stringify({
//             to: 'solit641@gmail.com',
//             subject: 'Sending with Fetch is Fun',
//             html: 'and easy to do anywhere, even with Strapi',
//         })
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
//         .catch(function (error) {
//             console.error(error);
//         })
// };




//     function handleFormSubmit(event) {
//         // Send email using a third-party email service provider API
//         fetch("http://localhost:1337/api/requests", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 to: email,
//                 subject: "Formulaire de contact",
//                 html: `<p>Nom: ${nom}</p><p>Prénom: ${prenom}</p><p>Email: ${email}</p><p>Téléphone: ${tel}</p><p>Message: ${textarea}</p>`
//             })
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 // Display a message to the user indicating that the form was submitted successfully.
//                 alert("Le formulaire à été envoyé avec succès");
//             })
//             .catch(error => {
//                 console.error(error);
//                 alert("Oups... une erreur est survenue");
//             });
//     }

// }











// // Email

// // Fonction pour envoyer les données du formulaire par email
// function sendFormDataByEmail(emailAddress) {
//     // Récupération des données du formulaire
//     var formData = new FormData(form);

//     // Envoi des données par email
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "send-form-data-by-email.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.send("email=" + emailAddress + "&form_data=" + formData);

//     // Affiche un message de confirmation
//     alert("Les données ont été envoyées par email à " + emailAddress);
// }

// // Utilisation de la fonction
// sendFormDataByEmail("form1", "florianpoteau59@gmail.com");



