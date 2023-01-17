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
            const dataArray = Array.from(allFood);
            console.log("AllFood", allFood);
            renderimage(dataArray);
        })
        .catch((err) => {
            console.error(err);
        });

}

function renderimage(food) {

    let list = [];
    food.forEach(f => {
        const item = '<li>${' + f.title + '}</li>';
        list = [...list, item];
        list.push(f);
    });


    image1Div.innerHTML = '<ul>${' + list.join("") + '}</ul>';
    console.log(list);
}