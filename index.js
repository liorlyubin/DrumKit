

        var clickaudio1= new Audio('sounds/tom-1.mp3');
        var clickaudio2= new Audio('sounds/tom-2.mp3');
        var clickaudio3= new Audio('sounds/tom-3.mp3');
        var clickaudio4= new Audio('sounds/tom-4.mp3');
        var clickaudio5= new Audio('sounds/snare.mp3');
        var clickaudio6= new Audio('sounds/kick-bass.mp3');
        var clickaudio7= new Audio('sounds/crash.mp3');

    
        var AllBtn= document.querySelectorAll(".drum");
          
        for(var i=0;i<AllBtn.length;i++)
                {
                  AllBtn[i].addEventListener("click",function(){
                  Presskey(this.innerHTML);
                  BtnAnination(this.innerHTML);
                  });
                }

        document.addEventListener("keypress",function(event){
            Presskey(event.key);
            BtnAnination(event.key);
        }
    );

    function Presskey(keypress){

      switch (keypress) {
        case "w":
            clickaudio1.play();
            break;
         case "a":
            clickaudio2.play();
                break;
         case "s":
            clickaudio3.play();
            break;
        case "d":
            clickaudio4.play();
            break;
        case "j":
            clickaudio5.play();
            break;
        case "k":
            clickaudio6.play();
            break;
        case "l":
            clickaudio7.play();
            break;
        default:
            break;
    }
}
function BtnAnination(key){
var activebtn = document.querySelector("."+key);
activebtn.classList.add("pressed");
setTimeout(function(){
activebtn.classList.remove("pressed");
}, 100);
}