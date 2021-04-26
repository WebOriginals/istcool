// Polyfill for Element.closest that falls back to Element.matches that falls back to querySelectorAll
// Created for blazy.js 1.8.1 - https://github.com/dinbror/blazy to ensure IE7+ support


(function () {
    if (!Element.prototype.matches) {
    Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;            
        };
	}

	if (!Element.prototype.closest) {
		Element.prototype.closest = Element.prototype.closest ||
		function(selector) {
			var element = this;
	        while (element.matches && !element.matches(selector)) element = element.parentNode;
	        return element.matches ? element : null;
		};
	}
})();
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});

$( document ).ready(function() {
    // ленивая загрузка
    if( $( '.b-lazy' ).length ) {
    var bLazy = new Blazy({
        breakpoints: [{
            width: 420 // Max-width
            , src: 'data-src-small'
        }]
        , success: function (element) {
            setTimeout(function () {
                // We want to remove the loader gif now.
                // First we find the parent container
                // then we remove the "loading" class which holds the loader image
                var parent = element.parentNode;
                parent.className = parent.className.replace(/\bloading\b/, '');
            }, 200);
        }
    });
}

    //component
    const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

    if ($('.tabs').length) {
    let tab = function () {
        let AllBodyTabs = document.querySelectorAll('.tabs');

        AllBodyTabs.forEach(tab=> {

            let tabNav = tab.querySelectorAll('.tabs-nav__item'),
                tabContant = tab.querySelectorAll('.tab-pane'),
                tabName;

            let selectTabContant = function() {

                tabContant.forEach(item=>{
                    item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');
                })
            }

            tabNav.forEach(item => {
                item.addEventListener('click', function(){

                    tabNav.forEach(item=>{
                        item.classList.remove('is-active')
                    });

                    this.classList.add('is-active');
                    tabName = this.getAttribute('data-tab-name')
                    selectTabContant(tabName);
                })
            })
        });
    }
    tab();
};
    if( $( '.dropDownList-title' ).length ) {
    $(".dropDownList-title").click(function () {
        var elem = this;
        var block = $(elem).closest('.wrapper-dropDownList');
        var hidden = $(block).find('.dropDownList-hidden');
        $(hidden).slideToggle(parameters);
        $(elem).toggleClass("open");
    });
}
    if( $( '.card-info__quantity' ).length ) {
    function countFunc(count) {
        var btnPlus = count.querySelector('.card-info__plus');
        var btnMinus = count.querySelector('.card-info__minus');
        var field = count.querySelector('.card-info__number');
        var fieldValue = parseFloat(field.value, 10);//Прообразовываем к числу

        btnMinus.addEventListener('click', function () {
            if (fieldValue > 1) {
                fieldValue--;
                field.value = fieldValue;
            } else {
                return 1;
            }
        });
        btnPlus.addEventListener('click', function () {
            fieldValue++;
            field.value = fieldValue;
        });

    }

    var counts = document.querySelectorAll('.card-info__quantity');
    counts.forEach(countFunc);
}
    // end component


    // sliders
    if ($('.firstScreen-container').length) {
    var swiper = new Swiper('.firstScreen-container', {
        lazy: true,
        spaceBetween:15,
        pagination: {
            el: '.firstScreen-pagination',
            clickable: true,
        },

    });
};
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    if( $( '.popular-container' ).length ) {

        var swiper = new Swiper('.popular-container', {
            slidesPerView: 1.5,
            spaceBetween: 20,
            lazy: true,
            navigation: {
                nextEl: '.popular-button-next',
                prevEl: '.popular-button-prev',
            },
            breakpoints: {

                320: {
                    slidesPerView: 1.2,
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
    };
}
    if ($('.banner-container').length) {
    var banner = new Swiper('.banner-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        lazy: true,
        slideToClickedSlide: true,
        pagination: {
            el: '.banner-pagination',
        },
    });

};



    if( $( '.news-container' ).length ) {
    var swiper = new Swiper('.news-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        lazy: true,
        pagination: {
            el: '.news-pagination',
        },
        breakpoints: {

            320: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },

            600: {
                slidesPerView: 2.5,
            },


            990: {
                slidesPerView: 3,

            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 22,
            },
        }
    });
}
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    if( $( '.articles-container' ).length ) {
        var swiper = new Swiper('.articles-container', {
            slidesPerView: 1,
            spaceBetween: 15,
            lazy: true,
            pagination: {
                el: '.articles-pagination',
            },
            breakpoints: {

                320: {
                    slidesPerView: 1.2,
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
    }
}
    if ($('.hit-container').length) {
    var swiper = new Swiper('.hit-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        lazy: true,
        observer: true,
        observeSlideChildren: true,
        observeParents: true,

        breakpoints: {

            320: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },

            600: {
                slidesPerView: 2.5,
            },


            990: {
                slidesPerView: 3,

            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 22,
            },
        }
    });
}







    if( $( '.slider-little-container' ).length ) {
    var sliderLlittle = new Swiper('.slider-little-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        lazy: true,
        slideToClickedSlide:true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.little-button-next',
            prevEl: '.little-button-prev',
        },
        breakpoints: {
            300: {
                direction: 'horizontal',
                slidesPerView: 3,
            },

            1023: {
                direction: 'vertical',
                slidesPerView: 3,
                spaceBetween: 25,
            },
        }
    });


    var sliderLarge = new Swiper('.slider-large-container', {
        lazy: true,
        spaceBetween: 15,
        thumbs: {
            swiper: sliderLlittle
        }
    });

};



    // end sliders


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

    //меню
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



})
