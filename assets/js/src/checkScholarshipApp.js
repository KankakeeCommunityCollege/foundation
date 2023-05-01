// Custom JS to check if the scholarship application is open (Oct. 1 - May 1) and...
// provide a link to the application if its available
const APPLICATION_LINK = 'https://kcc.scholarships.ngwebsolutions.com/CMXAdmin/Cmx_Content.aspx?cpId=639';
const SCHOLARSHIPS_MESSAGE = document.getElementById('scholarshipsMessage');
const openMessage = `<p class="mb-4">
  <strong>The application is open:</strong><br>
    <a class="btn btn-primary btn-lg"
      href="${APPLICATION_LINK}"
      target="_blank"
      rel="noopener noreferrer">
      Apply for Scholarships</a>
  </p>
  <div style="max-width: 800px;" class="alert alert-info mx-auto mb-5 text-left">
    <p class="mb-2">
      <strong>Awards will be announced on May 15.</strong>
      Applicants will be notified via email.
      Scholarship recipients must be enrolled at KCC for the 2023-24 academic year to receive award.
    </p>
    <p class="mb-0 text-center">
      <strong>Need Help?</strong> Contact the foundation office: 
      <a href="tel:+18158028950">815-802-8950</a> or <a href=""mailto:kccfoundation@kcc.edu>kccfoundation@kcc.edu</a>
    </p>
  </div>`;
const closedMessage = `<p class="mb-4">
  <strong>The application is not open yet.</strong></p>`;

function checkScholarshipApp() {
  const today = new Date();
  
  today.setHours(0, 0, 0, 0);

  const month = today.getMonth() + 1;
  const day = today.getDate();
  const scholarshipAppIsOpen = (month < 5 || month === 5 && day === 1 || month >= 10);
  const html = scholarshipAppIsOpen ? openMessage : closedMessage;

  SCHOLARSHIPS_MESSAGE.innerHTML = html;
}

export default checkScholarshipApp;
