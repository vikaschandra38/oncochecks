
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
    icon.addClass('active');
  });





                $('.screening-steps_accordion_top-content').on('click', function () {
            const parent = $(this).closest('.screening-steps_accordion');

            // close others
            $('.screening-steps_accordion').not(parent).find('.accordion-dropdown').slideUp();
            $('.screening-steps_accordion').not(parent).find('img').removeClass('active');

            // toggle current
            parent.find('.accordion-dropdown').slideToggle();
            const icon = $(this).find('img');
            icon.addClass('active');
        });


$(function () {

  if (document.cookie.indexOf('cookiesAccepted=true') === -1) {
    $('#cookie-banner').show();
  }

  $('#accept-cookies').click(function () {
    document.cookie = "cookiesAccepted=true; max-age=31536000; path=/";
    $('#cookie-banner').hide();
  });

});

$('#menu-btn').click(function(){
    $('.nav_links_container').toggleClass('active');
});
$('#close-btn').click(function(){
    $('.nav_links_container').toggleClass('active');
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


