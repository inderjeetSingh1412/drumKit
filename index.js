/*
document.querySelector("button").addEventListener("click",handleClick);

function handleClick()
{
    alert("I got Clicked!");
}
*/

// ANONYMOUS FUNCTION -------------------------------------------------------------------

/*
document.querySelector(".set").addEventListener("click",function()
{

    this.style.color = "white";
    //var audio=new Audio("sounds/tom-1.mp3")
    //audio.play();
});
*/


// THERE IS AN ANOTHER WAY ALSO OF TO SELECT ALL BUTTONS TO PERFORM THE EVENT LISTENER AND THAT IS FOR LOOP....

var numberOfItems=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfItems;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var val=this.innerHTML;
        jsus(val);
        animationFunc(val);
    });
}

document.addEventListener("keypress",function(event){
    jsus(event.key);
    animationFunc(event.key);
});

function jsus(event)
{
    switch (event) {
        case 'w':
        var audio=new Audio("sounds/tom-1.mp3")
        audio.play();
        break;

        case 'a':
            var audio=new Audio("sounds/tom-2.mp3")
            audio.play();
            break;

            case 's':
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play();
            break;

            case 'd':
            var audio=new Audio("sounds/tom-4.mp3")
            audio.play();
            break;

            case 'j':
            var audio=new Audio("sounds/snare.mp3")
            audio.play();
            break;

            case 'k':
            var audio1=new Audio("sounds/crash.mp3")
            audio1.play();
            break;

            case 'l':
            var audio2=new Audio("sounds/kick-bass.mp3")
            audio2.play();
            break;
            

    default:
        break;
}
}

function animationFunc(ind)
{
    var x=document.querySelector("."+ ind);
    x.classList.add("pressed");

    setTimeout(function(){
        x.classList.remove("pressed");

    },100);
}



