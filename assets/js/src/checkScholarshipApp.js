// Custom JS to check if the scholarship application is open (Oct. 1 - May 1) and...
// provide a link to the application if its available

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
</p>
<div style="max-width: 800px;" class="alert alert-info mx-auto mb-5 text-left">
  <p class="mb-2"><strong>Awards will be announced on May 15.</strong> Applicants will be notified via email.
  Scholarship recipients must be enrolled at KCC for the 2022-23 academic year to receive award.</p>
  <p class="mb-0 text-center"><strong>Need Help?</strong> Contact Jen Zimmerman: <a href="tel:+18158028251">815-802-8251</a> or <a href=""mailto:jzimmerman@kcc.edu>jzimmerman@kcc.edu</a></p>
</div>`;
}

function scholarshipsClosed() {
  SCHOLARSHIPS_MESSAGE.innerHTML = `<p class="mb-4">
  <strong>The application is not open yet.</strong></p>`;
}

function checkDates() {
  // const test = new Date('5/1/2021');
  const today = new Date();
  const month = today.getMonth() + 1;

  return month < 5 || month >= 10 ? true : false; // If current month is between Oct & May (when app is open) return true, otherwise false
}

function checkScholarshipApp() {
  checkDates() ? scholarshipsOpen() : scholarshipsClosed();
}

export default checkScholarshipApp;