
function bootstrapTabs() {
  $(document).ready(function() {
    $('.jsTabLink').on('click', function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
  });
}

export default bootstrapTabs;
