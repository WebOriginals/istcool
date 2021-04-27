if ($('.banner-container').length) {
    var banner = new Swiper('.banner-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        lazy: true,
        slideToClickedSlide: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.banner-pagination',
        },
        navigation: {
            nextEl: '.arrow-banner-button-next',
            prevEl: '.arrow-banner-button-prev',
        },
    });

};


