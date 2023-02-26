import { dayTime } from "./time";
function getNumber() {
    let randomNum = (String(Math.floor(Math.random()*20+1)))
    if ((randomNum.length) > 1) { 
    return  randomNum }
    else {
        return randomNum.padStart(2, 0)
    }
    }

    let randomNum = getNumber()

    export default function setBg () {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${randomNum}.jpg`;
    img.onload = () => {   
      document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${randomNum}.jpg')`;
    }; 
}
    

