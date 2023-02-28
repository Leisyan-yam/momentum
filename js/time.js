

export default function showTime() {
const time = document.querySelector('.time');
const date = new Date();
const currentDate = date.toLocaleTimeString();
    time.textContent = currentDate;
    showDate()
    showGreeting()
    setTimeout(showTime, 1000);
}



function showDate() {
    const date = document.querySelector('.date');
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const today = new Date();
    const currentDate = today.toLocaleDateString('en-US', options);
    date.textContent = currentDate
}

function getTimeOfDay() {
    const date  = new Date ();
    const currentHours  = date.getHours();
    
    if ( (currentHours >= 0)  &&  (currentHours < 6) ) {
    return 'night'
    }
    if ( (currentHours >= 6)  &&  (currentHours < 12) ) {
        return 'moning'
    }
    if ( (currentHours >= 12) &&  (currentHours < 18) ) {
            return 'afternoon'
    }
    if ( (currentHours >= 18 ) &&  (currentHours < 24) ) {
    return 'evening'
    }
    }
    
    export const dayTime = getTimeOfDay()

    function showGreeting() {
    const greet = document.querySelector('.greeting');
    greet.textContent = `Good ${dayTime},`;   
    }

    



 













