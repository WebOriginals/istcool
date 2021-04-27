if ($('.firstScreen-container').length) {
    var swiper = new Swiper('.firstScreen-container', {
        lazy: true,
        autoplay: {
            delay: 5000,
        },
        autoHeight: true,
        spaceBetween:15,
        pagination: {
            el: '.firstScreen-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.first-screen-button-next',
            prevEl: '.first-screen-button-prev',
        },
    });
};