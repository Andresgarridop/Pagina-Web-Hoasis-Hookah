const audio = document.getElementById("audioFondo");
const btn = document.getElementById("botonAudio");

let sonando = false;

btn.addEventListener("click", () => {
    if (!sonando) {
        audio.play();
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        sonando = true;
    } else {
        audio.pause();
        btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        sonando = false;
    }
});
