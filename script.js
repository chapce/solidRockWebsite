const images = [
"images/carousel1.jpg",
"images/carousel2.jpg",
"images/carousel3.jpg",
"images/carousel4.jpg"
];

let index = 0;

const carouselImage = document.getElementById("carousel-image");

function showImage(){
carouselImage.src = images[index];
}

function nextImage(){
index++;
if(index >= images.length){
index = 0;
}
showImage();
}

function prevImage(){
index--;
if(index < 0){
index = images.length - 1;
}
showImage();
}

document.querySelector(".next").addEventListener("click", nextImage);
document.querySelector(".prev").addEventListener("click", prevImage);

setInterval(nextImage, 3000);
