let final = document.querySelector("#last-circle")

function NextPage() {
    setTimeout(function(){
        final.style.animation = "grow 0.3s linear forwards"
        
    },100);
}

opened = 0
function open_menu() {
  if (opened === 0) {
    document.querySelector("#color_menu").style.display = "flex";
    document.querySelector("#color_menu").style.position = "fixed";
    opened = 1;
  }
  else {
    document.querySelector("#color_menu").style.display = "none";
    document.querySelector("#color_menu").style.position = "inline";
    opened = 0;
  }
};


var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
let MainVar = rootStyles.getPropertyValue(' --main-var');
