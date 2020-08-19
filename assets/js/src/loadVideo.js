import watchForVideoPlay from './watchForVideoPlay.js';

const VIDEO_PLACEHOLDER_ID = 'video';
const VIDEO_CONTAINER_ID = 'videoContainer';

function capturePerformanceTime() {
  return performance.now();
}

function addVideoOptionButtons(html) {
  return html += `
    <p>Your browser doesn't support HTML5 video. Here is
     a <a href="https://cdn.kcc.edu/foundation/kcc-give-day_1080p.mp4">link to the video</a> instead.</p>
  </video>
  <div class="d-flex flex-column justify-content-center align-items-center video__play-button--wrapper">
    <button class="video__play-button video__play-button--bg" role="button" id="playButton">Play Video</button>
  </div>`;
}

function createSourceElements(html, videoArr, typeArr) {
  videoArr.forEach((src,i) => {
    html += `<source src="${src}" type="${typeArr[i]}">`;
    return html;
  });
  return html = addVideoOptionButtons(html);
}

function createVideoElement(html, videoData) {
  const videoElClasses = ['width__full', 'video'];

  html = `<video controls poster="${videoData.poster}" id="videoElement" class="${videoElClasses.join(' ')}">`;
  return html = createSourceElements(html, videoData.videos.split(','), videoData.videoTypes.split(','));
}

function createVideoFailMessage() {
  let message;
  return message = `
  <div class="video__message d-flex flex-column mx-3 my-3 justify-content-center align-items-center">
    <p class="video__typography--whoops mb-0">Whoops!</p>
    <p class="typography__larger-p video__typography--p mb-1 px-3">Something went wrong while loading the video.</p>
    <p class="typography__larger-p video__typography--p px-3">You may want to <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/mbqJUT89-AY">watch the GIVE DAY video on YouTube</a> instead.</p>
  </div>`;
}

function createErrorMessage(videoContianer) {
  videoContainer.parentElement.innerHTML = `${createVideoFailMessage()}`;
  return console.error('Slow network speeds. Aborting video load');
}

function createVideo(videoContainer, html) {
  videoContainer.innerHTML = '';
  videoContainer.innerHTML = html;
  watchForVideoPlay();
}

function buildVideoOnPageLoad(t0, videoContainer, html) {
  window.addEventListener('load', () => {

    const t1 = capturePerformanceTime();
    const slowNetworkSpeeds = t1 - t0 > 6000;

    slowNetworkSpeeds ?
      createErrorMessage(videoContainer)
      : createVideo(videoContainer, html);
  });
}


function loadVideo() {
  // Bail-out if the element needed is missing
  if ( ! document.getElementById(VIDEO_PLACEHOLDER_ID) )
    return;

  const t0 = capturePerformanceTime();
  let html = createVideoElement(html, document.getElementById(VIDEO_PLACEHOLDER_ID).dataset);

  buildVideoOnPageLoad(t0, document.getElementById(VIDEO_CONTAINER_ID), html);
}

export default loadVideo;
//  USAGE:
//  import loadVideo from './loadVideo.js';
//
//  document.addEventListener('DOMContentLoaded', function() {
//    loadVideo();
//  });
