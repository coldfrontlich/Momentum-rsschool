"use strict"

const timeDiv = document.querySelector('.time');
const dateDiv = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)
showTime();

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  timeDiv.textContent = currentTime;
  const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
  const currentDate = date.toLocaleDateString('en-US', options);
  dateDiv.textContent = currentDate;
  showGreetings();
  setTimeout(showTime, 1000);
}

function showGreetings() {
  const date = new Date();
  const hours = date.getHours();
  greeting.textContent = `Good ${getTimeOfDay(hours)}, `;
}


function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if ((hours >= 0) && (hours < 6)) {
    return 'Night';
  }
  if ((hours >= 6) && (hours < 12)) {
    return 'Morning';
  }
  if ((hours >= 12) && (hours < 18)) {
    return 'Afternoon';
  }
  if ((hours >= 18) && (hours < 24)) {
    return 'Evening';
  }
}

