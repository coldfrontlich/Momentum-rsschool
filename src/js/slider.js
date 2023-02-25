"use strict"

const body = document.body;
let randomNum = getRandomNum(1, 20);
setBg();
body.style = "overflow-x: hidden";
const slideNext = body.querySelector('.slide-next');
const slidePrev = body.querySelector('.slide-prev');
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);


function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {
  const timeOfDay = getTimeOfDay().toLowerCase();
  const bgNum = String(randomNum).padStart(2, '0');
  const image = new Image();
  image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  image.onload = () => {
    body.style.backgroundImage = `url('${image.src}')`;
  }
}

function getSlideNext() {
  if (randomNum === 20) {
    randomNum = 1;
  } else {
    randomNum++;
  }
  setBg();
}

function getSlidePrev() {
  if (randomNum === 1 ) {
    randomNum = 20;
  } else {
    randomNum--;
  }
  setBg();
}