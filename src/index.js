let heartgif = document.getElementById("gif");
let heart = document.getElementById("heart");


window.onload = function() {
    heartgif.style.visibility='hidden';
}

heart.onclick = function() {
    heartgif.style.visibility='visible';
    heart.style.visibility='hidden';
    setTimeout(function() {
        window.location.reload();
    }, 1500); 
}