import Sun from './sun.jpg'
import Moon from './moon.jpg'
import Stars from './stars.jpg'
import './style.css'

function images() {
    const blankimg = document.createElement("div");
    blankimg.setAttribute('class', 'empty')

    const image = new Image();
    image.src = Sun
    image.dataset.index = "1"
    image.setAttribute("class", "images")

    blankimg.appendChild(image);

    return blankimg;
}

const slide = document.querySelector(".slide");
slide.appendChild(images())

const beforeb = document.querySelector('.before');
beforeb.addEventListener('click', () => {
    const img = document.querySelector('.images')
    if (img.dataset.index === "1") {
        img.src = Stars
        img.dataset.index = "3"
    }
    else if (img.dataset.index === "2") {
        img.src = Sun
        img.dataset.index = "1"
    }
    else {
        img.src = Moon
        img.dataset.index = "2"
    }
});

const afterb = document.querySelector('.after');
afterb.addEventListener('click', () => {
    const img = document.querySelector('.images');
    if (img.dataset.index === "1") {
        img.src = Moon
        img.dataset.index = "2"
    }
    else if (img.dataset.index === "2") {
        img.src = Stars
        img.dataset.index = "3"
    }
    else {
        img.src = Sun
        img.dataset.index = "1"
    }
})

const oneb = document.querySelector('.one')
oneb.addEventListener('click', () => {
    const img = document.querySelector('.images')
    img.src = Sun
    img.dataset.index = "1"

})

const twob = document.querySelector('.two')
twob.addEventListener('click', () => {
    const img = document.querySelector('.images')
    img.src = Moon
    img.dataset.index = "2"
})

const threeb = document.querySelector('.three')
threeb.addEventListener('click', () => {
const img = document.querySelector('.images')
img.src = Stars
img.dataset.index = "3"
})

function nextslide() {
    const img = document.querySelector('.images')
    if (img.dataset.index === "1") {
        img.src = Moon
        img.dataset.index = "2"
    }
    else if (img.dataset.index === "2") {
        img.src = Stars
        img.dataset.index = "3"
    }
    else {
        img.src = Sun
        img.dataset.index = "1"
    }
}

setInterval(nextslide, 5000)