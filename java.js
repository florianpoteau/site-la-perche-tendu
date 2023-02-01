

let mybutton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// document.querySelector

// Nos services en un clic

// image1
const image1Div = document.querySelector(".home-img");

// texte1
const texte1Div = document.querySelector(".link-title");

// Image2
const image2Div = document.querySelector(".home-img2");

// texte2
const texte2Div = document.querySelector(".link-title2");

// image3
const image3Div = document.querySelector(".home-img3");

// texte3
const texte3Div = document.querySelector(".link-title3");


// Nos actualités

// image4
const image4Div = document.querySelector(".img4");

// Titre4
const titre4Div = document.getElementById("activite");

// Texte4
const texte4Div = document.querySelector(".event-text");


// image5
const image5Div = document.querySelector(".img5");

// titre5
const titre5Div = document.getElementById("festival");

// texte5
const texte5Div = document.querySelector(".event-text1");


// image6
const image6Div = document.querySelector(".img6");

// titre6
const titre6Div = document.getElementById("parade");

// texte6
const texte6Div = document.querySelector(".event-text2");


// #perche tendue

// image7

const image7Div = document.querySelector(".img7");

// Titre7

const titre7Div = document.getElementById("nous1");

// Texte7

const texte7Div = document.getElementById("texteimg7");

// date7

const date7Div = document.getElementById("date1");

// image8

const image8Div = document.querySelector(".img8");

// Titre8

const titre8Div = document.getElementById("nous2");

// Texte8

const texte8Div = document.getElementById("texteimg8");

// date8

const date8Div = document.getElementById("date2");

// image9

const image9Div = document.querySelector(".img9");

// Titre9

const titre9Div = document.getElementById("nous3");

// Texte9

const texte9Div = document.getElementById("texteimg9");

// date9

const date9Div = document.getElementById("date3");







const url = "http://localhost:1337";
const image2 = "http://localhost:1337/api/aceuils?populate=*";


let allactu = [];
init();

function init() {
    gettexte();
    getimage();
}

// Fonction uniquement pour les élément de type texte dans les actualités

function gettexte() {
    fetch(url + "/api/aceuils")
        .then((data) => data.json())
        .then((result) => {
            allactu = result;
            console.log("Allactu", allactu);

            // texte "Nos service en un clic"

            // // Texte 1

            texte1Div.innerHTML = `${JSON.stringify(allactu.data[0].attributes.titre)}`;

            // Texte 2

            texte2Div.innerHTML = `${JSON.stringify(allactu.data[1].attributes.titre)}`;

            // Texte 3

            texte3Div.innerHTML = `${JSON.stringify(allactu.data[2].attributes.titre)}`;

            // Nos actualités

            // titre 1

            titre4Div.innerHTML = `${JSON.stringify(allactu.data[3].attributes.titre)}`;

            // texte 1

            texte4Div.innerHTML = `${JSON.stringify(allactu.data[3].attributes.texte)}`;

            // titre 2

            titre5Div.innerHTML = `${JSON.stringify(allactu.data[4].attributes.titre)}`;

            // texte 2

            texte5Div.innerHTML = `${JSON.stringify(allactu.data[4].attributes.texte)}`;

            // titre 3

            titre6Div.innerHTML = `${JSON.stringify(allactu.data[5].attributes.titre)}`;

            // texte 3

            texte6Div.innerHTML = `${JSON.stringify(allactu.data[5].attributes.texte)}`;

            // # Perche tendue

            // Titre1

            titre7Div.innerHTML = `${JSON.stringify(allactu.data[6].attributes.titre)}`;

            // Texte1

            texte7Div.innerHTML = `${JSON.stringify(allactu.data[6].attributes.texte)}`;

            // date 1

            date7Div.innerHTML = `${JSON.stringify(allactu.data[6].attributes.date)}`;

            // Titre 2

            titre8Div.innerHTML = `${JSON.stringify(allactu.data[7].attributes.titre)}`;

            // Texte 2

            texte8Div.innerHTML = `${JSON.stringify(allactu.data[7].attributes.texte)}`

            // date 2

            date8Div.innerHTML = `${JSON.stringify(allactu.data[7].attributes.date)}`;

            // Titre3

            titre9Div.innerHTML = `${JSON.stringify(allactu.data[8].attributes.titre)}`;

            // Texte3

            texte9Div.innerHTML = `${JSON.stringify(allactu.data[8].attributes.texte)}`;

            // date 3

            date9Div.innerHTML = `${JSON.stringify(allactu.data[8].attributes.date)}`;

        })
        .catch((err) => {
            console.error(err);
        });

}

// Fonction uniquement pour les images des actualités

function getimage() {
    fetch(url + "/api/aceuils?populate=*")

        .then((data) => data.json())
        .then((result) => {
            allactu = result;
            console.log("Allactu", allactu);

            // image 1

            image1Div.src = url + `${allactu.data[0].attributes.image.data[0].attributes.formats.medium.url}`;
            console.log(image1Div.src);
            console.log("AllActu", allactu.data);

            // image 2

            image2Div.src = url + `${allactu.data[1].attributes.image.data[0].attributes.formats.medium.url}`;

            // image 3

            image3Div.src = url + `${allactu.data[2].attributes.image.data[0].attributes.formats.medium.url}`;

            // image 4

            image4Div.src = url + `${allactu.data[3].attributes.image.data[0].attributes.formats.medium.url}`;

            // image 5

            image5Div.src = url + `${allactu.data[4].attributes.image.data[0].attributes.formats.medium.url}`;

            // image 6

            image6Div.src = url + `${allactu.data[5].attributes.image.data[0].attributes.formats.medium.url}`;

            // image7

            image7Div.src = url + `${allactu.data[6].attributes.image.data[0].attributes.formats.medium.url}`;

            // image 8

            image8Div.src = url + `${allactu.data[7].attributes.image.data[0].attributes.formats.medium.url}`;

            // image 9

            image9Div.src = url + `${allactu.data[8].attributes.image.data[0].attributes.formats.medium.url}`;

        })
        .catch((err) => {
            console.error(err);
        });

}

