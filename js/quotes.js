export default async function getQuotes() {
const quotes = 'data.json';
console.log(quotes);
  const res = await fetch(quotes);
  const data = await res.json(); 
  console.log(data);
  }