if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    $(".helper-ic").click( function() {
        var helper = $(this).closest(".checkbox").find(".helper-body");
        $(helper).addClass("active");
        if($(helper).hasClass("active")){
            $( document ).unbind('mouseup.hrlper').bind('mouseup.hrlper', function(e){
                if( !$(helper).is(e.target) && $(helper).has(e.target).length === 0 ){
                    $( document ).unbind('mouseup.hrlper');
                    $(helper).removeClass("active");
                }
            });
        }
    });
    $(".helper-close").click( function() {
        $(this).closest(".checkbox").find(".helper-body").removeClass("active");
        $( document ).unbind('mouseup.hrlper');
    });
}