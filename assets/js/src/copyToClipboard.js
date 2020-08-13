import ClipboardJS from "clipboard";

const CLIPBOARD_BUTTON = '#copy';
const CLIPBOARD_MESSAGE = '.clipboard__box';

function copytoClipboard() {

  if ( ! document.querySelector(CLIPBOARD_BUTTON) )
    return;

  const clipboard = new ClipboardJS(CLIPBOARD_BUTTON);

  clipboard.on('success', (e)=>{
    //console.info('Text:', e.text);
    const text = `<p class="clipboard__p mb-0 text-center">Copied!</p>`;
    let message = document.querySelector(CLIPBOARD_MESSAGE)

    message.innerHTML = text;
    message.classList.add('clipboard__box--visible');
    window.setTimeout(()=>{
      message.classList.remove('clipboard__box--visible');
      message.classList.add('clipboard__box--out');

      window.setTimeout(()=> {
        message.classList.remove('clipboard__box--out');
      },1000);
    },2000);
    e.clearSelection();
  });
}

export default copytoClipboard;