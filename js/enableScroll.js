window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
disableScrolling();
document.body.style.overflowY = "hidden";
document.body.style.heigth = "100vh";
document.getElementById("tombol-buka").onclick = function () {
  myFunction();
};
function myFunction() {
  document.body.style.overflowY = "unset";
  document.getElementById("tombol-buka");
  enableScrolling();
  playAudio();
}
function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}
function enableScrolling() {
  window.onscroll = function () {};
}
function playAudio() {
  var isYT = false;
  if (document.body.contains(document.getElementById("song"))) {
    document.getElementById("song").play();
    isYT = false;
  } else {
    isYT = true;
    player.playVideo();
  }
}
