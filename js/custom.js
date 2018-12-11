$(document).ready(function () {
  $('.search-icon').click(function () {
    $('.search-bar').addClass('open');
  });
  $('.btn-close').click(function () {
    $('.search-bar').removeClass('open');
  });

  $('.owl-carousel').owlCarousel({
      rtl: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      margin: 0,
      slideSpeed : 500,
      stopOnHover : true,
      navigation: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          }
      }

  });




    $('.carousel').carousel({
      interval: 2500
    });


	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

  $('[data-toggle="tooltip"]').tooltip();

   $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

 // // MAPS
 //  map.addMarker({
 //    lat: -12.043333,
 //    lng: -77.028333,
 //    title: 'Lima',
 //    click: function(e) {
 //      alert('You clicked in this marker');
 //    }
 //  });

});
