// Custom JavaScript to pull in game schedule:
'use strict';
var ScholarshipPage = (function scholarshipLoading() {
  var scholarshipEntries;
  var spreadsheetId = '1spDfZUVLeEE5n0OFvbXl2FSJD_RmS0dSPc7CSGr1TjI';

  function init() {
    var urls = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetId + '/1/public/values?alt=json';
    $.ajax({
      url: urls,
      dataType: 'jsonp',
      data: {
        feed: 'entry'
      },
      success: function (data) {
        scholarshipData(data.feed.entry);
      },
    });

  }

  function scholarshipData(scholarshipEntries) {
    var tableRowsString = [];

    $.each(scholarshipEntries, function () {
      var that = this;
      var scholarshipName = that.gsx$scholarshipname.$t,
        numberofRecipients = that.gsx$numberofrecipients.$t,
        awardAmount = that.gsx$awardamount.$t,
        requiredMinimumGPAOnA4Scale = that.gsx$requiredminimumgpa.$t,
        openToPartTime = that.gsx$opentoparttime.$t,
        openToFullTime = that.gsx$opentofulltime.$t,
        demonstrateFinancialNeed = that.gsx$demonstratefinancialneed.$t,
        resideInKCCDistrict520 = that.gsx$resideinkccdistrict520.$t,
        otherSpecialRequirements = that.gsx$otherspecialrequirements.$t;
      tableRowsString.push('<tr><td>' + scholarshipName + '</td><td>' + numberofRecipients + '</td><td>' + awardAmount + '</td><td>' + requiredMinimumGPAOnA4Scale + '</td><td>' + openToPartTime + '</td><td>' + openToFullTime + '</td><td>' + demonstrateFinancialNeed + '</td><td>' + resideInKCCDistrict520 + '</td><td>' + otherSpecialRequirements + '</td></tr>');
    });
    document.querySelector('#table').innerHTML = tableRowsString.join('');
  }

  return {
    init: init
  };

})();
