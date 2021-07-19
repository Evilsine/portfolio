const composer = document.querySelector('#composer');
const soundDesigner = document.querySelector('#sound-designer');
const visualArtist = document.querySelector('#visual-artist');
const developer = document.querySelector('#developer');

composer.addEventListener('animationend',() => {
    console.log("animation ended")
    composer.style.display = "none";
    soundDesigner.style.display = "block";
})
soundDesigner.addEventListener('animationend',() => {
    console.log("animation ended")
    soundDesigner.style.display = "none";
    visualArtist.style.display = "block";
})
visualArtist.addEventListener('animationend',() => {
    console.log("animation ended")
    visualArtist.style.display = "none";
    developer.style.display = "block";
})
developer.addEventListener('animationend',() => {
    console.log("animation ended")
    developer.style.display = "none";
    composer.style.display = "block";
})