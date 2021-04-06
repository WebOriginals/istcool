if( $( '.wrapper-btn-filter' ).length ) {
    $(".wrapper-btn-filter").click(function () {
        $('.body-saitbar').addClass("body-saitbar-open");
        $('body').addClass('no-scroll');
    });

    $(".close-btn-saitbar").click(function () {
        $('.body-saitbar').removeClass("body-saitbar-open");
        $('body').removeClass('no-scroll');
    });
}