import showTime  from "./time";
import getWeather from "./weather";
import getQuotes from "./quotes";
import showPlayList from "./audioPlayer";
import handleBg from "./changebg";



getWeather();
showTime();
getQuotes();
showPlayList ();
handleBg ();

function setLocalStorage() {
    const city = document.querySelector('.city');
    const names = document.querySelector('.name');
    localStorage.setItem('name', names.value);
    localStorage.setItem('city', city.value);
    }

    window.addEventListener('beforeunload', setLocalStorage)
    
    function getLocalStorage() {
    if(localStorage.getItem('name')) {
    document.querySelector('.name').value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city')) {
        document.querySelector('.city').value = localStorage.getItem('city')
    }
    }
    
    window.addEventListener('load', getLocalStorage)



    