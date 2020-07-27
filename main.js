const theHour = document.querySelector('.hour');
const theMinute = document.querySelector('.minute');
const theSecond = document.querySelector('.second');


function transformDateTime(dateTime){

    if(typeof dateTime === "number"){
        return dateTime.toString().padStart(2,'0');
    }

    return console.error(`Param fonction /${dateTime}/ + is not a number`);
}

function getDateTime(){

    const date = new Date();

        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        // décalage de 90degré entre le positionnement html CSS et le calcul d'angle sur un axe
        const offsetAxis = 90 ;

        const hourDeg = (hour / 60) * 360 + offsetAxis;
        const minuteDeg = (minute / 60) * 360 + offsetAxis;
        const secondDeg = (second / 60) * 360 + offsetAxis;

    
            theHour.style.setProperty('transform',`rotate(${hourDeg}deg)`);
            theHour.dataset.time = hour ;

            theMinute.style.setProperty('transform',`rotate(${minuteDeg}deg)`);
            theMinute.dataset.time = minute;

            theSecond.style.setProperty('transform',`rotate(${secondDeg}deg)`);
            theSecond.dataset.time = second ;


    document.querySelector('#theTime').innerText = `${hour}h${transformDateTime(minute)} (${transformDateTime(second)})` ;
}



// Starting O'CLock Effect/
setInterval(getDateTime,1000);




