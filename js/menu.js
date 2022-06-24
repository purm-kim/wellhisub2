$(function () {

  var $header = $('.header');
  var $breadcrumb = $('.breadcrumb_wrap');
  if ($breadcrumb.length) {
    var $breadcrumbTop = $breadcrumb.offset().top;
  }

  var fadeStart = 100,
    fadeUntil = 600,
    fading = $('.new_subtop');

  if ($(window).width() < 769) {
    fadeStart = 200;
    fadeUntil = 600;
  }

  $(window).resize(function () {
    if ($(window).width() < 769) {
      fadeStart = 200;
      fadeUntil = 600;
    } else {
      fadeStart = 200;
      fadeUntil = 800;
    }
  });

  $(window).on('scroll', function () {
    var sct = $(document).scrollTop();
    if ($breadcrumb.length) {
      if ($breadcrumbTop < sct) {
        $breadcrumb.addClass('fix');
        if ($(window).width() > 768) {
          $header.hide();
        }
      } else {
        $breadcrumb.removeClass('fix');
        $header.show();
      }
    }

    if ($(window).scrollTop() > 50) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }

    var offset = $(document).scrollTop()
      , opacity = 0;
    if (offset <= fadeStart) {
      opacity = 1;
    } else if (offset <= fadeUntil) {
      opacity = 1 - offset / fadeUntil;
    }
    fading.css('opacity', opacity);

    // var footSearchOffset = $footer.offset().top;
  //   var floatSearch = $('.float_searchbar');
  //   var sideMenu = $('.side_menu');

  //   if (sct < 50) {
  //     sideMenu.removeClass('visible');
  //   } else {
  //     sideMenu.addClass('visible');
  //   }

  //   if (sct < 1000) {
  //     floatSearch.removeClass('visible');
  //   } else {
  //     floatSearch.addClass('visible');
  //   }

  //   if (footSearchOffset < sct + 1200) {
  //     floatSearch.removeClass('visible');
  //     sideMenu.removeClass('visible');
  //   }
  });



});