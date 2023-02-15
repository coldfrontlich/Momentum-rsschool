const timeDiv = document.querySelector('.time');
const dateDiv = document.querySelector('.date');

showTime();

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  timeDiv.textContent = currentTime;
  const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
  const currentDate = date.toLocaleDateString('en-US', options);
  dateDiv.textContent = currentDate;
  setTimeout(showTime, 1000);
}
