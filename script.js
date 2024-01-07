const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", togglePlayIcon);
video.addEventListener("pause", togglePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
