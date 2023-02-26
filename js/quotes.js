export default async function getQuotes() {
const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  const changeQuote = document.querySelector('.change-quote');
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author')
  quote.textContent = data[0].text;
  author.textContent = data[0].author;
  changeQuote.addEventListener('click',  function changeQuote () {
    let randomNumber = Math.floor(Math.random()*15 + '1')
    quote.textContent = data[randomNumber].text;
    author.textContent = data[randomNumber].author;
  })
  }  
  
 