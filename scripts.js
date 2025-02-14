const correctPassword = "2022";
let enteredPassword = "";


function addNumber(num) {
    enteredPassword += num;
    document.getElementById("password").value = "•".repeat(enteredPassword.length);
}

function clearCode() {
    enteredPassword = "";
    document.getElementById("password").value = "";
}

function checkCode() {
    if (enteredPassword === correctPassword) {
        document.getElementById("lock-screen").classList.add("hidden");
        document.getElementById("main-screen").classList.remove("hidden");
    } else {
        alert("Código incorrecto 😭");
        clearCode();
    }
}

function showLetter() {
    document.getElementById("main-screen").classList.add("hidden");
    document.getElementById("letter-screen").classList.remove("hidden");
}

function showMemories() {
    document.getElementById("main-screen").classList.add("hidden");
    document.getElementById("memories-screen").classList.remove("hidden");
}

function backToMain() {
    document.getElementById("letter-screen").classList.add("hidden");
    document.getElementById("memories-screen").classList.add("hidden");
    document.getElementById("main-screen").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelector(".carousel-images");
    const totalImages = document.querySelectorAll(".carousel img").length;

    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateCarousel();
    });

    document.getElementById("next").addEventListener("click", function () {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    function updateCarousel() {
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

const music = document.getElementById("musicaFondo");
const playButton = document.getElementById("playMusic");

if (music && playButton) {
    playButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            playButton.textContent = "⏸️ Pausar Música";
        } else {
            music.pause();
            playButton.textContent = "🎵 Reproducir Música";
        }
    });
}




