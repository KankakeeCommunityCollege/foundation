const video = document.getElementById('videoElement');
const button = document.getElementById('playButton');

function videoPlayHandler(e) {
  const buttonWrapper = document.querySelector('.video__play-button--wrapper');
  
  e.type == 'play' ?
    buttonWrapper.parentElement.removeChild(buttonWrapper)
  : null;
}

function playVideo(video) {
  return video.play();
}

function playButtonHandler(e) {
  e.target.matches('#playButton') ? playVideo(video) : null;
}

function watchForVideoPlay() {
  button.addEventListener('click', playButtonHandler);
  video.addEventListener('play', videoPlayHandler);
}

export default watchForVideoPlay;