function playVideo(videoElement, button) {
  const buttonWrapper = document.querySelector('.video__play-button--wrapper');

  videoElement.play();
  buttonWrapper.parentElement.removeChild(buttonWrapper);
}

function playButtonHandler(e) {
  const video = document.getElementById('videoElement');

  e.target.matches('#playButton') ? playVideo(video, e.target) : null;
}

function watchForPlayClicks() {
  const playButton = document.getElementById('playButton');
  
  playButton.addEventListener('click', playButtonHandler);
}

export default watchForPlayClicks;