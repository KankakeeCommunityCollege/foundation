import download from './download.js';

let year = new Date().getFullYear().toString();
let openingDateWithNoYearInIcalDateTimeFormat = '1101T000000';
let dayAfterOpeningDateWithNoYearInIcalDateTimeFormat = '1102T000000';
const summary = `KCC scholarship application is open`;
const description = `The KCC scholarship application opens today, Nov. 1, and will end on March 1. Apply one time to be considered for all applications. Apply now at https://foundation.kcc.edu/scholarships!`;

const PARENT_CONTAINER_ID = 'Reminder';
const paragraphWithDownloadButton =
`<p>
  Want to be reminded when the scholarship application is available? <br><button class="btn btn-outline-primary" role="button" id="Download">Download this iCal file</button> and add it to your calendar app to to get a reminder on Nov.&nbsp;1, ${year}.
</p>`; // Markup for a BS4 button el

function createICSdownload() {
  if ( ! document.getElementById(PARENT_CONTAINER_ID) )
    return;

  const PARENT = document.getElementById(PARENT_CONTAINER_ID);
  const start = year + openingDateWithNoYearInIcalDateTimeFormat;
  const end = year + dayAfterOpeningDateWithNoYearInIcalDateTimeFormat;

  let ICAL_STRING =
`BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${summary}
DTSTART;TZID=America/Chicago:${start}
DTEND;TZID=America/Chicago:${end}
X-MICROSOFT-CDO-ALLDAYEVENT:TRUE
DESCRIPTION:${description}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

  PARENT.innerHTML = paragraphWithDownloadButton;
  const btn = document.getElementById('Download');
  
  btn.addEventListener('click', () => {
    download(ICAL_STRING, 'kcc_scholarship_reminder.ics', 'text/calendar');
  });
}

export default createICSdownload;