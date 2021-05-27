parameters = {
    duration: 1500,
}

if( $( '.body-header-mobile' ).length ) {
    $(".cmn-toggle-switch__htx").click(function () {
        $(this).toggleClass("active");
        if (this.classList.contains("active") === true) {
            $('.wrapper-menu').addClass("active");
            $('body').addClass('no-scroll');
            $(".wrapper-gamburger").addClass('menu-hover');
        } else {
            $('.wrapper-menu').removeClass("active");
            $('body').removeClass('no-scroll');
            $(".wrapper-gamburger").removeClass('menu-hover');
            //это для ст контакты скрывает настройки при клике на гамбургер
            $('.wrapper-sidebar').removeClass("settings-open");
            $('.btn-settings').removeClass("active");
            $('.wraper-menusecond').removeClass("active");
            $('.third-level').removeClass("active");
            $('.logo-ic').removeClass("hide-img-logo");
            $('.link-back').removeClass("show-link-back");

        }
    });

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        $(".ic-m1").click(function () {

            var elem = this;
            var block = $(elem).closest('.link-menu');
            var ul = $(block).find('.wraper-menusecond');
            $(block).toggleClass("open");
            $(ul).addClass("active");
            $('.logo-ic').toggleClass("hide-img-logo");
            $('.link-back').toggleClass("show-link-back");
            $('.wrapper-menu').addClass("no-scroll");

        });

        $(".ic-m2").click(function () {
            var elem = this;
            var block = $(elem).closest('.second-ul');
            var ul = $(block).find('.third-level');
            $(block).toggleClass("open");
            $(ul).addClass("active");

        });
        $(".link-back").click(function () {

            if ( $('.third-level').hasClass("active") === true){
                const myElem = document.querySelectorAll(".third-level")
                for (let elem of myElem) {
                    $(elem).removeClass("active");
                }
            }
            else {
                $('.wraper-menusecond').removeClass("active");
                $('.logo-ic').toggleClass("hide-img-logo");
                $('.link-back').toggleClass("show-link-back");
                $('.wrapper-menu').removeClass("no-scroll");
            }
        });
    }
}



Host github.com
IdentityFile ~/.ssh/WebOriginals