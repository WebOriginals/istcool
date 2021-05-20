@@include('lazy/closest.js')
@@include('lazy/blazy.min.js')

$( document ).ready(function() {
    // ленивая загрузка
    @@include('blazy.js')

    //component
    @@include('../component/Modals/js/modal.js')
    @@include('../component/Tabs/js/tabs.js')
    @@include('../component/dropDownLlist/js/dropDownList.js')
    @@include('../component/Quantity/js/quantity.js')
    // end component


    // sliders
    @@include('sliders/pageMain-firstScreen-sl.js')
    @@include('sliders/pageMain-popular-sl.js')
    @@include('sliders/pageMain-baner-sl.js')
    @@include('sliders/pageMain-news-sl.js')
    @@include('sliders/pageMain-articles-sl.js')
    @@include('sliders/pageMain-hit-sl.js')
    @@include('sliders/pageCardGood-sl.js')
    @@include('sliders/pageCardGood-also-buy.js')
    // end sliders


    @@include('btn-settings-mobile.js')

    //меню
    @@include('menu.js')
    @@include('sher.js')

})
