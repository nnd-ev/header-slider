(function ($) {
    'use strict';

    var browserWindow = $(window);
 
 

    // :: 5.0 Sliders Active Code
    if ($.fn.owlCarousel) {

        var welcomeSlide = $('.hero-slides');
        // var aboutSlide = $('.about-slides');
        // var donateSlide = $('.donate-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            // navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-left"></i>'],
             navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 800
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        var dot = $('.hero-slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1 + '.';
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });
 
    }

 

})(jQuery);