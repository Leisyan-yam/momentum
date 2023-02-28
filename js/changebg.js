import { dayTime } from "./time";
const slideNextBtn = document.querySelector('.slide-next');
const slidePrevBtn = document.querySelector('.slide-prev');



function getNumber() {
    let randomNum = (String(Math.floor(Math.random()*20+1)))
    if ((randomNum.length) > 1) { 
    return  randomNum }
    else {
        return randomNum.padStart(2, 0)
    }
    }
    let randomNum = getNumber()



    function setBg () {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${randomNum}.jpg`;
    img.onload = () => {   
      document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${randomNum}.jpg')`;
    }; 
}

    function getSlideNext() {
      randomNum = parseInt(randomNum) + 1;
      if( randomNum > 20){
        randomNum = 1
      }
      if (randomNum < 10)
      {
        randomNum = ('0' + randomNum)
      }
      setBg()
    }

    function getSlidePrev() {
      randomNum = parseInt(randomNum) + 1;
      if( randomNum < 1){
        randomNum = 20
      }
      if (randomNum < 10)
      {
        randomNum = ('0' + randomNum)
      }
      setBg()
    }


    export default function handleBg () {
  slideNextBtn.addEventListener('click', getSlideNext);
  slidePrevBtn.addEventListener('click', getSlidePrev);
  setBg ();
}

