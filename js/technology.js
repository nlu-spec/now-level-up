$(window).on("load", function () {

    // init controller
    var controller = new ScrollMagic.Controller({
        // addIndicators: true
    });


    var bodyStyles;
    var docHeight = $(window).height();
    $(".serv2-ban-box").css({
        "height": docHeight + "px",
    });
    var secOneHeight = $('.sectionOne').height() - $(window).height();

    bodyStyles = window.getComputedStyle(document.body);
    //var techbtmCont = bodyStyles.getPropertyValue('--techbtmCont');

    var x = $(".servsub-hdn2").height();
    // console.log(x);

    /* section 1 start */
    let timeline = new TimelineMax();
    timeline
        .to(".btm-cont", {
            y: -x,
            ease: Power1.easeOut,
        }, "0")
        .to(".servsub-hdn2", {
            opacity: 0,
            ease: Power1.easeOut,
        }, "0")
        .to(".servsub-hdn3", {
            opacity: 1,
            ease: Power1.easeOut,
        }, "0")
        .to(".dotTechOrbit", {
            rotation: 138,
        }, "<");



    // create a scene
    let scene = new ScrollMagic.Scene({
        triggerElement: ".sectionOne",
        triggerHook: 0,
        duration: secOneHeight + "px",
        offset: "0",
    })
        .setTween(timeline)
        // .setPin('.tech-one-sec')
        // .addIndicators({
        //     'name': '1'
        // })
        .addTo(controller);
    /* section 1 end */



    /* section 2 start */

    // setTimeout(() => {

    /* section 2 start */

    var dotTrvlDist = $(".desginTrigEnd").offset().top - $(".desginTrigStart").offset().top;
    // console.log(dotTrvlDist);

    var techLeft = bodyStyles.getPropertyValue('--techLeft');
    var techTop = bodyStyles.getPropertyValue('--techTop');
    // console.log(techTop, techLeft,techTop);

    let weOffer = new TimelineMax();
    weOffer
        .to('.dotTechOrbit', {
            duration: 2,
            top: techTop,
            left: techLeft
        }, 0)
        .to('.skuldot1', {
            duration: 1,
            css: {
                'top': '50%',
                'left': '50%',
                '-webkit-transform': 'translate(-50%,-50%)',
                'transform': 'translate(-50%,-50%)'
            }
        }, 0)
        .to('.skuldot2', {
            duration: 1,
            css: {
                'bottom': '50%',
                'right': '50%',
                '-webkit-transform': 'translate(50%,50%)',
                'transform': 'translate(50%,50%)'
            }
        }, 0)
        .to('.skuldot2', {
            duration: 0.01,
            css: {
                'opacity': 0,
            },
            ease: Linear.easeNone
        }, 1)
        .to('.skuldot1', {
            duration: 1,
            css: {
                'opacity': 0.5,
                'width': $('.weOffer-dot').width() + 'px',
                'height': $('.weOffer-dot').width() + 'px',
                '-webkit-transform': 'translate(-50%,-50%)',
                'transform': 'translate(-50%,-50%)'
            },
            ease: Linear.easeNone
        }, 1);

    // create a scene
    let offerScene = new ScrollMagic.Scene({
        triggerElement: ".desginTrigStart",
        triggerHook: 1,
        duration: dotTrvlDist,
        // offset: "0",
    })
        .on("update", function (e) {
            tlOfferDirection = e.target.controller().info("scrollDirection");
            // console.log(e);
        })
        .on("enter leave", function (e) {
            if (tlOfferDirection == 'FORWARD') {
                if (e.type == "enter") { }
            } else if (tlOfferDirection == 'REVERSE') { }
        })


        .setTween(weOffer)
        // .addIndicators({
        //     'name': '2'
        // })
        .addTo(controller);
    /* section 2 end */



    // }, 1000);


    var para1 = $(".tech-ban-cont .hdg6").height();
    var para2 = $(".servsub-hdn2").height();
    var para3 = $(".tech-ban-cont .servsub-hdn3").height();

    var para = (para1 + para3);

    // console.log(para2);


    $(".tech-ban-cont").css({
        "bottom": "-" + para2 + "px",
    });

    $(".tech-img-box").css({
        "position": "relative",
        "height": "calc(100% - " + para + "px)"
    });


});