import watchForPlayClicks from './watchForPlayClicks.js';

const VIDEO_PLACEHOLDER_ID = 'video';
const VIDEO_CONTAINER_ID = 'videoContainer';

function setElementAttributes(el, attributeSettingsObject) {
  for (var attribute in attributeSettingsObject) {
    if (attributeSettingsObject.hasOwnProperty(attribute)) {
      el.setAttribute(attribute, attributeSettingsObject[attribute]);
    }
  }
}

function createVideoElement(videoSettingsObject) {
  const video = document.createElement('video');

  setElementAttributes(video, videoSettingsObject);
  return video;
}

function appendSourceToVideo(video, videoSource, videoSourceType) {
  const source = document.createElement('source');

  setElementAttributes(source, {'src': videoSource, 'type': videoSourceType});
  video.appendChild(source);
  return source;
}

function createSourceElements(video, videoSourcesArray, videoSourceTypesArray) {
  for (var i = 0, len = videoSourcesArray.length; i < len; i++) {
    appendSourceToVideo(video, videoSourcesArray[i], videoSourceTypesArray[i]);
  }
  return video;
}

function createButtonElements() {
  const div = document.createElement('div');
  const button = document.createElement('button');
  const buttonText = 'Play Video'

  div.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'video__play-button--wrapper');
  button.classList.add('video__play-button');
  setElementAttributes(button, {'role': 'button', 'id': 'playButton'});
  button.innerHTML = buttonText;
  div.appendChild(button);
  return div;
}

function assembleVideoPlayer(videoContainer, buttonElements, callback) {
  videoContainer.insertAdjacentElement('beforeend', buttonElements);
  
  callback();
}

function loadVideo() {
  // Bail-out if the element needed is missing
  if ( ! document.getElementById(VIDEO_PLACEHOLDER_ID) )
    return;

  const t0 = performance.now();

  const videoPlaceholder = document.getElementById(VIDEO_PLACEHOLDER_ID);
  const videoContainer = document.getElementById(VIDEO_CONTAINER_ID);
  // `data-*=""` attributes built into the HTML
  const videoSourcesArray = videoPlaceholder.dataset.videos.split(',');
  const videoSourceTypesArray = videoPlaceholder.dataset.videoTypes.split(',');
  const videoPoster = videoPlaceholder.dataset.poster;

  const videoSettingsObject = {
    'controls': '',
    'poster': videoPoster,
    'id': 'videoElement',
    'class': 'width__full'
  };

  const video = createVideoElement(videoSettingsObject);
  const buttonElements = createButtonElements();
  const videoLoadingFailureMessage = `
  <div class="video__message d-flex flex-column mx-3 my-2 justify-content-center align-items-center">
    <p class="video__typography--whoops mb-0">Whoops!</p>
    <p class="typography__larger-p video__typography--p mb-1 px-3">Something went wrong while loading the video.</p>
    <p class="typography__larger-p video__typography--p px-3">You may want to <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/mbqJUT89-AY">watch the GIVE DAY video on YouTube</a> instead.</p>
  </div>`;

  window.addEventListener('load', function(){

  const t1 = performance.now();
  if ( t1 - t0 > 5000 ) {
    videoContainer.parentElement.innerHTML = videoLoadingFailureMessage;
    return console.error('Slow network speeds. Aborting video load');
  } else {
    createSourceElements(video, videoSourcesArray, videoSourceTypesArray);
    videoContainer.innerHTML = '';
    videoContainer.innerHTML = video.outerHTML;
    assembleVideoPlayer(videoContainer, buttonElements, watchForPlayClicks);
  }
  });
}

export default loadVideo;
//  USAGE:
//
//  //Fire immediately. Do NOT fire inside `DOMContentLoaded` watcher
//
//  loadVideo();
//
//  document.addEventListener('DOMContentLoaded', function() {
//    // Normal JS that fires after the DOM has loaded...
//  });
