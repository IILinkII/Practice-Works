function lights(sw){
    var pic;
    if(sw==0){
        pic = "lights_off.png"
    }
    else{
        pic = "lights_on.png"
    }
    document.getElementById("bulb").src=pic;
}