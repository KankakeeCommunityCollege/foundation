function createCalendarFile() {
  if (!document.getElementById('icsDownload'))
    return;

  const btn = document.getElementById('icsDownload');
  const startEndDateInput = document.getElementById('customRadio2');
  const allDayInput = document.getElementById('customRadio1');
  const timeCollapse = document.getElementById('timeCollapse');
  const alertSelect = document.getElementById('inlineFormCustomSelectPref');
  const customAlertModal = document.getElementById('customAlertModal');


  //console.log(alertSelect.options);
  alertSelect.addEventListener('change', (e) => {
    //console.log(alertSelect.value);
    let val = alertSelect.value;
    const values = ['none', 'at', '5M', '10M', '15M', '20M', '30M', '1H', '2H', 'custom'];

    console.log(values[val - 1]);
    values[val - 1] == 'custom' ? $(customAlertModal).modal('show') : null;
  })
  allDayInput.addEventListener('change', (e) => {
    e.target.checked ? $(timeCollapse).collapse('hide') : null;
})
  startEndDateInput.addEventListener('change', (e) => {
    e.target.checked ? $(timeCollapse).collapse('show') : null;
  })
  
  const dateInput = document.getElementById('dateInput');
  let today = new Date();
  let year = today.getFullYear();
  let thisYear = new Date(`11/01/${year}`)
  let nextYear = new Date(`11/01/${year + 1}`);
  let reminderDate;

  today.setHours(0, 0, 0, 0);
  today.getTime() < thisYear.getTime() ? reminderDate = thisYear: reminderDate = nextYear;
  dateInput.placeholder = `Nov. ${reminderDate.getDate()}, ${reminderDate.getFullYear()}`;
}

export default createCalendarFile;