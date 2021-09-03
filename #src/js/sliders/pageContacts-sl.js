
    let contact = new Swiper('.slider__container', {
        slidesPerView: 1,
        spaceBetween: 15,
        lazy: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
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
