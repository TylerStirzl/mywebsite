var lastScrollTop = 0;
var down = 0;
var up = 0;

window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var nav = document.getElementById('navbar');
    var fader = document.getElementById('fader');

    if (st > lastScrollTop){
        down++;
    }else{
        up++;
    }

    lastScrollTop = st <= 0 ? 0 : st;

    if(down >= 4){
        // nav.style.display = "none";
        // $("nav").fadeOut(100);
        fader.style.opacity = 0;
        fader.style.visibility = "hidden";

        down = 0;
        up = 0;
    }

    if(up >= 2){
        // nav.style.display = "block";
        // $("nav").fadeIn(3000);
        fader.style.opacity = 1;
        fader.style.visibility = "visible";
        
        down = 0;
        up = 0;
    }

    /* TESTING FADE IN/OUT SPEEDS */
    /* ADDED THESE CLASSES: navFadeIn navFadeOut */
    // if(down >= 2){
    //     var test = document.getElementsByClassName('navFadeOut');
    //     for (let x = 0; x < test.length; x++) {
    //         test[x].style.opacity = 0;
    //     }
    //     down = 0;
    //     up = 0;
    // }

    // if(up >= 2){
    //     var test = document.getElementsByClassName('navFadeIn');
    //     for (let x = 0; x < test.length; x++) {
    //         test[x].style.opacity = 1;
    //     }

    //     down = 0;
    //     up = 0;
    // }
})