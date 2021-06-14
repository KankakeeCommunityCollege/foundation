import watchForVideoPlay from './watchForVideoPlay.js';

const VIDEO_PLACEHOLDER_ID = 'video';
const VIDEO_CONTAINER_ID = 'videoContainer';
const VIDEO_EL_CLASS_ARR = ['width__full', 'video'];
const VIDEO_CONTROLS_ATTRIBUTES = ['disablepictureinpicture', 'controls', 'controlslist="nodownload"']
const mobileUserAgent = window.navigator.userAgent.search(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i) !== -1

function capturePerformanceTime() {
  return performance.now();
}

function createPlayButton(html) {
  return html += `
  <div class="d-flex flex-column justify-content-center align-items-center video__play-button--wrapper">
    <button class="video__play-button video__play-button--bg" role="button" id="playButton">Play Video</button>
  </div>`;
}

function addVideoFallback(html, mp4) {
  html += `
    <p>Your browser doesn't support HTML5 video. Here is
     a <a href="${mp4}">link to the video</a> instead.</p>
  </video>`;
  return createPlayButton(html)
}

function mapSourceElement(src, i, typeArr) {
  return `<source src="${src}" type="${typeArr[i]}">`;
}

function createSourceElements(html, videoArr, typeArr) {
  html += videoArr.map((src, i) => mapSourceElement(src, i, typeArr)).join('\n');
  return addVideoFallback(html, videoArr[0]);
}

function createVideoElement(html, videoData) {
  html = `<video ${VIDEO_CONTROLS_ATTRIBUTES.join(' ')} poster="${videoData.poster}" id="videoElement" class="${VIDEO_EL_CLASS_ARR.join(' ')}">`;

  return mobileUserAgent ? createSourceElements(html, videoData.videosMobile.split(','), videoData.videoMobileTypes.split(','))
  : createSourceElements(html, videoData.videos.split(','), videoData.videoTypes.split(','));
}

function createVideoFailMessage(ytLink) {
  return `
  <div class="video__message d-flex flex-column mx-3 my-3 justify-content-center align-items-center">
    <p class="video__typography--whoops mb-0">Whoops!</p>
    <p class="typography__larger-p video__typography--p mb-1 px-3">Something went wrong while loading the video.</p>
    <p class="typography__larger-p video__typography--p px-3">
      You may want to <a target="_blank" rel="noopener noreferrer" href="${ ytLink }">watch the video on YouTube</a> instead.
    </p>
  </div>`;
}

function createErrorMessage(videoContainer, ytLink) {
  videoContainer.parentElement.innerHTML = createVideoFailMessage(ytLink);
  return console.error('Slow network speeds. Aborting video load');
}

function createVideo(videoContainer, html) {
  videoContainer.innerHTML = html;
  watchForVideoPlay();
}

function buildVideoOnPageLoad(t0, videoContainer, ytLink, html) {
  window.onload = () => {
    const t1 = capturePerformanceTime();
    const slowNetworkSpeeds = t1 - t0 > 6000;

    slowNetworkSpeeds ?
      createErrorMessage(videoContainer, ytLink)
    : createVideo(videoContainer, html);
  }
}

function loadVideo() {
  // Bail-out if the element needed is missing
  if ( ! document.getElementById(VIDEO_PLACEHOLDER_ID) )
    return;

  const PLACEHOLDER = document.getElementById(VIDEO_PLACEHOLDER_ID);
  const t0 = capturePerformanceTime();
  let html = createVideoElement(html, PLACEHOLDER.dataset);
  let YOUTUBE_LINK = PLACEHOLDER.dataset.youtube;

  buildVideoOnPageLoad(t0, document.getElementById(VIDEO_CONTAINER_ID), YOUTUBE_LINK, html);
}

export default loadVideo;
//  USAGE:
//  import loadVideo from './loadVideo.js';
//
//  document.addEventListener('DOMContentLoaded', function() {
//    loadVideo();
//  });
