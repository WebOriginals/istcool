if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    if( $( '.articles-container' ).length ) {
        var swiper = new Swiper('.articles-container', {
            slidesPerView: 1,
            spaceBetween: 15,
            lazy: true,
            pagination: {
                el: '.articles-pagination',
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

                }
            }
        });
    }
}