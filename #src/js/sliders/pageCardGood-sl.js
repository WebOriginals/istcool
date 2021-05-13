if( $( '.slider-little-container' ).length ) {
    var sliderLlittle = new Swiper('.slider-little-container', {
        slidesPerView: 3,
        spaceBetween: 15,
        lazy: true,
        //loop:true,

        slideToClickedSlide:true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow:true,
        navigation: {
            nextEl: '.little-button-next',
            prevEl: '.little-button-prev',
        },
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


