@@include('lazy/closest.js')
@@include('lazy/blazy.min.js')

$( document ).ready(function() {
    // ленивая загрузка
    @@include('blazy.js')

    //component
    @@include('../component/Modals/js/modal.js')
    // end component


    // sliders
    @@include('sliders/pageMain-firstScreen-sl.js')
    @@include('sliders/pageMain-popular-sl.js')
    // end sliders


    //меню
    @@include('menu.js')

})
