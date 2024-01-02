// Mendapatkan elemen audio
const audio = document.getElementById("song");

// Mendapatkan elemen ikon disc
const audioIcon = document.getElementById("audioIcon");

// Mengontrol audio ketika ikon disc diklik
audioIcon.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    audioIcon.classList.remove("fa-volume-xmark");
    audioIcon.classList.add("fa-colume-high");
  } else {
    audio.pause();
    audioIcon.classList.remove("fa-spin");
    audioIcon.classList.remove("fa-colume-high");
    audioIcon.classList.add("fa-volume-xmark");
  }
});
