  window.sr = ScrollReveal();
    sr.reveal(".progress-bar", {
       origin: "left",
       duration: 2000,
       distance: "100%"
    });
    
   window.sr = ScrollReveal();
sr.reveal("#cards", {
   origin: "bottom",
   duration: 1000,
   distance: "100%"
});
$(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });
  window.sr = ScrollReveal();
  sr.reveal(".about__content", {
     origin: "bottom",
     duration: 1000,
     distance: "100%"
  });
  window.sr = ScrollReveal();
  sr.reveal(".skills__content", {
     origin: "bottom",
     duration: 1000,
     distance: "100%"
  });