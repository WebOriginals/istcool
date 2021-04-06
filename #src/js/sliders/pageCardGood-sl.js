if( $( '.slider-little-container' ).length ) {
    var sliderLlittle = new Swiper('.slider-little-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop:true,
        lazy: true,
        slideToClickedSlide:true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            767: {
                direction: 'horizontal',
                slidesPerView: 3,
            },

            1280: {
                direction: 'vertical',
                slidesPerView: 3,
            },
        }
    });

    if(window.screen.width>=767) {
        var sliderLarge = new Swiper('.slider-large-container', {
            lazy: true,
            thumbs: {
                swiper: sliderLlittle
            }
        });
    } else {
        var sliderLarge = new Swiper('.slider-large-container', {
            lazy: true,
            pagination: {
                el: '.slider-large-pagination',
                clickable: true,
            },
        });
    }
};


