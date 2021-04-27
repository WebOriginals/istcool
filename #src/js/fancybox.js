if( $( '.fancybox-img' ).length ) {
    $().fancybox({
        selector : '.fancybox-img:visible',
        loop : true,
        thumbs   : {
            autoStart : true
        }
    });
};