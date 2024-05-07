const tShirtArray = [
    { id: 2, imageUrl:"https://m.media-amazon.com/images/I/71983kbhT2L._AC_SX679_.jpg", color:"darkgray"},
    { id: 3, imageUrl:"https://m.media-amazon.com/images/I/71WTLDFA1ZL._AC_SX569_.jpg", color: "skyblue"},
    { id: 4, imageUrl:"https://m.media-amazon.com/images/I/91pMdZGWy7L._AC_SY879_.jpg", color: "skin"},
    { id: 5, imageUrl: "https://m.media-amazon.com/images/I/71NBtGkBQ0L._AC_SX679_.jpg", color: "red"},
    { id: 6, imageUrl:"https://m.media-amazon.com/images/I/71X5x-fceuL._AC_SX679_.jpg", color: "blue"},
    { id: 7, imageUrl: "https://m.media-amazon.com/images/I/61jSnM74wML._AC_SY879_.jpg", color: "white"},
    { id: 1, imageUrl:"https://m.media-amazon.com/images/I/71sgnicpguL._AC_SY879_.jpg", color: "lightblue"},
    { id: 8, imageUrl: "https://m.media-amazon.com/images/I/81HtABAmg3L._AC_SY879_.jpg", color: "green"},
    { id: 9, imageUrl: "https://m.media-amazon.com/images/I/71waVRnC+xL._AC_SX679_.jpg", color: "darkgray"},
    { id: 10, imageUrl: "https://m.media-amazon.com/images/I/71sSk0ccByL._AC_SX679_.jpg", color: "darkblue"}
]
const pantsArray = [
    { id: 1, imageUrl:"https://m.media-amazon.com/images/I/51PZdV12aKL._AC_SY741_.jpg", color: "black"},
    { id: 2, imageUrl:"https://m.media-amazon.com/images/I/71RPJRYrJEL._AC_SY741_.jpg", color: "white"},
    { id: 3, imageUrl:"https://m.media-amazon.com/images/I/81WVmE-VwWL._AC_SX569_.jpg", color: "green"},
    { id: 4, imageUrl:"https://m.media-amazon.com/images/I/71lqr18zk4L._AC_SY879_.jpg", color: "blue"},
    { id: 5, imageUrl: "https://m.media-amazon.com/images/I/61ubj8gkZTL._AC_SY879_.jpg", color: "green"},
    { id: 6, imageUrl:"https://m.media-amazon.com/images/I/51aeqZkWQJL._AC_SY879_.jpg", color: "white"},
    { id: 7, imageUrl: "https://m.media-amazon.com/images/I/61olD8pRPCL._AC_SY879_.jpg", color: "darkblue"},
    { id: 8, imageUrl: "https://m.media-amazon.com/images/I/51Le+jrcf4L._AC_SY741_.jpg", color: "lightblue"},
    { id: 9, imageUrl: "https://m.media-amazon.com/images/I/81efSJ-sUjL._AC_SX679_.jpg", color: "black"},
    { id: 10, imageUrl: "https://m.media-amazon.com/images/I/71fkOFb6kXL._AC_SY741_.jpg", color: "lightblue"}
]
const sneakersArray = [
    { id: 1, imageUrl:"https://m.media-amazon.com/images/I/71ZsWZIkQ+L._AC_SY695_.jpg", color: "brown"},
    { id: 2, imageUrl:"https://m.media-amazon.com/images/I/71maRCTa0YL._AC_SY695_.jpg", color: "white"},
    { id: 3, imageUrl:"https://m.media-amazon.com/images/I/71po1mK2u6L._AC_SY695_.jpg", color: "black"},
    { id: 4, imageUrl:"https://m.media-amazon.com/images/I/61FUBIQapBL._AC_SX695_.jpg", color: "white"},
    { id: 5, imageUrl: "https://m.media-amazon.com/images/I/81+o8ynXjLL._AC_SX695_.jpg", color: "brown"},
    { id: 6, imageUrl:"https://m.media-amazon.com/images/I/61wi1Nzm0QL._AC_SY695_.jpg", color: "white"},
    { id: 7, imageUrl: "https://m.media-amazon.com/images/I/71XlAwNsRPL._AC_SX695_.jpg", color: "black"},
    { id: 8, imageUrl: "https://m.media-amazon.com/images/I/81I5FC-A7ML._AC_SY695_.jpg", color: "gray"},
    { id: 9, imageUrl: "https://m.media-amazon.com/images/I/51inY39-t8L._AC_SY695_.jpg", color: "lightbrown"},
    { id: 10, imageUrl: "https://m.media-amazon.com/images/I/81Le9pKnUSL._AC_SX695_.jpg", color: "brown"}
]


const scoreDiv = document.getElementById("score");


const tshirtDiv = document.getElementById("tshirt");
const pantsDiv = document.getElementById("pants");
const sneakersDiv = document.getElementById("shoes");

const hundreadDiv = document.getElementById("hundred");

const generateRandom = ()=> {
    const randomTshirt = tShirtArray[Math.floor(Math.random() * tShirtArray.length)];
    console.log(randomTshirt.id);
    console.log(randomTshirt.color)
    const randomPants = pantsArray[Math.floor(Math.random() * pantsArray.length)];
    console.log(randomPants.id);
    console.log(randomPants.color)
    const randomSneakers = sneakersArray[Math.floor(Math.random() * sneakersArray.length)];
    console.log(randomSneakers.id);
    console.log(randomSneakers.color)
    const displayTshirt = document.createElement('img');
    displayTshirt.src = randomTshirt.imageUrl;

    const displayPants = document.createElement('img');
    displayPants.src = randomPants.imageUrl;

    const displaySneakers = document.createElement('img');
    displaySneakers.src = randomSneakers.imageUrl;


    tshirtDiv.appendChild(displayTshirt);
    pantsDiv.appendChild(displayPants);
    sneakersDiv.appendChild(displaySneakers);
    let scoreRating = 0;
    if(randomSneakers.color === "white" && randomPants.color=== "blue" || randomPants.color=== "lightblue" || randomPants.color=== "darkblue" && randomTshirt.color === "red" || randomTshirt.color === "white" || randomTshirt.color === "skin"){
        scoreRating = 90 + " Great choice";
    }
    else if(randomTshirt.color === "green" && randomPants.color=== "white" && randomSneakers.color === "brown"){
        scoreRating = 100 + " Outsanding choice";
        hundreadDiv.innerText = "Outsanding";
    }
    else if(randomTshirt.color === "darkgray" || randomTshirt.color === "darkblue" && randomPants.color=== "black" || randomPants.color=== "lightbrown" && randomSneakers.color === "gray" ||randomSneakers.color === "black"){
        scoreRating = 70 + " Normal Day choice";
    }
    else{
        scoreRating = 50 + " So Normal to go!";
    }
    console.log(scoreRating);
    scoreDiv.innerText = scoreRating;
}

const randomButton = document.getElementById("btn");

randomButton.addEventListener("click",()=> {location.reload();});

generateRandom();

