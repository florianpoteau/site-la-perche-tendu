const image1Div = document.querySelector(".imageStrapi");
const url = "http://localhost:1337/api/posts";
let allFood = [];
init();

function init() {
    getimage();
}

function getimage() {
    fetch('http://localhost:1337/api/posts')
        .then((data) => data.json())
        .then((result) => {
            allFood = result;
            //const dataArray = Array.from(allFood);
            console.log("AllFood", allFood);

            // renderimage(allFood);
        })
        .catch((err) => {
            console.error(err);
        });

}

function renderimage(food) {

    let list = [];
    for (let f = 0; f < food; f++) {
        const item = '<li>${' + f.texte + '}</li>';
        list = [...list, item];
    };


    image1Div.innerHTML = '<ul>${' + list.join("") + '}</ul>';
    console.log(list);
}




