// document.querySelector

// image1
const imagenous1 = document.querySelector(".img1");

// image2
const imagenous2 = document.querySelector(".img2");

// image3
const imagenous3 = document.querySelector(".img3");

// image4
const imagenous4 = document.querySelector(".img4");

// image5
const imagenous5 = document.querySelector(".img5");


const url = "http://localhost:1337";


let allactu = [];
init();

function init() {
    gettexte();
}

// Fonction uniquement pour les élément de type texte dans les actualités

function gettexte() {
    fetch(url + "/api/administrations?populate=*")
        .then((data) => data.json())
        .then((result) => {
            allactu = result;
            console.log("Allactu", allactu);

            // image 1

            imagenous5.src = url + `${allactu.data[0].attributes.image.data[0].attributes.formats.thumbnail.url}`;

            // image 2

            imagenous2.src = url + `${allactu.data[2].attributes.image.data[0].attributes.formats.medium.url}`;

            // image 3

            imagenous3.src = url + `${allactu.data[3].attributes.image.data[0].attributes.formats.medium.url}`;

            // image 4

            imagenous4.src = url + `${allactu.data[4].attributes.image.data[0].attributes.formats.medium.url}`;

            // image 5

            imagenous1.src = url + `${allactu.data[1].attributes.image.data[0].attributes.formats.medium.url}`;


        })
        .catch((err) => {
            console.error(err);
        });

}