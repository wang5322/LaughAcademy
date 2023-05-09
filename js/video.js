let myVideo = document.getElementById("video");
if (window.matchMedia("(min-width: 768px)").matches) {
  // If screen is at least 768px wide, autoplay the video
  myVideo.play();
} else {
  // If screen is less than 768px wide, stop autoplay 
  myVideo.pause();
  
}
