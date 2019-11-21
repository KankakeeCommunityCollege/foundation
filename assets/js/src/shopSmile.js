// Custom JS to animate and show the shop Amazon Smile widget
// ===================================================================

function shopSmileInit() {
  $(document).ready(function () {

    var smileWrapper = $('#shopSmileWrapper');

    //function addShaddow() {
    //  var smileTab = $('#smileTab');
    //  setTimeout(function(){
    //    smileTab.addClass('shop-smile__tab--shaddow');
    //  }, 1200);
    //}
    //function removeShaddow() {
    //  var smileTab = $('#smileTab');
    //  smileTab.removeClass('shop-smile__tab--shaddow');
    //}

    if( sessionStorage.clickcount == undefined ) { // if the clickcount is undefined:
      // set the clickcount to 0:
      sessionStorage.clickcount = 0;
    }

    smileWrapper.attr('data-close', sessionStorage.clickcount);

    function animateIn() {
      // Function to animate the slide-in of the amazon smile slide-box
      var deferShowShopSmile = $.Deferred();

      $.when(deferShowShopSmile).done(function() {
        smileWrapper.addClass('shop-smile__wrapper--show');
      });

      function animateShopSmile() {
        smileWrapper.addClass('shop-smile__wrapper--slide-in');
        //$('#greyOut').addClass('shop-smile__grey-out--animate')
        //  .addClass('shop-smile__grey-out--show');
        deferShowShopSmile.resolve();
      }
      animateShopSmile();
    }

    // Run the slide-box animation on page-load after a delay:
    function showShopSmile() {
      if ( smileWrapper.attr('data-close') == 0 ) {
        setTimeout(function(){
          //removeShaddow();
          animateIn();
        }, 2000);
      }
    }
    //  if( localStorage.getItem('user_visted') != 'true' ){
    showShopSmile();
    //    localStorage.setItem('user_visted', 'true');
    //  }

    // Closing the amazon smile slide-box
    function closeSmileWidget() {
      $('#exitButton').click(function() {
        smileWrapper.removeClass('shop-smile__wrapper--slide-in');
        smileWrapper.removeClass('shop-smile__wrapper--show');
        smileWrapper.addClass('shop-smile__wrapper--slide-out');
        clickCounter();
        //$('#greyOut').removeClass('shop-smile__grey-out--animate')
        //  .addClass('shop-smile__grey-out--animate-out')
        //  .removeClass('shop-smile__grey-out--show');
        //addShaddow();
      });
    }
    closeSmileWidget();

    // Reopening the slide-box by clicking it's minimized tab:
    function openSmile() {
      $('#openSmile').on('click', function() {
        //console.log('clicked');
        var wrapperClasses = smileWrapper.hasClass('shop-smile__wrapper--show');
        //console.log(wrapperClasses);
        if ( wrapperClasses == true ) {
          //console.log('show');
          smileWrapper.removeClass('shop-smile__wrapper--slide-in');
          smileWrapper.removeClass('shop-smile__wrapper--show');
          //addShaddow();
          smileWrapper.addClass('shop-smile__wrapper--slide-out');
          clickCounter();
        } else {
          //console.log('NO');
          smileWrapper.removeClass('shop-smile__wrapper--slide-out');
          //removeShaddow();
          animateIn();
        }
      });
    }
    openSmile();

    function clickCounter() {
      if(typeof(Storage) !== 'undefined') {
        if (sessionStorage.clickcount) {
          sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
          sessionStorage.clickcount = 1;
        }
        smileWrapper.attr('data-close', sessionStorage.clickcount);
      }
    }

  });
  //});
}

export default shopSmileInit;
