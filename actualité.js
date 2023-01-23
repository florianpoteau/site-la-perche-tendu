const image1Div = document.getElementById("text1");
const image2Div = document.getElementById("dateactu1");
const imageStrapi1 = document.querySelector(".imageStrapi");
const url = "http://localhost:1337/api/posts";
const image2 = "http://localhost:1337/api/posts?populate=*";
let allactu = [];
init();

function init() {
    getimage();
    getimage1();
}

function getimage() {
    fetch(url)
        .then((data) => data.json())
        .then((result) => {
            allactu = result;
            console.log("Allactu", allactu);

            // renderimage(allactu);

            // for (let f = 0; f < allactu; f++) {
            //     const item = `<li>${f.texte}</li>`;
            //     list = [...list, item];
            // };

            // actualité 1

            image2Div.innerHTML = `${JSON.stringify(allFood.data.attributes.date)}`;
            image1Div.innerHTML = `${JSON.stringify(allFood.data.attributes.texte)}`;

            // actualité 2


        })
        .catch((err) => {
            console.error(err);
        });

}


function getimage1() {
    fetch("http://localhost:1337/api/posts?populate=*")

        .then((data) => data.json())
        .then((result) => {
            allactu = result;
            console.log("Allactu", allactu);
            // imageStrapi1.src = "http://localhost:1337/uploads/Actualite1_d5c72094f9.png"
            imageStrapi1.src = "http://localhost:1337" + `${allactu.data[0].attributes.image.data[0].attributes.formats.thumbnail.url}`;
            console.log(imageStrapi1.src);
            console.log("AllActu", allactu.data);

        })
        .catch((err) => {
            console.error(err);
        });

}















// function renderimage(food) {

//     let list = [];
//     for (let f = 0; f < food; f++) {
//         const item = `<li>${f.texte}</li>`;
//         list = [...list, item];
//     };


//     image1Div.innerHTML = `<ul>${JSON.stringify(list)}</ul>`;
//     console.log(list);
// }

// const img = document.getElementById('img');

// fetch('http://localhost:1337/api/posts?populate=*')
//     .then(res => res.json())
//     .then(data => img.src = data[0].url);




