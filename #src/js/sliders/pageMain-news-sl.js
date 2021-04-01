if( $( '.news-container' ).length ) {
    var swiper = new Swiper('.news-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        lazy: true,
        pagination: {
            el: '.news-pagination',
        },
        breakpoints: {

            320: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },

            600: {
                slidesPerView: 2.5,
            },


            990: {
                slidesPerView: 3,

            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 22,
            },
        }
    });
}