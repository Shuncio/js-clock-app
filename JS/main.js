// repeatedly calls the anon func to show the actual hour and updates it every second (1000ms)
setInterval(function() {
    let currentDate = new Date();                       //creating the new Date object
    let currentYear = currentDate.getFullYear();        //getting access to the current year 

    let hour = currentDate.getHours();          //getting access to the current hour
    let min = currentDate.getMinutes();         //getting access to the current minute
    let sec = currentDate.getSeconds();         //getting access to the current second

        // if hour < 10, then '0' num'll added to the hour to improve readibility
    (hour < 10) ? hour = '0' + hour : null;
    (min < 10) ? min = '0' + min : null;
    (sec < 10) ? sec = '0' + sec : null;
    
        /* this is the equivalent of conditional operator visible up
        if(hour < 10) {
            hour = '0' + hour;
        }

        if(min < 10) {
            min = '0' + min;
        }

        if(sec < 10) {
            sec = '0' + sec;
        }
        */ 

    document.querySelector('.hour').textContent = hour;                 //outputs the current hour in the main flex container
    document.querySelector('.min').textContent = min;                   //outputs the current min in the main flex container
    document.querySelector('.sec').textContent = sec;                   //outputs the current sec in the main flex container
    document.querySelector('.p-curr-year').textContent = currentYear;   //outputs the current year in the footer flex container
})