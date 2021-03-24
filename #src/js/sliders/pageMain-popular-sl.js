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

        });
    };
}