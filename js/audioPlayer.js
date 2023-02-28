import playlist from "./playlist";
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list')

const audio = new Audio();
let isPlay = false;
let num = 0

for (let i=0; i < playlist.length; i++){
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = playlist[i].title;
    playListContainer.append(li);
    }

    function playAudio() {
        if(!isPlay) {
          audio.src = playlist[num].src;
          audio.currentTime = 0;
          audio.play();
          playBtn.classList.add('pause');
          document.querySelectorAll('.play-item').forEach(element => {
            if (element.innerHTML == playlist[num].title) {
                element.classList.add('item-active')
            }
            else {
                element.classList.remove('item-active')
            }
          });
          isPlay = true;
        }
        else {
          audio.pause()
          isPlay=false;
          playBtn.classList.remove('pause');
        } 
      }

      



function playNext() {
   num += 1;   
   if (num > playlist.length-1) {
    num = 0
   }
   isPlay = false
   playAudio() 
}


function playPrev() {
    num -= 1;   
    if (num < 0) {
     num = playlist.length-1
    }
    isPlay = false
    playAudio() 
    
 }
 



export default function showPlayList() {
playNextBtn.addEventListener('click', playNext)
playPrevBtn.addEventListener('click', playPrev)
playBtn.addEventListener('click', playAudio)
};





