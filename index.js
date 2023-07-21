
//method for making sound through click
var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        var buttonhtml=this.innerHTML;
        makesound(buttonhtml);
        buttonanimation(buttonhtml);
        });
}

//method for sound making through keyboard
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonanimation(event.key);
})


//method for making sound
function makesound(key){
    switch (key){
        case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
        default:
            console.log(key);
        }
}



function buttonanimation(keypressed){
    var activeButton = document.querySelector("."+keypressed);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");},100);

}


