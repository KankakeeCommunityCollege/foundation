class ICALstring {
  constructor(events) {
    this.events = events;
  }
  formatNumber(int) {
    return int == 0 ? '00'
    : int < 10 ? '0' + int
    : int.toString();
  }
  icalDate(dateString, allDayEvent) {
    const d = new Date(dateString);
    let icalDateString;
    let time = ['T'];
    let num = this.formatNumber;
    let date = [d.getFullYear().toString()];
    allDayEvent == true ? time.push('000000') : time.push(num(d.getHours()), num(d.getMinutes()), '00');
    date.push(num(d.getMonth() + 1), num(d.getDate()));
    return icalDateString = [date.join(''), time.join('')].join('');
  }
  *getEvents() {
    for (const event of this.events) {
      let [summary, description, allDayEvent, start, end] = event;
      let eventString =
`BEGIN:VEVENT
SUMMARY:${summary}
DTSTART;TZID=America/Chicago:${this.icalDate(start, allDayEvent)}
DTEND;TZID=America/Chicago:${this.icalDate(end, allDayEvent)}
X-MICROSOFT-CDO-ALLDAYEVENT:${allDayEvent = true ? 'TRUE' : 'FALSE'}
DESCRIPTION:${description}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT`;
      yield eventString;
    }
  }
  createIcal() {
    let icalString =
`BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
${[...this.getEvents()].join('\n')}
END:VCALENDAR`;
    return icalString;
  }
}
//
//  USAGE:
//
// let iCalStr = new ICALstring(
//   [
//    [
//     'My Event Summary', // Name of event
//     'My Event Description',
//     allDayBoolean,  // true for all day events (must be true/false not 'true'/'false')
//     '6/5/2021 8:30 AM',
//     '6/6/2021 9:30 AM'
//    ]// ,
//   ]
// )
// let string = iCalStr.createIcal();
// // Dow what you want, e.g.: download(string, 'myCalendar.ics', 'text/calendar');

export default ICALstring;