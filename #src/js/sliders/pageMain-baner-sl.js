if ($('.banner-container').length) {
    var banner = new Swiper('.banner-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        lazy: true,
        slideToClickedSlide: true,
        pagination: {
            el: '.banner-pagination',
        },
    });

};


