'use strict'
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let randomIndex = getRandomNum(0, 15);
getQuotes();
changeQuote.addEventListener('click', getNewQuote);

async function getQuotes() {
  const quotes = 'js/data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  quote.textContent = `"${data[randomIndex].text}"`;
  author.textContent = data[randomIndex].author;
}

function getNewQuote() {
  randomIndex = getRandomNum(0, 15);
  getQuotes();
}
