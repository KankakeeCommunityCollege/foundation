function videoPlayHandler(e) {
  const buttonWrapper = document.querySelector('.video__play-button--wrapper');
  
  e.type == 'play' ?
    buttonWrapper.parentElement.removeChild(buttonWrapper)
  : null;
}

function playVideo(videoElement) {
  return videoElement.play();
}

function playButtonHandler(e) {
  const video = document.getElementById('videoElement');

  e.target.matches('#playButton') ? playVideo(video) : null;
}

function watchForPlayClicks() {
  const playButton = document.getElementById('playButton');
  const video = document.getElementById('videoElement');

  video.addEventListener('play', videoPlayHandler);
  
  playButton.addEventListener('click', playButtonHandler);
}

export default watchForPlayClicks;