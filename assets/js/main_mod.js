$(function(){
        $(window).scroll(function(){
         if($(this).scrollTop() > 50) {
          $('#header').addClass('active_');

          $('.navbar a').addClass('navbar_white');
          $('.navbar a').removeClass('navbar_other');

          $('#header .logo h1 a').removeClass('logo_color');
          $('#header .logo h1 a').addClass('logo_color_mod');
         } else {
          $('#header').removeClass('active_');

          $('.navbar a').removeClass('navbar_white');
          $('.navbar a').addClass('navbar_other');

          $('#header .logo h1 a').removeClass('logo_color_mod');
          $('#header .logo h1 a').addClass('logo_color');
         }
      });

    });
(function(a) {
   a(window).load(function() {
      a("#preloader").delay(1000).fadeOut(800);
    });
})(jQuery);