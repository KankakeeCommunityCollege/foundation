function videoPlayHandler(e) {
  const buttonWrapper = document.querySelector('.video__play-button--wrapper');

  e.type == 'play' && buttonWrapper != null ?
    buttonWrapper.parentElement.removeChild(buttonWrapper)
  : null;
}

function playVideo(video) {
  return video.play();
}

function watchForVideoPlay() {
  const video = document.getElementById('videoElement');
  const button = document.getElementById('playButton');

  video.addEventListener('play', videoPlayHandler);
  button.addEventListener('click', (e)=> {
    e.target.matches('#playButton') ? playVideo(video) : null;
  });
}

export default watchForVideoPlay;