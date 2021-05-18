$(".helper-ic").click(function () {

    var elem = this;
    var body = $(elem).closest('.checkbox');
    var text = $(body).find('.helper-body');

    $(text).addClass("active");
});

$(".helper-close").click(function () {

    var elem = this;
    var body = $(elem).closest('.checkbox');
    var text = $(body).find('.helper-body');

    $(text).removeClass("active");
});

