
$(".body-sher").click(function () {
    var elem = this;
    var block = $(elem).closest('.wr-sh');
    var text = $(block).find('.sher-text');
    var hover = $(block).find('.sher-hover');

    $(hover).addClass("active");
    $(text).addClass("active");
});

$(".sher-close").click(function () {
    var elem = this;
    var block = $(elem).closest('.wr-sh');
    var text = $(block).find('.sher-text');
    var hover = $(block).find('.sher-hover');

    $(hover).removeClass("active");
    $(text).removeClass("active");
});


