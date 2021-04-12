var lastSection = 0;
var section = 0;

var speechBubble = document.getElementById("beeBubble");
var bee = document.getElementById("bee");

function hideBubble(){
    speechBubble.style.display = "none";
}

function beeClick() {

    do {
        section = Math.floor(Math.random() * 5);
    } while (lastSection == section)

    lastSection = section;

    hideBubble();

    switch (section) {
        case 0:
            bee.href = "#explore";
            break;
        case 1:
            bee.href = "#nature";
            break;
        case 2:
            bee.href = "#animals";
            break;
        case 3:
            bee.href = "#plants";
            break;
        case 4:
            bee.href = "#games";
            break;
        default:
            break;
    }
}

window.onscroll = function(ev) {
    hideBubble();
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        bee.style.display = "none";
    }else{
        bee.style.display = "initial";
    }
};