if( $( '.slider-little-container' ).length ) {
    var sliderLlittle = new Swiper('.slider-little-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        lazy: true,
        slideToClickedSlide:true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            300: {
                direction: 'horizontal',
                slidesPerView: 3,
            },

            1023: {
                direction: 'vertical',
                slidesPerView: 3,
                spaceBetween: 25,
            },
        }
    });


    var sliderLarge = new Swiper('.slider-large-container', {
        lazy: true,
        spaceBetween: 15,
        thumbs: {
            swiper: sliderLlittle
        }
    });

};


