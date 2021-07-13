$(function(){
        $(window).scroll(function(){
         if($(this).scrollTop() > 50) {
          $('#header').addClass('active');

          $('.navbar a').addClass('navbar_white');
          $('.navbar a').removeClass('navbar_other');

          $('#header .logo h1 a').removeClass('logo_color');
          $('#header .logo h1 a').addClass('logo_color_mod');
         } else {
          $('#header').removeClass('active');

          $('.navbar a').removeClass('navbar_white');
          $('.navbar a').addClass('navbar_other');

          $('#header .logo h1 a').removeClass('logo_color_mod');
          $('#header .logo h1 a').addClass('logo_color');
         }
      });

    });
