$('.sWeOfferTechnologyComponent').load('/content.html .sWeOfferTechnology', function () {
    /* ------
    Image Animation Starts
    ----- */
    var fadeServTweenController = new ScrollMagic.Controller();
    var bottomTriggerFadeServUp = 0.9;
    var fadeServInUpTime = 1;

    function fadeServTween(elem) {
        var fadeServTween = TweenMax.fromTo(elem, fadeServInUpTime, {
            autoAlpha: 0,
            y: 50
        }, {
            autoAlpha: 1,
            y: 0,
            delay: $(elem).attr('data-delay')
        });

        return fadeServTween;
    };
    $('.fadeServInUp').each(function () {

        new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: bottomTriggerFadeServUp
            })
            .setTween(fadeServTween(this))
            // .reverse(false)
            .addTo(fadeServTweenController);
    });

    /* Image Animation Ends */

});
$(window).on('load', function () {

    var controllerMid = new ScrollMagic.Controller();

    /* Service Detail Starts */
    var sectDetDuration = $('.sectDetRefHeight').height();
    var sectDetWidth = $('.sectDetRefElement').width();
    var bodyStyles = window.getComputedStyle(document.body);
    var servDetLeft = bodyStyles.getPropertyValue('--servDetLeft');
    var servDetTop;
    if ($(window).width() > 800) {
        servDetTop = $(window).height() / 2 + sectDetWidth + 50;
        sectDetTriggerHook = 1;
    } else if ($(window).width() > 641) {
        servDetTop = $('.serv-detail-section').offset().top;
        sectDetTriggerHook = 0;
    } else {
        servDetTop = $('.serv-detail-section').offset().top - 100;
        sectDetTriggerHook = 0;
    }

    var tlServDetail = gsap.timeline();
    tlServDetail
        .to('.serv-dot-ref-container', {
            duration: 2,
            width: sectDetWidth,
            height: sectDetWidth,
            top: servDetTop,
            left: servDetLeft,
            ease: Linear.easeNone
        }, 0)
        .to('.serv-dot-ref-1', {
            duration: 1,
            css: {
                'top': '50%',
                'left': '50%',
            }
        }, 0)
        .to('.serv-dot-ref-2', {
            duration: 1,
            css: {
                'top': '50%',
                'right': '50%',
            }
        }, 0)
        .to('.serv-dot-ref-2', {
            duration: 0.01,
            css: {
                'opacity': 0,
            },
            ease: Linear.easeNone
        }, 1)
        .to('.serv-dot-ref-1', {
            duration: 1,
            css: {
                'width': sectDetWidth,
                'height': sectDetWidth,

            },
            ease: Linear.easeNone
        }, 1)


    new ScrollMagic.Scene({
            triggerElement: ".serv-detail-trigger-pt",
            triggerHook: sectDetTriggerHook,
            duration: sectDetDuration
        })
        .setTween(tlServDetail)
        // .addIndicators({
        //     'name': 'Service Detail'
        // })
        .addTo(controllerMid);

    /* Service Detail Ends */
});