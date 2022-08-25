/**
 * 
 * Custom JS that opens a modal after page-load if
 *   a `?modal=registrationModal` querystring is present
 *   at the end of the URL. Used in conjunction with QR code
 *   to link users directly to the registration form.
 * 
 */
const search = window.location.search;

function openModalWithQueryString() {
  if (window.location.search === '')
    return;

  if (search === '?modal=registrationModal') {
    const MODAL_ID = search.replace(/^\?modal=/, '')

    $(`#${MODAL_ID}`).modal('show');
  }
  
}

export default openModalWithQueryString;
