import '../../scss/main.scss';

const path = window.location.pathname;
// Code in progress for creating a giveday .ics calendar reminder
// import createICSdownload from './createICSdownload.js';
// Code in progress for creating a giveday .ics calendar reminder
//const pagesWithICALreminders = /\/giveday\/?/

window.addEventListener('load', () => {
  if (path == '/' || path == '/giveday/') {
    if (
      window.navigator.maxTouchPoints > 1 ||
      window.matchMedia('(max-width: 767px)')
    ) {  // Animate the SVG icons for mobile users who don't have :focus or :hover
      import('./animateIcons')
        .then(({ default: animateIcons }) => animateIcons());
    }
  }

  if (path == '/scholarships/') {
    window.setTimeout(() => {
      import('./scholarshipApp/checkScholarshipApp')
        .then(({ default: checkScholarshipApp }) => checkScholarshipApp());
    }, 1000);

    import('../table/scholarshipSheetsAPI.js')
      .then(({ default: start }) => gapi.load('client', start))
      .then(() => {
        // Conditionally compile the BS5 pagination CSS for use in the scholarships page
        import('../../scss/bootstrap-pagination.scss');
      })
  }

  if (document.getElementById('galleryTrack')) {
    import('./receptionGallery')
      .then(({ default: receptionGallery }) => receptionGallery());
  }
});

  // Code in progress for creating a giveday .ics calendar reminder
  // if (window.location.pathname.search(pagesWithICALreminders) == -1)
  //   return;
  //
  // console.log(`Pages with ICAL Downloads!`);
  // createICSdownload();
