// Custom JS to check if the scholarship application is open (Oct. 1 - May 1) and...
// provide  alink to the application if its available

const APPLICATION_LINK = 'https://kcc.scholarships.ngwebsolutions.com/CMXAdmin/Cmx_Content.aspx?cpId=639';
const SCHOLARSHIPS_MESSAGE = document.getElementById('scholarshipsMessage');

function scholarshipsOpen() {
  SCHOLARSHIPS_MESSAGE.innerHTML = `<p class="mb-4">
<strong>The application is open:</strong><br>
  <a class="btn btn-primary btn-lg"
    href="${APPLICATION_LINK}"
    target="_blank"
    rel="noopener noreferrer">
    Apply for Scholarships</a>
</p>`;
}

function scholarshipsClosed() {
  SCHOLARSHIPS_MESSAGE.innerHTML = `<p class="mb-4">
  <strong>The application is not open yet.</strong></p>`;
}

function checkDates() {
  // const test = new Date('10/1/2022');
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  const month = today.getMonth() + 1;

  return month < 5 || month >= 10 ? true : false;
}

function checkScholarshipApp() {
  checkDates() ? scholarshipsOpen() : scholarshipsClosed();
}

export default checkScholarshipApp;