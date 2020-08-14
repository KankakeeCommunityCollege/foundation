import watchForPlayClicks from './watchForPlayClicks.js';

const VIDEO_PLACEHOLDER_ID = 'video';
const VIDEO_CONTAINER_ID = 'videoContainer';

function createVideoFailMessage() {
  let message;
  return message = `
  <div class="video__message d-flex flex-column mx-3 my-3 justify-content-center align-items-center">
    <p class="video__typography--whoops mb-0">Whoops!</p>
    <p class="typography__larger-p video__typography--p mb-1 px-3">Something went wrong while loading the video.</p>
    <p class="typography__larger-p video__typography--p px-3">You may want to <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/mbqJUT89-AY">watch the GIVE DAY video on YouTube</a> instead.</p>
  </div>`;
}

function createSources(html, videoArr, typeArr) {
  videoArr.forEach((src,i) => {
    html += `<source src="${src}" type="${typeArr[i]}">`;
    return html;
  });
  return html;
}

function loadVideo() {
  // Bail-out if the element needed is missing
  if ( ! document.getElementById(VIDEO_PLACEHOLDER_ID) )
    return;

  const t0 = performance.now();

  const videoContainer = document.getElementById(VIDEO_CONTAINER_ID);
  const videoPlaceholder = document.getElementById(VIDEO_PLACEHOLDER_ID);
  const videoSourcesArray = videoPlaceholder.dataset.videos.split(',');// `data-*=""` attributes built into the HTML
  const videoSourceTypesArray = videoPlaceholder.dataset.videoTypes.split(',');// `data-*=""` attributes built into the HTML
  //const videoPoster = videoPlaceholder.dataset.poster;// `data-*=""` attributes built into the HTML

  let html = `<video controls poster="${videoPlaceholder.dataset.poster}" id="videoElement" class="width__full">`;

  html = createSources(
    html,
    videoSourcesArray,
    videoSourceTypesArray
  );

  html += `
    <p>Your browser doesn't support HTML5 video. Here is
     a <a href="https://cdn.kcc.edu/foundation/kcc-give-day_1080p.mp4">link to the video</a> instead.</p>
  </video>
  <div class="d-flex flex-column justify-content-center align-items-center video__play-button--wrapper">
    <button class="video__play-button" role="button" id="playButton">Play Video</button>
  </div>`;

  const videoLoadingFailureMessage = createVideoFailMessage();

  window.addEventListener('load', ()=>{

    const t1 = performance.now();
    if ( t1 - t0 > 6000 ) {
      videoContainer.parentElement.innerHTML = videoLoadingFailureMessage;
      return console.error('Slow network speeds. Aborting video load');
    } else {
      videoContainer.innerHTML = '';
      videoContainer.innerHTML = html;
      watchForPlayClicks();
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
