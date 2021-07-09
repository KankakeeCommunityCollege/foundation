import download from './download.js';

class DownloadButton {
  constructor(buttonEl, data, strFileName, strFileExt, strMimeType) {
    this.buttonEl = buttonEl;
    this.content = data;
    this.file = `${strFileName}.${strFileExt}`;
    this.mime = strMimeType;
  }
  init() {
    let button = this.buttonEl;
    let el;
    try {
      if (typeof button == 'string') {
        document.querySelector(button) != null ? el = document.querySelector(button)
        : document.getElementById(button) != null ? el = document.getElementById(button)
        : null;
      }
      if (button == null)
        throw `Error: ${this.buttonEl} cannot be found!`;
      
      el = button;
    } catch (err) {
      console.error(err);
    }

    el.addEventListener('click', (e) => {
      console.log(e);
      download(this.content, this.file, this.mime);
    });
  }
}

export default DownloadButton;