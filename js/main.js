import showTime  from "./time";
import getWeather from "./weather";
import getQuotes from "./quotes";
import setBg from "./changebg";

getWeather();
showTime();
getQuotes();
setBg ();

function setLocalStorage() {
    const names = document.querySelector('.name');
    localStorage.setItem('name', names.value);
    }

    window.addEventListener('beforeunload', setLocalStorage)
    
    function getLocalStorage() {
    if(localStorage.getItem('name')) {
    document.querySelector('.name').value = localStorage.getItem('name');
    }
    }
    
    window.addEventListener('load', getLocalStorage)



    