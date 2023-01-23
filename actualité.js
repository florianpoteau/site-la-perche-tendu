const image1Div = document.querySelector(".textActu1");
const url = "http://localhost:1337/api/posts";
const image2 = "http://localhost:1337/uploads/Actualite2_34fe8bfdc1.png";
let allFood = [];
init();

function init() {
    getimage();
}

function getimage() {
    fetch(url)
        .then((data) => data.json())
        .then((result) => {
            allFood = result;
            // const dataArray = Array.from(allFood);
            console.log("AllFood", allFood);

            // renderimage(allFood);

            for (let f = 0; f < allFood; f++) {
                const item = `<li>${f.texte}</li>`;
                list = [...list, item];
            };
            // image1Div.innerHTML = `<ul>${JSON.stringify(image2)}</ul>`
            image1Div.innerHTML = `<ul>${JSON.stringify(allFood.data[0].attributes.texte)}</ul>`;
        })
        .catch((err) => {
            console.error(err);
        });

}

function renderimage(food) {

    let list = [];
    for (let f = 0; f < food; f++) {
        const item = `<li>${f.texte}</li>`;
        list = [...list, item];
    };


    image1Div.innerHTML = `<ul>${JSON.stringify(list)}</ul>`;
    console.log(list);
}

// const img = document.getElementById('img');

// fetch('http://localhost:1337/api/images')
//     .then(res => res.json())
//     .then(data => img.src = data[0]);




