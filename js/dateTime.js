function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
   var date =  String(new Date()).split(' ').slice(0, 3).join(' ');
    
     var date =  String(new Date()).split(' ').slice(0, 3).join(' ');
    document.getElementById('day').innerHTML = date;
    
    m = checkTime(m);
    s = checkTime(s);
     
    document.getElementById('time').innerHTML =
    h % 12 + ":" + m + ":" + s + " " + (h >= 12 ? 'PM' : 'AM');
    
    
    var t = setTimeout(startTime, 500);
    
}

myVar = setInterval(updateInfo, 5000);

function updateInfo()
{
    var date =  String(new Date()).split(' ').slice(0, 3).join(' ');
    document.getElementById('day').innerHTML = date;
    getWeather();
}


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

 


    