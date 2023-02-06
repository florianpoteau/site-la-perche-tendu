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

const profession1 = document.getElementById("profession1");

const profession2 = document.getElementById("profession2");

const profession3 = document.getElementById("profession3");

const profession4 = document.getElementById("profession4");

const profession5 = document.getElementById("profession5");


const url = "http://localhost:1337";


let allactu = [];
init();

function init() {
    getimage();
    gettexte();
}

// Fonction uniquement pour les élément de type texte dans les actualités

function getimage() {
    fetch(url + "/api/administrations?populate=*")
        .then((data) => data.json())
        .then((result) => {
            allactu = result;
            console.log("Allactu", allactu);

            // image 1

            imagenous5.src = url + `${allactu.data[0].attributes.profile.data.attributes.formats.thumbnail.url}`;

            // image 2

            imagenous2.src = url + `${allactu.data[1].attributes.profile.data.attributes.formats.thumbnail.url}`;

            // image 3

            imagenous3.src = url + `${allactu.data[2].attributes.profile.data.attributes.formats.thumbnail.url}`;

            // image 4

            imagenous4.src = url + `${allactu.data[3].attributes.profile.data.attributes.formats.thumbnail.url}`;

            // image 5

            imagenous1.src = url + `${allactu.data[4].attributes.profile.data.attributes.formats.thumbnail.url}`;


        })
        .catch((err) => {
            console.error(err);
        });

}
function gettexte() {
    fetch(url + "/api/administration")
        .then((data) => data.json())
        .then((result) => {
            allactu = result;
            console.log("Allactu", allactu);

            // profession 1

            profession1.innerHTML = `${JSON.stringify(allactu.data[0].attributes.profession)}`;

            // profession 2

            profession2.innerHTML = `${JSON.stringify(allactu.data[1].attributes.profession)}`;

            // profession 3

            profession3.innerHTML = `${JSON.stringify(allactu.data[2].attributes.profession)}`;

            // profession 4

            profession4.innerHTML = `${JSON.stringify(allactu.data[3].attributes.profession)}`;

             // profession 5

             profession5.innerHTML = `${JSON.stringify(allactu.data[3].attributes.profession)}`;
        })
        .catch((err) => {
            console.error(err);
        });

}