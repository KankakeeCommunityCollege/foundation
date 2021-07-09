import DownloadButton from './createDownloadButton.js'
import ICALstring from './createICALstring.js'
// USAGE:
//    download('<DOWNLOADABLE>', '<file-name>.<ext>', '<filetype>');
//  SEE: <http://danml.com/download.html>
//    // '<DOWNLOADABLE>' is a "String, Blob, or Typed Array of data, or via a dataURL representing the file's data as base64 or url-encoded string."
//    // '<file-name>.<ext>' is the filename with the extension
//    // '<filetype> is the MIME content-type'

let year = new Date().getFullYear().toString();
const PARENT_CONTAINER_ID = 'giveDayReminder'; // Built into HTML DOM
const paragraphWithDownloadButton =
`<div class="card m-4">
  <div class="card-body">
    <p>
      <strong>Want a calendar reminder for GIVE DAY ${year}?</strong>
    </p>
    <p>
      <button class="btn btn-outline-primary" role="button" id="Download">Download the iCal file</button>
      and add it to your calendar app to get a reminder on Nov.&nbsp;1, ${year}.
    </p>
  </div>
</div>`;

function createICSdownload() {
  if ( ! document.getElementById(PARENT_CONTAINER_ID) )
    return;

  let icalString = new ICALstring(
    [
      [
        `KCC GIVE DAY ${year}`,
        `Today is KCC's GIVE DAY ${year}! Any amount helps! Give today at https://foundation.kcc.edu/giveday`,
        true,
        `06/03/${year}`,
        `06/04/${year}`
      ],
      [
        `KCC GIVE DAY 2 ${year}`,
        `Today is KCC's GIVE DAY ${year}! Any amount helps! Give today at https://foundation.kcc.edu/giveday`,
        false,
        `06/13/${year} 8:30 AM`,
        `06/14/${year} 9:45 AM`
      ]
    ]
  )
  document.getElementById(PARENT_CONTAINER_ID).innerHTML = paragraphWithDownloadButton;
  const btn = document.getElementById('Download');
  //console.log(icalString.createIcal());
  let button = new DownloadButton(btn, icalString.createIcal(), 'kcc_giveday_reminder', 'ics', 'text/calendar');
  button.init();
}

export default createICSdownload;