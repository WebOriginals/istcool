if ($('.firstScreen-container').length) {
    var swiper = new Swiper('.firstScreen-container', {
        lazy: true,
        spaceBetween:15,
        pagination: {
            el: '.firstScreen-pagination',
            clickable: true,
        },

    });
};