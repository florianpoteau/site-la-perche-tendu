// document.querySelector

// texte de l'actualité 1
const image1Div1 = document.getElementById("text1");

// Date de l'actualité 1
const image2Div1 = document.getElementById("dateactu1");

// Image de l'actualité 1
const imageStrapi1 = document.querySelector(".imageactu1");

// Date de l'actualité 2
const image3Div1 = document.getElementById("dateactu2");

// texte de l'actualité 2
const image4Div1 = document.getElementById("text2");

// Image de l'actualité 2
const imageStrapi2 = document.querySelector(".imageactu2");

// Date de l'actualité 3

const image5Div1 = document.getElementById("dateactu3");

// texte de l'actualité 3

const image6Div1 = document.getElementById("text3");

// image de l'actualité 3

const imageStrapi3 = document.querySelector(".imageactu3");

// Date de l'actualité 4

const image7Div1 = document.getElementById("dateactu4");

// texte de l'actualité 4

const image8Div1 = document.getElementById("text4");

// image de l'actualité 4

const imageStrapi4 = document.querySelector(".imageactu4");


const url = "http://localhost:1337";
const image2 = "http://localhost:1337/api/posts?populate=*";


let allactu = [];
init();

function init() {
    gettexte();
    getimage();
}

// Fonction uniquement pour les élément de type texte dans les actualités

function gettexte() {
    fetch(url + "/api/posts")
        .then((data) => data.json())
        .then((result) => {
            allactu = result;
            console.log("Allactu", allactu);

            // actualité 1

            image2Div1.innerHTML = `${JSON.stringify(allactu.data[0].attributes.date)}`;
            image1Div1.innerHTML = `${JSON.stringify(allactu.data[0].attributes.texte)}`;

            // actualité 2

            image3Div1.innerHTML = `${JSON.stringify(allactu.data[1].attributes.date)}`;
            image4Div1.innerHTML = `${JSON.stringify(allactu.data[1].attributes.texte)}`;

            // actualité 3

            image5Div1.innerHTML = `${JSON.stringify(allactu.data[2].attributes.date)}`;
            image6Div1.innerHTML = `${JSON.stringify(allactu.data[2].attributes.texte)}`;

            // actualité 4

            image7Div1.innerHTML = `${JSON.stringify(allactu.data[3].attributes.date)}`;
            image8Div1.innerHTML = `${JSON.stringify(allactu.data[3].attributes.texte)}`;

        })
        .catch((err) => {
            console.error(err);
        });

}

// Fonction uniquement pour les images des actualités

function getimage() {
    fetch(url + "/api/posts?populate=*")

        .then((data) => data.json())
        .then((result) => {
            allactu = result;
            console.log("Allactu", allactu);

            // Actualité 1

            imageStrapi1.src = "http://localhost:1337" + `${allactu.data[0].attributes.image.data[0].attributes.formats.medium.url}`;
            console.log(imageStrapi1.src);
            console.log("AllActu", allactu.data);

            // Actualité 2

            imageStrapi2.src = url + `${allactu.data[1].attributes.image.data[0].attributes.formats.medium.url}`;

            // Actualité 3

            imageStrapi3.src = url + `${allactu.data[2].attributes.image.data[0].attributes.formats.medium.url}`;

            // Actualité 4

            imageStrapi4.src = url + `${allactu.data[3].attributes.image.data[0].attributes.formats.medium.url}`;

        })
        .catch((err) => {
            console.error(err);
        });

}

