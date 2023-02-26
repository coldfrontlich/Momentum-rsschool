import playList from "./playList.js";
const audio = new Audio();
const playButton = document.querySelector('.play')
const playListContainer = document.getElementById('play-list');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');

playPrev.addEventListener('click', getPrevSong);
playNext.addEventListener('click', getNextSong);

let isPlay = false;
let playNum = 0;

playList.forEach(el => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = el.title;
  playListContainer.appendChild(li);
})

const songsList = document.querySelectorAll('.play-item');
songsList[playNum].classList.add('item-active')

function playAudio() {
  if (!isPlay) { 
    audio.src = playList[playNum].src
    audio.currentTime = 0;
    audio.play()
    isPlay = true;
    playButton.classList.remove('play');
    playButton.classList.add('pause');
  } else {
    audio.pause()
    isPlay = false;
    playButton.classList.remove('pause');
    playButton.classList.add('play');
  }
}

playButton.addEventListener('click', playAudio);

function getNextSong() {
  songsList[playNum].classList.remove('item-active');
  if (playNum === (playList.length - 1)) {
    playNum = 0;
  } else {
    playNum++;
  }
  songsList[playNum].classList.add('item-active');
  if (isPlay) {
    isPlay = false;
    playAudio()
  }
}

function getPrevSong() {
  songsList[playNum].classList.remove('item-active');
  if (playNum === 0) {
    playNum = playList.length - 1;
  } else {
    playNum--;
  }
  songsList[playNum].classList.add('item-active');
  if (isPlay) {
    isPlay = false;
    playAudio()
  }
}

audio.addEventListener('ended', getNextSong); 
