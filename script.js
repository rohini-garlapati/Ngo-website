// Make left menu sticky
window.onscroll = function() {stickyMenu()};

var leftMenu = document.getElementById("leftMenu");
var sticky = leftMenu.offsetTop;

function stickyMenu() {
  if (window.pageYOffset >= sticky) {
    leftMenu.classList.add("sticky");
  } else {
    leftMenu.classList.remove("sticky");
  }
}
