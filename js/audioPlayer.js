import playlist from "./playlist";
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list');
const musicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const seekBar = document.querySelector('.seek-bar');
const musicName = document.querySelector('.name-audio');
const volumeRange = document.querySelector('.volume-range');
const volumeBtn = document.querySelector('.volumeBtn');

const audio = new Audio();
let num = 0;



const setPlayer = () => {
  seekBar.value = 0; 
  audio.volume = .2;
  volumeRange.value = 20;
  audio.src = playlist[num].src;
  musicTime.innerHTML = '00:00';
  audio.play();
  setTimeout(() => {
    seekBar.max = audio.duration;
    musicDuration.innerHTML = formatTime(audio.duration);
  }, 300);
  setInterval(()=>{
    seekBar.value = audio.currentTime;
    musicTime.innerHTML = formatTime(audio.currentTime);
    if (Math.floor(audio.currentTime)== Math.floor(seekBar.max)){
      playNextBtn.click()
     }
  }, 500)
  musicName.textContent = playlist[num].title;
  document.querySelectorAll('.play-item').forEach(Element => {
    if ( Element.textContent == playlist[num].title) {
      Element.classList.add('item-active');
    }
    else {
      Element.classList.remove('item-active');
    }
  })
}




for (let i=0; i < playlist.length; i++){
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = playlist[i].title;
    playListContainer.append(li);
}



function playNext() {
  num += 1;   
  if (num > playlist.length-1) {
    num = 0
  }
  playBtn.classList.add('pause')
  setPlayer(); 
}


function playPrev() {
  num -= 1;   
  if (num < 0) {
    num = playlist.length-1
  }
  playBtn.classList.add('pause')
  setPlayer(); 
}


const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if ( min < 10 ) {
    min = `0${min}`
  };
  let sec  = Math.floor(time % 60)
  if ( sec < 10 ) {
    sec = `0${sec}`
  }
  return `${min} : ${sec}`
}  


const muteAudio = () => {
  if (!volumeBtn.classList.contains('volume-Off')) {
    audio.volume = 0;
    volumeBtn.classList.add('volume-Off')
  }
  else {
    volumeBtn.classList.remove('volume-Off');
    audio.volume = 1;
  }
}

function changeVolume () {
  audio.volume = volumeRange.value/100
}


export default function showPlayList() {
playNextBtn.addEventListener('click', playNext)
playPrevBtn.addEventListener('click', playPrev)
volumeRange.addEventListener('change', changeVolume)
volumeBtn.addEventListener('click', muteAudio)
 seekBar.addEventListener('change' , () => {
   audio.currentTime = seekBar.value;
 })
 
playBtn.addEventListener('click', () => {
  if (!playBtn.classList.contains('pause')) {
  setPlayer()
  playBtn.classList.add('pause');
  }
  else {
  playBtn.classList.remove('pause');
  audio.pause();
  }
})
}

