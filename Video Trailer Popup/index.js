const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", ()=>{
    trailerContainer.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=>{
    trailerContainer.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});