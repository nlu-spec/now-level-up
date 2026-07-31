window.onbeforeunload = function () {
    if (window.location.host != "localhost:8080") {
        window.scrollTo(0, 0);
    }
};
var controllerMid, abContHt1, abContHt2, abContHt3, historySwiper;

function ready() {
    // console.log('ready');

    $(document).on('click', '#readMore', function () {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("readMore");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "more";

            // moreText.style.display = "none";
            moreText.style.cssText = "opacity: 0; visibility: hidden;height: 0;";

        } else {
            dots.style.display = "none";
            btnText.innerHTML = "less";
            // moreText.style.display = "inline";
            moreText.style.cssText = "opacity: 1; visibility: visible;height: auto;";
        }
    })

    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    controllerMid = new ScrollMagic.Controller();
    abContHt1 = $('#ab-vm-cont-1').outerHeight();
    abContHt2 = $('#ab-vm-cont-2').outerHeight();
    abContHt3 = $('#ab-vm-cont-3').outerHeight();


    $(document).on("click", ".vision-links", function () {
        $('.vision-links').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

        return false;
    });

    /* work Swiper */
    if ($('.history-swiper-container').length > 0) {
        historySwiper = new Swiper('.history-swiper-container', {
            slidesPerView: 1.3,
            speed: 1000,
            navigation: {
                nextEl: '.h-arrow-next',
                prevEl: '.h-arrow-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 1,
                },
            },
            // simulateTouch: false,

        });


        var totalSlideCount = historySwiper.slides.length;

        historySwiper.on('slideChangeTransitionStart', function () {
            var sldCnt = historySwiper.activeIndex;
            // console.log(totalSlideCount, sldCnt); 
            $('.h-pagin-cont-1').html('0' + ++sldCnt);
        });


        if ($(window).width() > 1024) {
            var lastSlide = false;
            historySwiper.on('reachEnd', function () {
                // console.log(totalSlideCount);
                lastSlide = true;
                $('.h-pagin-cont-1').html('0' + totalSlideCount);
            });
            $(document).on('click', '.h-arrow-prev', function () {
                if (lastSlide) {
                    lastSlide = false;
                    var sldCnt = totalSlideCount - 1;
                    $('.h-pagin-cont-1').html('0' + sldCnt);
                }
            });
        }
    }
};

function load() {
    // console.log('load');
    var abtVisionDirection, tlAbtBannerImg;
    
    // Re-calculate heights in case images loaded
    abContHt1 = $('#ab-vm-cont-1').outerHeight();
    abContHt2 = $('#ab-vm-cont-2').outerHeight();
    abContHt3 = $('#ab-vm-cont-3').outerHeight();

    if ($(window).width() > 800) {
        tlAbtBannerImg = gsap.timeline();
        tlAbtBannerImg
            .fromTo('.ab-ban-2', {
                autoAlpha: 0,
                x: 100,
                skewX: -30,
            }, {
                duration: 2,
                autoAlpha: 1,
                x: 0,
                skewX: 0,
                ease: "elastic.out(1, 0.6)"
            }, "<0.2")
            .fromTo('.ab-ban-4', {
                autoAlpha: 0,
                x: -100,
                skewX: 30,
            }, {
                duration: 2,
                autoAlpha: 1,
                x: 0,
                skewX: 0,
                ease: "elastic.out(1, 0.6)"
            }, "<0.3")
            .from('.about-banner--content h6', {
                duration: 0.5,
                autoAlpha: 0,
                top: '30px'
            }, "<0.3")
            .from('.about-banner--content h4', {
                duration: 0.5,
                autoAlpha: 0,
                top: '30px'
            }, "<0.1")

    } else {
        tlAbtBannerImg = gsap.timeline();
        tlAbtBannerImg
            .from('.about-banner--content h6', {
                duration: 0.5,
                autoAlpha: 0,
                top: '30px'
            }, 0)
            .from('.about-banner--content h4', {
                duration: 0.5,
                autoAlpha: 0,
                top: '30px'
            }, "<0.1")
            .fromTo('.ab-ban-2', {
                autoAlpha: 0,
                x: 100,
                skewX: -30,
            }, {
                duration: 2,
                autoAlpha: 1,
                x: 0,
                skewX: 0,
                ease: "elastic.out(1, 0.6)"
            }, "<0.2")
            .fromTo('.ab-ban-4', {
                autoAlpha: 0,
                x: -100,
                skewX: 30,
            }, {
                duration: 2,
                autoAlpha: 1,
                x: 0,
                skewX: 0,
                ease: "elastic.out(1, 0.6)"
            }, "<0.3")

    }
    
    if (document.querySelector('.abtBannerTrigger')) {
        new ScrollMagic.Scene({
                triggerElement: ".abtBannerTrigger",
                triggerHook: 0.2
            })
            .on('enter', function () {
                tlAbtBannerImg.timeScale(3).reverse();
            })
            .on('leave', function () {
                tlAbtBannerImg.timeScale(1).play();
            })
            .addTo(controllerMid);
    }


    new ScrollMagic.Scene({
            triggerElement: "#ab-vm-cont-1",
            triggerHook: 0.2,
            duration: abContHt1
        })
        .setClassToggle(".vision-link-1", "active")
        .on("update", function (e) {
            abtVisionDirection = e.target.controller().info("scrollDirection");
        })
        .on("leave", function (e) {
            if (abtVisionDirection == 'REVERSE') {
                $(".vision-link-1").addClass("active");
            }
        })
        .addTo(controllerMid);
        
    new ScrollMagic.Scene({
            triggerElement: "#ab-vm-cont-2",
            triggerHook: 0.2,
            duration: abContHt2
        })
        .setClassToggle(".vision-link-2", "active")
        .addTo(controllerMid);
        
    new ScrollMagic.Scene({
            triggerElement: "#ab-vm-cont-3",
            triggerHook: 0.2,
            duration: abContHt3
        })
        .setClassToggle(".vision-link-3", "active")
        .addTo(controllerMid);


    if ($('.history-cont-start').length > 0) {
        var controllerHor = new ScrollMagic.Controller({
            vertical: false
        });


        if ($(window).width() > 1024) {

            var $hTxt1Start;
            if ($(window).width() > 1600) {
                $hTxt1Start = -70;
                $hTxt2Start = -50;
                $hTxt1Mid = -140;
                $hTxt2Mid = -100;
                $hTxt1End = -70;
                $hTxt2End = -50;
            } else {
                $hTxt1Start = -70;
                $hTxt2Start = -50;
                $hTxt1Mid = -70;
                $hTxt2Mid = -50;
                $hTxt1End = -50;
                $hTxt2End = -40;
            }

            /* Timeline Start Starts */
            $hcontStart = ".history-cont-start .hist-det-box";
            $hcontStartTxt1 = ".history-cont-start h3";
            $hcontStartTxt2 = ".history-cont-start h4";
            var tlHistStart = gsap.timeline();
            tlHistStart
                .to($hcontStartTxt1, 1, {
                    marginLeft: $hTxt1Start
                }, 0)
                .to($hcontStartTxt2, 1, {
                    marginLeft: $hTxt2Start
                }, 0)

            new ScrollMagic.Scene({
                    triggerElement: ".hist-trigger-start",
                    triggerHook: 0,
                    duration: '100%',
                })
                .setTween(tlHistStart)
                .addTo(controllerHor);
            /* Timeline Start Ends */
            /* ------
            Timeline Middle Starts
            ----- */
            function histTweenFn(elem) {
                $hcontMid = $(elem).find(".hist-det-box");
                $hcontMidTxt1 = $(elem).find("h3");
                $hcontMidTxt2 = $(elem).find("h4");

                var histTween = gsap.timeline();
                histTween
                    .to($hcontMidTxt1, 1, {
                        marginLeft: $hTxt1Mid
                    }, 0)
                    .to($hcontMidTxt2, 1, {
                        marginLeft: $hTxt2Mid
                    }, 0)

                return histTween;
            };

            $('.history-cont-mid').each(function () {
                new ScrollMagic.Scene({
                        triggerElement: $(this).find(".hist-trigger-mid")[0],
                        triggerHook: 1,
                        duration: '140%',
                    })
                    .setTween(histTweenFn(this))
                    .addTo(controllerHor);
            });
            /* Timeline Middle Ends */
            /* Timeline End Starts */
            $hcontEnd = ".history-cont-end .hist-det-box";
            $hcontEndTxt1 = ".history-cont-end h3";
            $hcontEndTxt2 = ".history-cont-end h4";
            var tlHistEnd = gsap.timeline();
            tlHistEnd
                .to($hcontEndTxt1, 1, {
                    marginLeft: $hTxt1End
                }, 0)
                .to($hcontEndTxt2, 1, {
                    marginLeft: $hTxt2End
                }, 0)

            new ScrollMagic.Scene({
                    triggerElement: ".hist-trigger-end",
                    triggerHook: 1,
                    duration: '70%',
                })
                .setTween(tlHistEnd)
                .addTo(controllerHor);
            /* Timeline End Ends */

        }
    }
};
$.when(ready()).done(function () {
    $(window).on('load', function () {
        load();
    })
});