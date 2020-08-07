// ============================================================================== //
//
//   This JS Module is meant to open the Modal on the GIVE DAY page
//   When the URL contain's the ID of the modal as a hash-link.
//   This Module is needed to be able to link to the Give Day page
//   and automatically open the donation Form on page load.
//   The only use case for this module, currently, is to link the
//   "Donate Now" button on `....edu/give/` to open the donation form
//   When the user follows the Donate Now button to the giveday page.
//
//   It also gives us the ability to send a direct link to the GIVE DAY FORM,
//   since it's hidden from view by a modal window.
//
//   Author: Wesley Zajicek
//
// ============================================================================== //
const beginningAndTrailingSlashRegex = /(^\/|\/$)/g;
const beginningHashRegex = /^\#/;

function openModal(targetId) {
  $(targetId).modal('show');
}

function checkHashForModalMatch(hash) {
  if (document.getElementById(hash.replace(beginningHashRegex, ''))) {
    openModal(hash);
  }
}

function linkToGiveDayModal() {
  const path = window.location.pathname;
  const locationIsGiveDay = path.replace(beginningAndTrailingSlashRegex, '') == 'giveday';

  if ( ! locationIsGiveDay)
    return;

  if ( ! window.location.hash )
    return;
  
  checkHashForModalMatch(window.location.hash);
}

export default linkToGiveDayModal;