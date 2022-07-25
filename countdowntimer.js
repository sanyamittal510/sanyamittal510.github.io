const newyear= "1 January 2023";
function formattime(time){
    if (time<10){
        return `0${time}`;
    }
    else{
        return time;
    }
}

function countdown(){
    const newyearDate= new Date(newyear);
    const today = new Date();
    const totalseconds = (newyearDate-today)/1000;
    
    const days= Math.floor((totalseconds/3600)/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const minutes= Math.floor(totalseconds/60)%60;
    const seconds= Math.floor(totalseconds)%60;
    
    document.getElementById("days").innerHTML = formattime(days);
    document.getElementById("hours").innerHTML = formattime(hours);
    document.getElementById("minutes").innerHTML = formattime(minutes);
    document.getElementById("seconds").innerHTML = formattime(seconds);
    
    
}


countdown()
setInterval(countdown,1000);