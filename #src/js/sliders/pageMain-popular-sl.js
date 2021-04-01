if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    if( $( '.popular-container' ).length ) {

        var swiper = new Swiper('.popular-container', {
            slidesPerView: 1.5,
            spaceBetween: 20,
            lazy: true,
            navigation: {
                nextEl: '.popular-button-next',
                prevEl: '.popular-button-prev',
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
    };
}