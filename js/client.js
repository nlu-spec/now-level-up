$(window).on("load", function () {


    var clientSwiper = new Swiper('.client-user-swiper', {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        // effect: 'fade',
        autoHeight: true,
        // autoplay: true,
        simulateTouch: false,
        navigation: {
            nextEl: '.client-arrow-next',
            prevEl: '.client-arrow-prev',
        },
    });



    var windowWidth = $(".swiper-slide").width();

    /* $(".c-slide-1").css({
        "width": "1px",
        "height": "10px",
        "background": "#000",
        "margin-left": "10px",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)",
    }); */

    /* slider gsap animation start */
    // var custNamCont = $(".cust-nam-cont").height();
    // console.log(custNamCont);

    // let gsap = new TimelineMax();
    // clientSwiper.on('slideChange', function () {
    //     gsap.to('.client-nam h6', 0.7, {
    //         y: -custNamCont,
    //     })
    // });

    // clientSwiper.on('slideChangeTransitionEnd', function () {
    //     gsap.to('.client-nam h6', 0, {
    //             y: custNamCont,
    //         })
    //         .to('.client-nam h6', 0.7, {
    //             y: 0,
    //             autoAlpha: 1,
    //             // delay: .5,
    //         })
    // });

    // gsap.to('.swiper-slide-active', 0, {
    //         scale: 1,
    //     })
    //     .to('.swiper-slide', 0, {
    //         scale: .95,
    //     })
    /* slider gsap animation end */


    var a = 0;
    $(window).scroll(function () {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
            });
            a = 1;
        }

    });


});