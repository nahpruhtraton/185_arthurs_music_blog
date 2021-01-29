var scrollButton = document.getElementById("TopButton");

window.onscroll = function() {scrollFunct()};

function scrollFunct() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollButton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}

function topFunct() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}