
$(document).ready(function () {


    // Faq Code
  $('.faq_question').on('click', function () {
    const parent = $(this).closest('.faq_block');

    // close others
    $('.faq_block').not(parent).find('.faq_answer').slideUp();
    $('.faq_block').not(parent).find('img').removeClass('active');

    // toggle current
    parent.find('.faq_answer').slideToggle();
    const icon = $(this).find('img');
    icon.toggleClass('active');
  });





                $('.screening-steps_accordion_top-content').on('click', function () {
            const parent = $(this).closest('.screening-steps_accordion');

            // close others
            $('.screening-steps_accordion').not(parent).find('.accordion-dropdown').slideUp();
            $('.screening-steps_accordion').not(parent).find('img').removeClass('active');

            // toggle current
            parent.find('.accordion-dropdown').slideToggle();
            const icon = $(this).find('img');
            icon.toggleClass('active');
        });




    function setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    function getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
      }
      return null;
    }

    if (!getCookie("cookieConsent")) {
      $("#cookie-banner").fadeIn();
    }

    $("#accept-cookies").on("click", function () {
      setCookie("cookieConsent", "accepted", 365);
      $("#cookie-banner").fadeOut();

      // Enable tracking scripts here
      console.log("Cookies accepted");
    });

    $("#reject-cookies").on("click", function () {
      setCookie("cookieConsent", "rejected", 365);
      $("#cookie-banner").fadeOut();

      // Disable / do not load tracking scripts
      console.log("Cookies rejected");
    });



$('#menu-btn').click(function(){
    $('.nav_links_container').toggleClass('active');
});
$('#close-btn').click(function(){
    $('.nav_links_container').toggleClass('active');
});

$("#copyBtn").on("click", function () {
  const text = "OncoChecks 10 Harley St London W1G 9PF";
  navigator.clipboard.writeText(text);
});

// Carousel
     $('.carousel-main').slick({
            infinite: false,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

});


