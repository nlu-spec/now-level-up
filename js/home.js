window.onbeforeunload = function () {
    if (window.location.host != "127.0.0.1" && window.location.host != "localhost:8080" && window.location.host != "localhost") {
        window.scrollTo(0, 0);
    }
};

/*
Lion Animation
Service Init
Service 1
Service 2
Service 3
Work
Expertise
Founder
Blog
Blog-End
Quote

*/

var anim2, anim2Trigger, animLion, animLionDir, controllerMid, levelUpLogoAnim;
var docHeight, bodyStyles, durationCommon, dotBoxLiWidth, lionAnimDuration, tlWorkEnter, tlWorkProgress, wrkTriggerEnd, tlExpertiseDirection;
var serviceAnim1, serviceAnim2, serviceAnim3;
var serviceAnim1Dark, serviceAnim2Dark, serviceAnim3Dark;
var blgWidth, blg1Left, blg1Top, blg2Left, blg2Top, blg3Left, blg3Top;
var blogTrigger, quoteTrigger;
var tlInitDot, tlServ1;
var hsServiceOpacity = 0.2;

function ready() {
    if ($(window).width() < 801) {
        if (document.querySelector(".clientSwiper")) {
            let clientSwiper = new Swiper(".clientSwiper", {
                slidesPerView: "auto",
                spaceBetween: 40,
                speed: 4000,
                loop: true,
                loopedSlides: 9,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
            });
        }
    }
    /* work Swiper */
    new Swiper(".work-swiper-container", {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
            480: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1.9,
                spaceBetween: 10,
            },
            840: {
                slidesPerView: 2.2,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
        },
    });

    /* work Swiper */
    new Swiper(".founder-swiper-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".founder-pagination",
            type: "bullets",
            clickable: true,
        },
    });

    /* mapAnim */
    lottie.loadAnimation({
        container: document.getElementById("mapCanvas"),
        path: "/json/map.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
    });

    lottie.loadAnimation({
        container: document.getElementById("mapCanvasDark"),
        path: "/json/map-dark.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
    });

    anim2 = lottie.loadAnimation({
        container: document.getElementById("whoWeAreCanvas"),
        path: "/json/h-section-2.json",
        renderer: "svg",
        loop: true,
        autoplay: false,
    });

    anim2Dark = lottie.loadAnimation({
        container: document.getElementById("whoWeAreCanvasDark"),
        path: "/json/h-section-2-dark.json",
        renderer: "svg",
        loop: true,
        autoplay: false,
    });

    anim2Trigger = false;

    controllerMid = new ScrollMagic.Controller();

    var windowInitWidth = $(window).width();
    $(window).resize(function () {
        if (windowInitWidth != $(window).width()) {
            if (window.location.host != "localhost:8080" && window.location.host != "localhost") {
                location.reload(true);
            }
        }
    });

    (docHeight = $(window).height()),
        (bodyStyles = window.getComputedStyle(document.body)),
        (durationCommon = bodyStyles.getPropertyValue("--durationCommon")),
        (dotBoxLiWidth = bodyStyles.getPropertyValue("--dotBoxLiWidth")),
        (lionAnimDuration = $(".lionAnimTriggerEnd").offset().top - $(".lionAnimTriggerStart").offset().top),
        (tlWorkEnter = false),
        (tlWorkProgress = 0),
        (wrkTriggerEnd = $(".workTriggerEnd").offset().top - $(".workTriggerStart").offset().top),
        (wwrAnimation = $(".wwr-animation").offset().top);
    animationSet = false;
    if ($(window).width() > 800) {
        serviceAnim1 = lottie.loadAnimation({
            container: document.getElementById("hs-service-1-canvas"),
            path: "/json/design.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });
        serviceAnim1Dark = lottie.loadAnimation({
            container: document.getElementById("hs-service-1-canvas-dark"),
            path: "/json/design-dark.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });

        serviceAnim2 = lottie.loadAnimation({
            container: document.getElementById("hs-service-2-canvas"),
            path: "/json/tech.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });
        serviceAnim2Dark = lottie.loadAnimation({
            container: document.getElementById("hs-service-2-canvas-dark"),
            path: "/json/tech-dark.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });

        serviceAnim3 = lottie.loadAnimation({
            container: document.getElementById("hs-service-3-canvas"),
            path: "/json/marketing.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });
        serviceAnim3Dark = lottie.loadAnimation({
            container: document.getElementById("hs-service-3-canvas-dark"),
            path: "/json/marketing-dark.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });

        $(".home-banner").css({
            height: docHeight,
        });
        $(".hs-service-1").css({
            height: docHeight * 1.2,
        });
        $(".hs-service").css({
            height: docHeight * 1.1,
        });
        $(".hs-trigger-1").css({
            top: docHeight * 1.2,
        });
        $(".hs-trigger-1-2").css({
            top: docHeight * 2.2,
        });
        $(".dots").css({
            top: docHeight * 0.3,
        });

        $(".tlServAnimContainer").css({
            height: docHeight,
        });
    } else {
        $.getScript("./js/link/particles.min.js", function () {
            particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 80,
                    },
                    color: {
                        value: "#FF5D7D",
                    },
                    opacity: {
                        value: 1,
                        random: false,
                    },
                    size: {
                        value: 3,
                        random: true,
                    },
                    move: {
                        enable: false,
                    },
                    line_linked: {
                        enable: false,
                    },
                },
                retina_detect: false,
            });
        });
    }
}

function initLevelUpLogoAnimation(logoId) {
    if (typeof lottie === "undefined") {
        return;
    }

    var logoContainer = document.getElementById(logoId);
    if (!logoContainer) {
        return;
    }

    logoContainer.innerHTML = "";
    levelUpLogoAnim = lottie.loadAnimation({
        container: logoContainer,
        path: "./json/now-level-up-anime.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
        },
    });

    if (levelUpLogoAnim && typeof levelUpLogoAnim.setSpeed === "function") {
        levelUpLogoAnim.setSpeed(1);
    }
}

function load() {
    // debugger;
    $(".lazy").Lazy();

    var hasCustomHeroLogo = document.getElementById("levelUpLottieCanvas") !== null;
    if (hasCustomHeroLogo) {
        initLevelUpLogoAnimation("levelUpLottieCanvas");
    } else {
        animLion = lottie.loadAnimation({
            container: document.getElementById("lionCanvas"),
            path: "/json/h-lion.json",
            renderer: "svg",
            loop: false,
            autoplay: true,
        });
        animLionDark = lottie.loadAnimation({
            container: document.getElementById("lionCanvasDark"),
            path: "/json/h-lion-dark.json",
            renderer: "svg",
            loop: false,
            autoplay: true,
        });
        animLionDir = 1;
        animLion.addEventListener("complete", function () {
            if (animLionDir == 1) {
                animLionDir = -1;
            } else {
                animLionDir = 1;
            }
            animLion.setDirection(animLionDir);
            animLion.pause();
            animLion.play();
            animLionDark.setDirection(animLionDir);
            animLionDark.pause();
            animLionDark.play();
        });
    }

    if ($(window).width() > 800) {
        /* Lion Animation Starts */
        function anim2Function() {
            if (!anim2Trigger) {
                anim2Trigger = true;
                anim2.play();
                anim2Dark.play();
            }
        }

        var tlLionAnim = gsap.timeline();
        tlLionAnim
            .to(
                $(".dotBox"),
                {
                    duration: 1,
                    "margin-left": "-25vw",
                    width: "50vw",
                    height: "50vw",
                    top: "150vh",
                    opacity: 1,
                    rotation: 180,
                },
                0
            )
            .to(
                $(".dotBox li"),
                {
                    duration: 1,
                    width: dotBoxLiWidth,
                    height: dotBoxLiWidth,
                },
                0
            )
            .to(
                $(".dot1"),
                {
                    duration: 1,
                    "margin-left": 0,
                    width: $(".wwa").width() + "px",
                    height: $(".wwa").width() + "px",
                    top: $(".wwa1").offset().top + "px",
                    left: $(".wwa1").offset().left + "px",
                    opacity: 1,
                },
                0
            )
            .to(
                $(".dot2"),
                {
                    duration: 1,
                    "margin-left": 0,
                    width: $(".wwa").width() + "px",
                    height: $(".wwa").width() + "px",
                    top: $(".wwa2").offset().top + "px",
                    left: $(".wwa2").offset().left + "px",
                    opacity: 1,
                },
                0
            )
            .to(
                $(".dot3"),
                {
                    duration: 1,
                    "margin-left": 0,
                    width: $(".wwa3").width() + "px",
                    height: $(".wwa3").width() + "px",
                    top: $(".wwa3").offset().top + "px",
                    left: $(".wwa3").offset().left + "px",
                    opacity: 0,
                },
                0
            )
            .set(".dots", {
                opacity: 0,
            })
            .set(".wwa1", {
                opacity: 1,
            })
            .set(".wwa2", {
                opacity: 1,
            })
            .to(
                ".deskHeader",
                {
                    duration: 0.01,
                    className: "deskHeader deskHeaderBtnAnim",
                },
                0.5
            )
            .to(
                ".scroll_Down_box",
                {
                    duration: 0.01,
                    className: "scroll_Down_box remove",
                },
                0
            )
            .call(anim2Function)
            .to(
                $(".dotBox"),
                {
                    duration: 1,
                    opacity: 0,
                },
                "-=0.5"
            );

        new ScrollMagic.Scene({
            triggerElement: ".lionAnimTriggerStart",
            triggerHook: 0.5,
            duration: lionAnimDuration,
        })
            .setTween(tlLionAnim)
            .addTo(controllerMid);
        /* Lion Animation Ends */

        /* Service Init trigger Starts */
        var tlServInit = gsap.timeline();
        tlServInit
            .to(
                ".dots",
                {
                    duration: 0.01,
                    opacity: 1,
                },
                0
            )
            .to(
                ".wwa",
                {
                    duration: 0.01,
                    opacity: 0,
                },
                0
            )
            .to(
                $(".dot1"),
                {
                    duration: 1,
                    top: $(".hsdot-1").offset().top + "px",
                    left: $(".hsdot-1").offset().left + "px",
                    width: $(".hsdot-1").width() + "px",
                    height: $(".hsdot-1").width() + "px",
                },
                0
            )
            .to(
                $(".dot2"),
                {
                    duration: 1,
                    top: $(".hsdot-2").offset().top,
                    left: $(".hsdot-2").offset().left + "px",
                    width: $(".hsdot-1").width() + "px",
                    height: $(".hsdot-1").width() + "px",
                },
                0
            )
            .to(
                $(".dot3"),
                {
                    duration: 1,
                    top: $(".hsdot-3").offset().top + "px",
                    left: $(".hsdot-3").offset().left + "px",
                    width: $(".hsdot-1").width() + "px",
                    height: $(".hsdot-1").width() + "px",
                },
                0
            )
            .to(".hsdot", {
                duration: 0.01,
                opacity: 1,
            })
            .to(".dots", {
                duration: 0.01,
                opacity: 0,
            });

        new ScrollMagic.Scene({
            triggerElement: ".hs-service-1",
            triggerHook: 0.8,
            duration: docHeight / 3,
        })
            .setTween(tlServInit)
            .addTo(controllerMid);
        /* Service Init trigger Ends */

        var tlServBounce = gsap.timeline({
            paused: true,
        });
        tlServBounce
            .to(".hs-img-box", {
                duration: 0.2,
                scale: 1.1,
            })
            .to(".hs-img-box", {
                duration: 0.2,
                scale: 0.9,
            })
            .to(".hs-img-box", {
                duration: 0.2,
                scale: 1,
            });

        /* line timeline 1 starts */
        var tlhsImgActive01 = gsap.timeline({
            paused: true,
        });
        tlhsImgActive01
            .to(".hs-img-box-up .hs-line", {
                duration: 1,
                ease: Power4.easeInOut,
                css: {
                    opacity: 1,
                    "margin-top": "-4px",
                    width: "65%",
                    height: " 84%",
                    "-webkit-transform": "translate(-50%, -50%) rotate(0deg)",
                    transform: "translate(-50%, -50%) rotate(0deg)",
                },
            })
            .to(
                ".hs-img-box-up .hs-ellipse",
                {
                    duration: 1,
                    ease: Power4.easeInOut,
                    css: {
                        opacity: 1,
                        width: "var(--hs-ellipse-width-1)",
                        height: "var(--hs-ellipse-width-1)",
                        "margin-left": "calc(-1 * var(--hs-ellipse-width-1) / 2)",
                        "margin-top": "calc(-1 * var(--hs-ellipse-width-1) / 2)",
                    },
                },
                0.1
            );

        /* line timeline 1 Ends */
        /* line timeline 2 starts */
        var tlhsImgActive02 = gsap.timeline({
            paused: true,
        });
        tlhsImgActive02
            .to(".hs-img-box-up .hs-line", {
                duration: 0.3,
                ease: Power4.easeInOut,
                css: {
                    "margin-top": "-5px",
                    width: "50%",
                    height: "50%",
                    "-webkit-transform": "translate(-50%, -50%) rotate(0deg)",
                    transform: "translate(-50%, -50%) rotate(0deg)",
                },
            })
            .to(".hs-img-box-up .hs-line", {
                duration: 0.3,
                ease: Power4.easeInOut,
                css: {
                    "margin-top": "-5px",
                    width: "50%",
                    height: "50%",
                    "-webkit-transform": "translate(-50%, -50%) rotate(90deg)",
                    transform: "translate(-50%, -50%) rotate(90deg)",
                },
            })
            .to(".hs-img-box-up .hs-line", {
                duration: 0.3,
                ease: Power4.easeInOut,
                css: {
                    "margin-top": "-5px",
                    "-webkit-transform": " translate(-50%, -50%) rotate(90deg)",
                    transform: " translate(-50%, -50%) rotate(90deg)",
                    width: "50%",
                    height: "72%",
                },
            });
        /* line timeline 2 Ends */
        /* line timeline 3 starts */
        var tlhsImgActive03 = gsap.timeline({
            paused: true,
        });
        tlhsImgActive03
            .to(".hs-img-box-up .hs-line", {
                duration: 0.3,
                ease: Power4.easeInOut,
                css: {
                    "margin-top": "-10px",
                    width: "50%",
                    height: "50%",
                    "-webkit-transform": "translate(-50%, -50%) rotate(90deg)",
                    transform: "translate(-50%, -50%) rotate(90deg)",
                },
            })
            .to(".hs-img-box-up .hs-line", {
                duration: 0.3,
                ease: Power4.easeInOut,
                css: {
                    "margin-top": "-15px",
                    width: "50%",
                    height: "50%",
                    "-webkit-transform": "translate(-50%, -50%) rotate(180deg)",
                    transform: "translate(-50%, -50%) rotate(180deg)",
                },
            })
            .to(".hs-img-box-up .hs-line", {
                duration: 0.3,
                ease: Power4.easeInOut,
                css: {
                    "margin-top": "-15px",
                    width: "72%",
                    height: "86%",
                    "-webkit-transform": "translate(-50%, -50%) rotate(180deg)",
                    transform: "translate(-50%, -50%) rotate(180deg)",
                },
            });
        /* line timeline 3 Ends */

        /* Service 1 trigger Starts */
        tlServ1 = gsap.timeline();
        tlServ1
            .to(".hsTrigBtn", {
                duration: 0.2,
                opacity: 0,
                y: 50,
            })
            .staggerFrom(".h-serv-ul-dummy", 0.8, {
                autoAlpha: 0,
            });

        new ScrollMagic.Scene({
            triggerElement: ".hs-service-1",
            triggerHook: 0.12,
        })
            .on("enter leave", function (e) {
                if (e.type == "enter") {
                    tlhsImgActive01.play();

                    TweenMax.staggerTo(
                        ".h-serv-ul-1 li",
                        0.35,
                        {
                            autoAlpha: 1,
                            marginLeft: 0,
                        },
                        0.1
                    );

                    gsap.to(".hs-1-img", {
                        duration: 0.2,
                        opacity: 1,
                    });
                    serviceAnim1.setDirection(1);
                    serviceAnim1.setSpeed(1);
                    serviceAnim1.play();
                    serviceAnim1Dark.setDirection(1);
                    serviceAnim1Dark.setSpeed(1);
                    serviceAnim1Dark.play();
                } else if (e.type == "leave") {
                    tlhsImgActive01.reverse();
                    TweenMax.staggerTo(
                        ".h-serv-ul-1 li",
                        0.35,
                        {
                            autoAlpha: 0,
                            marginLeft: -50,
                        },
                        0.1
                    );
                    serviceAnim1.setDirection(-1);
                    serviceAnim1.setSpeed(3);
                    serviceAnim1.play();
                    serviceAnim1Dark.setDirection(-1);
                    serviceAnim1Dark.setSpeed(3);
                    serviceAnim1Dark.play();
                }
            })
            .setTween(tlServ1)
            .addTo(controllerMid);
        /* Service 1 trigger Ends */

        /* Service 2 trigger Starts */
        var tlServ2 = gsap.timeline();
        tlServ2
            .to(
                ".hs-img",
                {
                    duration: 0.2,
                    opacity: 0,
                },
                0
            )
            .to(
                ".hs-2-img",
                {
                    duration: 0.2,
                    opacity: 1,
                },
                0
            );

        new ScrollMagic.Scene({
            triggerElement: ".hs-service-2",
            triggerHook: 0.12,
        })
            .on("enter leave", function (e) {
                if (e.type == "enter") {
                    tlhsImgActive02.play();
                    TweenMax.staggerTo(
                        ".h-serv-ul-2 li",
                        0.35,
                        {
                            autoAlpha: 1,
                            marginLeft: 0,
                        },
                        0.1
                    );

                    tlServBounce.restart();

                    serviceAnim2.goToAndStop(0, true);
                    serviceAnim2.play();
                    serviceAnim2Dark.goToAndStop(0, true);
                    serviceAnim2Dark.play();
                } else if (e.type == "leave") {
                    tlhsImgActive02.reverse();
                    TweenMax.staggerTo(
                        ".h-serv-ul-2 li",
                        0.35,
                        {
                            autoAlpha: 0,
                            marginLeft: -50,
                        },
                        0.1
                    );

                    tlServBounce.restart();

                    serviceAnim1.goToAndStop(0, true);
                    serviceAnim1.play();
                    serviceAnim1Dark.goToAndStop(0, true);
                    serviceAnim1Dark.play();
                }
            })
            .setTween(tlServ2)
            .addTo(controllerMid);
        /* Service 2 trigger Ends */

        /* Service 3 trigger Starts */
        var tlServ3 = gsap.timeline();
        tlServ3
            .to(
                ".hs-img",
                {
                    duration: 0.2,
                    opacity: 0,
                },
                0
            )
            .to(
                ".hs-3-img",
                {
                    duration: 0.2,
                    opacity: 1,
                },
                0
            );

        new ScrollMagic.Scene({
            triggerElement: ".hs-service-3",
            triggerHook: 0.12,
        })
            .on("enter leave", function (e) {
                if (e.type == "enter") {
                    tlhsImgActive03.play();
                    TweenMax.staggerTo(
                        ".h-serv-ul-3 li",
                        0.35,
                        {
                            autoAlpha: 1,
                            marginLeft: 0,
                        },
                        0.1
                    );

                    tlServBounce.restart();

                    serviceAnim3.goToAndStop(0, true);
                    serviceAnim3.play();
                    serviceAnim3Dark.goToAndStop(0, true);
                    serviceAnim3Dark.play();
                } else if (e.type == "leave") {
                    tlhsImgActive03.reverse();
                    TweenMax.staggerTo(
                        ".h-serv-ul-3 li",
                        0.35,
                        {
                            autoAlpha: 0,
                            marginLeft: -50,
                        },
                        0.1
                    );

                    tlServBounce.restart();

                    serviceAnim2.goToAndStop(0, true);
                    serviceAnim2.play();
                    serviceAnim2Dark.goToAndStop(0, true);
                    serviceAnim2Dark.play();
                }
            })
            .setTween(tlServ3)
            .addTo(controllerMid);
        /* Service 3 trigger Ends */

        var hsServiceImgHeight = $(".hs-service-in").height();

        /* Work Starts */
        var tlWorkAnim = gsap.timeline();
        tlWorkAnim
            .to(
                ".dot4",
                {
                    duration: 1,
                    opacity: 1,
                    top: $(".h-work-pt-1").offset().top + "px",
                    left: $(".h-work-pt-1").offset().left + "px",
                },
                0
            )
            .to(
                ".dot6",
                {
                    duration: 1,
                    opacity: 1,
                    top: $(".h-work-pt-2").offset().top + "px",
                    left: $(".h-work-pt-2").offset().left + "px",
                },
                0
            )
            .to(
                ".dot5",
                {
                    duration: 1,
                    opacity: 1,
                    top: $(".h-work-pt-3").offset().top + "px",
                    left: $(".h-work-pt-3").offset().left + "px",
                },
                0
            );

        new ScrollMagic.Scene({
            triggerElement: ".workTriggerStart",
            triggerHook: 0.2,
            duration: wrkTriggerEnd,
        })
            .on("update", function (e) {
                if (e.target.controller().info("scrollDirection") == "REVERSE" && tlWorkEnter) {
                    $(".h-work").removeClass("active");
                    $(".h-work").removeClass("active3");
                }
                if (e.target.controller().info("scrollDirection") == "REVERSE" && tlWorkProgress == 0) {
                    $(".h-work").removeClass("active");
                    $(".hsdot-3a").css({
                        backgroundColor: "var(--clr3)",
                    });
                    $(".dot4").css({
                        opacity: 0,
                    });
                    $(".dot5").css({
                        opacity: 0,
                    });
                    $(".dot6").css({
                        opacity: 0,
                    });
                }
            })
            .on("progress", function (e) {
                tlWorkProgress = e.progress;
            })
            .on("enter leave", function (e) {
                if (e.type == "enter") {
                    tlWorkEnter = true;
                    $(".hsdot-3a").css({
                        backgroundColor: "transparent",
                    });
                    $(".dot4").css({
                        opacity: 1,
                        top: $(".hsdot-3a").offset().top - 350,
                        left: $(".hsdot-3a").offset().left,
                        width: $(".hsdot-1").width() + "px",
                        height: $(".hsdot-1").width() + "px",
                    });
                    $(".dot5").css({
                        opacity: 1,
                        top: $(".hsdot-3a").offset().top - 300,
                        left: $(".hsdot-3a").offset().left,
                        width: $(".hsdot-1").width() + "px",
                        height: $(".hsdot-1").width() + "px",
                    });
                    $(".dot6").css({
                        opacity: 1,
                        top: $(".hsdot-3a").offset().top,
                        left: $(".hsdot-3a").offset().left,
                        width: $(".hsdot-1").width() + "px",
                        height: $(".hsdot-1").width() + "px",
                    });
                } else {
                    tlWorkEnter = false;
                    $(".h-work").addClass("active");
                }
            })
            .setTween(tlWorkAnim)
            .addTo(controllerMid);
        /* Work Ends */

        /* Expertise Starts */
        var buildExpertiseTl = function () {
            var tl = gsap.timeline();
            tl.to(
                ".dot4",
                {
                    duration: 1,
                    opacity: 1,
                    width: $(".exp").width() + "px",
                    height: $(".exp").width() + "px",
                    top: $(".exp1").offset().top + "px",
                    left: $(".exp1").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
                .to(
                    ".dot6",
                    {
                        duration: 1,
                        opacity: 1,
                        width: $(".exp").width() + "px",
                        height: $(".exp").width() + "px",
                        top: $(".exp2").offset().top + "px",
                        left: $(".exp2").offset().left + "px",
                        ease: Linear.easeNone,
                    },
                    0
                )
                .to(
                    ".dot5",
                    {
                        duration: 1,
                        opacity: 1,
                        width: $(".exp").width() + "px",
                        height: $(".exp").width() + "px",
                        top: $(".exp3").offset().top + "px",
                        left: $(".exp3").offset().left + "px",
                        ease: Linear.easeNone,
                    },
                    0
                );
            return tl;
        };
        var tlExpertise = buildExpertiseTl();

        var expertiseScene = new ScrollMagic.Scene({
            triggerElement: ".h-work-btn",
            triggerHook: 0.4,
            duration: 0.3 * docHeight,
            // reverse: false
        })
            .on("update", function (e) {
                tlExpertiseDirection = e.target.controller().info("scrollDirection");
            })
            .on("enter leave", function (e) {
                if (tlExpertiseDirection == "FORWARD") {
                    if (e.type == "enter") {
                        $(".h-work").addClass("active2");
                        $(".h-work").removeClass("active3");
                        $(".dot4").css({
                            left: $(".h-work-pt-end-1").offset().left + "px",
                            top: $(".h-work-pt-end-1").offset().top + "px",
                        });
                        $(".dot6").css({
                            left: $(".h-work-pt-end-2").offset().left + "px",
                            top: $(".h-work-pt-end-2").offset().top + "px",
                        });
                        $(".dot5").css({
                            left: $(".h-work-pt-end-3").offset().left + "px",
                            top: $(".h-work-pt-end-3").offset().top + "px",
                        });
                    }
                } else if (tlExpertiseDirection == "REVERSE") {
                    if (e.type == "leave") {
                        $(".h-work").removeClass("active2");
                        $(".h-work").addClass("active3");
                        $(".dot4").css({
                            opacity: 0,
                        });
                        $(".dot5").css({
                            opacity: 0,
                        });
                        $(".dot6").css({
                            opacity: 0,
                        });
                    }
                }
            })
            .setTween(tlExpertise)
            .addTo(controllerMid);

        /* Fix: dot4/dot5/dot6 were landing off the map's dashed exp1/exp2/exp3
           markers because their .offset() is captured here before the map's
           Lottie SVG (and web fonts) finish loading and settling the layout.
           Once things settle, rebuild the tween from fresh offsets and keep
           the scene's trigger position in sync via .refresh() -- same pattern
           this file already uses for blogTrigger/quoteTrigger. Only do this
           while the scene hasn't been scrolled into yet, so we never yank the
           dots away from a user who already scrolled past. */
        var resyncExpertiseDots = function () {
            if (expertiseScene.state() !== "BEFORE") {
                return;
            }
            tlExpertise = buildExpertiseTl();
            expertiseScene.setTween(tlExpertise);
            expertiseScene.refresh();
        };
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(resyncExpertiseDots);
        }
        window.setTimeout(resyncExpertiseDots, 1000);
        /* Expertise Ends */

        /* Founder Starts */
        var fndrWidth = $(".fndr").width() + "px",
            fndr1Left = $(".fndr1").offset().left + "px",
            fndr1Top = $(".fndr1").offset().top + "px",
            fndr2Left = $(".fndr2").offset().left + "px",
            fndr2Top = $(".fndr2").offset().top + "px",
            fndr3Left = $(".fndr3").offset().left + "px",
            fndr3Top = $(".fndr3").offset().top + "px",
            fndrDuration = $(".founderTriggerEnd").offset().top - $(".founderTriggerStart").offset().top;

        var tlfndr = gsap.timeline();
        tlfndr
            .to(
                ".dot4",
                {
                    duration: 0.4,
                    opacity: 1,
                    width: fndrWidth,
                    height: fndrWidth,
                    top: fndr1Top,
                    left: fndr1Left,
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot6",
                {
                    duration: 0.4,
                    opacity: 1,
                    width: fndrWidth,
                    height: fndrWidth,
                    top: fndr2Top,
                    left: fndr2Left,
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot5",
                {
                    duration: 0.4,
                    opacity: 1,
                    width: fndrWidth,
                    height: fndrWidth,
                    top: fndr3Top,
                    left: fndr3Left,
                    ease: Linear.easeNone,
                },
                0
            );

        new ScrollMagic.Scene({
            triggerElement: ".founderTriggerStart",
            triggerHook: 0.1,
            duration: fndrDuration,
        })
            .setTween(tlfndr)
            .addTo(controllerMid);
        /* Founder Ends */

        /* Blog Starts */
        blogDuration = 400;
        var tlblog = gsap.timeline();
        tlblog
            .to(
                ".dot4",
                {
                    duration: 1,
                    width: $(".blg").width() + "px",
                    height: $(".blg").width() + "px",
                    top: $(".blg1").offset().top + "px",
                    left: $(".blg1").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot5",
                {
                    duration: 1,
                    width: $(".blg").width() + "px",
                    height: $(".blg").width() + "px",
                    top: $(".blg2").offset().top + "px",
                    left: $(".blg2").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot6",
                {
                    duration: 1,
                    width: $(".blg").width() + "px",
                    height: $(".blg").width() + "px",
                    top: $(".blg3").offset().top + "px",
                    left: $(".blg3").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            );

        blogTrigger = new ScrollMagic.Scene({
            triggerElement: ".blogTriggerStart",
            triggerHook: 0.2,
            duration: blogDuration,
        })
            .setTween(tlblog)
            .addTo(controllerMid);
        /* Blog Ends */

        /* Blog-End Starts */
        var tlblogEnd = gsap.timeline();
        tlblogEnd
            .to(
                ".dot4",
                {
                    duration: 1,
                    width: $(".blgEndPt").width() + "px",
                    height: $(".blgEndPt").width() + "px",
                    top: $(".blgEndPt1").offset().top + "px",
                    left: $(".blgEndPt1").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot6",
                {
                    duration: 1,
                    width: $(".blgEndPt").width() + "px",
                    height: $(".blgEndPt").width() + "px",
                    top: $(".blgEndPt2").offset().top + "px",
                    left: $(".blgEndPt2").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot5",
                {
                    duration: 1,
                    width: $(".blgEndPt").width() + "px",
                    height: $(".blgEndPt").width() + "px",
                    top: $(".blgEndPt3").offset().top + "px",
                    left: $(".blgEndPt3").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
            .to(".blogEndPts", {
                duration: 0.01,
                autoAlpha: 1,
            })
            .to(".dot4", {
                duration: 0.01,
                autoAlpha: 0,
            })
            .to(".dot5", {
                duration: 0.01,
                autoAlpha: 0,
            })
            .to(".dot6", {
                duration: 0.01,
                autoAlpha: 0,
            });

        // Add this after building the timeline:
        tlblogEnd.eventCallback("onStart", function () {
            console.log("tlblog started");
        });

        quoteTrigger = new ScrollMagic.Scene({
            triggerElement: ".quoteTriggerUp",
            triggerHook: 0.4,
            duration: durationCommon,
        })
            .setTween(tlblogEnd)
            .addTo(controllerMid);

        // Add this after adding to controller:
        quoteTrigger.on("start", function (event) {
            console.log("blogTrigger scene started", event);
        });
        quoteTrigger.on("enter", function (e) {
            gsap.to([".blg1", ".blg2", ".blg3"], { duration: 0.3, autoAlpha: 0, overwrite: true });
        });
        quoteTrigger.on("leave", function (e) {
            gsap.to([".blg1", ".blg2", ".blg3"], { duration: 0.3, autoAlpha: 1, overwrite: true });
        });
        /* Blog-End Ends */

        /* Quote Starts */
        function generateFunction() {
            $(".h-quote-box").toggleClass("generate");
        }

        var tlQuote = gsap.timeline();
        tlQuote
            .to(
                ".blgEndPt1",
                {
                    duration: 0.3,
                    left: "50%",
                    marginLeft: (-1 * $(".blgEndPt").width()) / 2 + "px",
                    ease: Power2.easeInOut,
                },
                0
            )
            .to(
                ".blgEndPt3",
                {
                    duration: 0.3,
                    right: "50%",
                    marginRight: (-1 * $(".blgEndPt").width()) / 2 + "px",
                    ease: Power2.easeInOut,
                },
                0
            );

        new ScrollMagic.Scene({
            triggerElement: ".quoteMergeTrigger",
            triggerHook: 0.4,
        })
            .on("enter", function (e) {
                setTimeout(() => {
                    $(".h-quote-box").addClass("generate");
                }, 100);
            })
            .on("leave", function (e) {
                $(".h-quote-box").removeClass("generate");
            })
            .setTween(tlQuote)
            .addTo(controllerMid);
        /* Quote Ends */
    } else {
        /* Lion Animation Starts */
        function anim2Function() {
            if (!anim2Trigger) {
                anim2Trigger = true;
                anim2.play();
                anim2Dark.play();
            }
        }

        var tlLionAnim = gsap.timeline();
        tlLionAnim
            .set(".dots", {
                opacity: 0,
            })
            .to(
                $(".dotBox"),
                {
                    duration: 1,
                    width: "50vw",
                    height: "50vw",
                    top: "150vh",
                    opacity: 1,
                    rotation: 180,
                },
                0
            )
            .to(
                $(".dotBox li"),
                {
                    duration: 1,
                    width: dotBoxLiWidth,
                    height: dotBoxLiWidth,
                },
                0
            )
            .to(
                $(".dot1"),
                {
                    duration: 1,
                    "margin-left": 0,
                    width: $(".wwa").width() + "px",
                    height: $(".wwa").width() + "px",
                    top: $(".wwa1").offset().top + "px",
                    left: $(".wwa1").offset().left + "px",
                    opacity: 1,
                },
                0
            )
            .to(
                $(".dot2"),
                {
                    duration: 1,
                    "margin-left": 0,
                    width: $(".wwa").width() + "px",
                    height: $(".wwa").width() + "px",
                    top: $(".wwa2").offset().top + "px",
                    left: $(".wwa2").offset().left + "px",
                    opacity: 1,
                },
                0
            )
            .to(
                $(".dot3"),
                {
                    duration: 1,
                    "margin-left": 0,
                    width: $(".wwa3").width() + "px",
                    height: $(".wwa3").width() + "px",
                    top: $(".wwa3").offset().top + "px",
                    left: $(".wwa3").offset().left + "px",
                    opacity: 0,
                },
                0
            )
            .set(".wwa1", {
                opacity: 1,
            })
            .set(".wwa2", {
                opacity: 1,
            })
            .call(anim2Function)
            .to(
                $(".dotBox"),
                {
                    duration: 1,
                    opacity: 0,
                },
                "-=0.5"
            );

        new ScrollMagic.Scene({
            triggerElement: ".lionAnimTriggerStart",
            triggerHook: 0.5,
            duration: lionAnimDuration,
        })
            .setTween(tlLionAnim)
            .addTo(controllerMid);
        /* Lion Animation Ends */

        // SERIVCE STARTs

        /* Service Init trigger Starts */
        var tlServInit = gsap.timeline();
        tlServInit
            .to(
                ".dots",
                {
                    duration: 0.01,
                    opacity: 1,
                },
                0
            )
            .to(
                ".wwa",
                {
                    duration: 0.01,
                    opacity: 0,
                },
                0
            )
            .to(
                $(".dot1"),
                {
                    duration: 1,
                    top: $(".hsdot-1").offset().top + "px",
                    left: $(".hsdot-1").offset().left + "px",
                    width: $(".hsdot-1").width() + "px",
                    height: $(".hsdot-1").width() + "px",
                },
                0
            )
            .to(
                $(".dot2"),
                {
                    duration: 1,
                    top: $(".hsdot-2").offset().top,
                    left: $(".hsdot-2").offset().left + "px",
                    width: $(".hsdot-1").width() + "px",
                    height: $(".hsdot-1").width() + "px",
                },
                0
            )
            .to(
                $(".dot3"),
                {
                    duration: 1,
                    top: $(".hsdot-3").offset().top + "px",
                    left: $(".hsdot-3").offset().left + "px",
                    width: $(".hsdot-1").width() + "px",
                    height: $(".hsdot-1").width() + "px",
                },
                0
            )
            .to(".hsdot", {
                duration: 0.01,
                opacity: 1,
            })
            .to(".dots", {
                duration: 0.01,
                opacity: 0,
            });

        new ScrollMagic.Scene({
            triggerElement: ".hs-service-1",
            triggerHook: 0.8,
            duration: docHeight / 3,
        })
            .setTween(tlServInit)
            .addTo(controllerMid);
        /* Service Init trigger Ends */

        /* Mob Quotation Button Starts */
        new ScrollMagic.Scene({
            triggerElement: ".mob-quote-btn-trigger",
            triggerHook: 1,
        })
            .on("start", function () {
                $(".mob-quote-btn").toggleClass("in");
            })
            .addTo(controllerMid);
        /* Mob Quotation Button Ends */

        var serviceAnimMob1 = lottie.loadAnimation({
            container: document.getElementById("hs-service-1-mob-canvas"),
            path: "/json/design.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });
        var serviceAnimMob1Dark = lottie.loadAnimation({
            container: document.getElementById("hs-service-1-mob-canvas-dark"),
            path: "/json/design-dark.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });

        var serviceAnimMob2 = lottie.loadAnimation({
            container: document.getElementById("hs-service-2-mob-canvas"),
            path: "/json/tech.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });
        var serviceAnimMob2Dark = lottie.loadAnimation({
            container: document.getElementById("hs-service-2-mob-canvas-dark"),
            path: "/json/tech-dark.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });

        var serviceAnimMob3 = lottie.loadAnimation({
            container: document.getElementById("hs-service-3-mob-canvas"),
            path: "/json/marketing.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });
        var serviceAnimMob3Dark = lottie.loadAnimation({
            container: document.getElementById("hs-service-3-mob-canvas-dark"),
            path: "/json/marketing-dark.json",
            renderer: "svg",
            loop: false,
            autoplay: false,
        });

        /* ------
        hb-right Starts
        ----- */
        var scrollDownMobTween = gsap.timeline();
        scrollDownMobTween.to(
            ".scroll_Down_box",
            {
                duration: 0.01,
                className: "scroll_Down_box remove",
            },
            0
        );

        new ScrollMagic.Scene({
            triggerElement: ".hb-right",
            triggerHook: 1,
            // reverse: false
        })
            .setTween(scrollDownMobTween)
            // .addIndicators({
            //     'name': 'Scroll Down'
            // })
            .addTo(controllerMid);
        /* hb-right Ends */

        /* ------
        Service trigger Starts
        ----- */
        $(".hs-service-mob").each(function () {
            function servStaggerUlTween(elem) {
                var servHdn = $(elem).find("b");
                var lis = $(elem).find("li");

                var tlHsServMob = gsap.timeline();
                tlHsServMob
                    // .to(servHdn, {
                    //     duration: 0.2,
                    //     // color: '#d4d4d4',
                    //     opacity: hsServiceOpacity
                    // }, 0)
                    .staggerTo(
                        lis,
                        0.25,
                        {
                            autoAlpha: 1,
                            marginLeft: 0,
                        },
                        0.1
                    );
                return tlHsServMob;
            }
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.8,
                // reverse: false
            })
                .setTween(servStaggerUlTween(this))
                // .addIndicators({
                //     'name': 'Service 1'
                // })
                .addTo(controllerMid);
        });
        /* Service trigger Ends */

        /* Service 1 trigger Starts */
        tlServ1 = gsap.timeline();
        tlServ1
            .to(".hsTrigBtn", {
                duration: 0.2,
                opacity: 0,
                y: 50,
            })
            // .to('.hs-service-1 h4 b', {
            //     duration: 0.2,
            //     // color: '#d4d4d4',
            //     opacity: hsServiceOpacity
            // }, 0)
            .staggerFrom(".h-serv-ul-dummy", 0.8, {
                autoAlpha: 0,
            });

        new ScrollMagic.Scene({
            triggerElement: ".hs-service-trigger-1",
            triggerHook: 0.2,
            // reverse: false
        })
            .on("enter", function (e) {
                // console.log('enter 1');
                TweenMax.staggerTo(
                    ".h-serv-ul-1 li",
                    0.25,
                    {
                        autoAlpha: 1,
                        marginLeft: 0,
                    },
                    0.1
                );

                serviceAnimMob1.setDirection(1);
                serviceAnimMob1.setSpeed(1);
                serviceAnimMob1.play();
                serviceAnimMob1Dark.setDirection(1);
                serviceAnimMob1Dark.setSpeed(1);
                serviceAnimMob1Dark.play();
                $(".hs-img-mob-1").addClass("active");
            })
            .on("leave", function (e) {
                // console.log('leave 1');
                TweenMax.staggerTo(
                    ".h-serv-ul-1 li",
                    0.25,
                    {
                        autoAlpha: 0,
                        marginLeft: -20,
                    },
                    0.1
                );

                serviceAnimMob1.setDirection(-1);
                serviceAnimMob1.setSpeed(3);
                serviceAnimMob1.play();
                serviceAnimMob1Dark.setDirection(-1);
                serviceAnimMob1Dark.setSpeed(3);
                serviceAnimMob1Dark.play();
                $(".hs-img-mob-1").removeClass("active");
            })
            .setTween(tlServ1)
            // .addIndicators({
            //     'name': 'Service 1'
            // })
            .addTo(controllerMid);
        /* Service 1 trigger Ends */

        /* Service 1 Ends */
        /* ------
        Service 2 Starts
        ----- */
        new ScrollMagic.Scene({
            triggerElement: "#hs-service-2-mob-canvas",
            triggerHook: 0.8,
            // reverse: false
        })
            // .setTween(servImgMob2Tween())
            .on("enter", function (e) {
                serviceAnimMob2.setDirection(1);
                serviceAnimMob2.setSpeed(1);
                serviceAnimMob2.play();
                serviceAnimMob2Dark.setDirection(1);
                serviceAnimMob2Dark.setSpeed(1);
                serviceAnimMob2Dark.play();
                $(".hs-img-mob-2").addClass("active");
            })
            .on("leave", function (e) {
                serviceAnimMob2.setDirection(-1);
                serviceAnimMob2.setSpeed(3);
                serviceAnimMob2.play();
                serviceAnimMob2Dark.setDirection(-1);
                serviceAnimMob2Dark.setSpeed(3);
                serviceAnimMob2Dark.play();
                $(".hs-img-mob-2").removeClass("active");
            })
            // .addIndicators({
            //     'name': 'Service img 2'
            // })
            .addTo(controllerMid);
        /* Service 2 Ends */
        /* ------
        Service 3 Starts
        ----- */
        new ScrollMagic.Scene({
            triggerElement: "#hs-service-3-mob-canvas",
            triggerHook: 0.8,
            // reverse: false
        })
            // .setTween(servImgMob3Tween())
            .on("enter", function (e) {
                serviceAnimMob3.setDirection(1);
                serviceAnimMob3.setSpeed(1);
                serviceAnimMob3.play();
                serviceAnimMob3Dark.setDirection(1);
                serviceAnimMob3Dark.setSpeed(1);
                serviceAnimMob3Dark.play();
                $(".hs-img-mob-3").addClass("active");
            })
            .on("leave", function (e) {
                serviceAnimMob3.setDirection(-1);
                serviceAnimMob3.setSpeed(3);
                serviceAnimMob3.play();
                serviceAnimMob3Dark.setDirection(-1);
                serviceAnimMob3Dark.setSpeed(3);
                serviceAnimMob3Dark.play();
                $(".hs-img-mob-3").addClass("active");
            })
            // .addIndicators({
            //     'name': 'Service img 3'
            // })
            .addTo(controllerMid);
        /* Service 3 Ends */

        // new ScrollMagic.Scene({
        //     triggerElement: '.wwr-animation-ct',
        //     triggerHook: 0,
        // }).on('enter', function (e) {
        //     console.log('enter');
        //     $('.wwr-animation-ct').addClass('active');
        // }).on('leave', function (params) {
        //     $('.wwr-animation-ct').removeClass('active');
        // }).addTo(controllerMid);

        /* Work Starts */
        var tlWorkAnim = gsap.timeline();
        tlWorkAnim
            .to(
                ".dot4",
                {
                    duration: 1,
                    opacity: 1,
                    top: $(".h-work-hdn-box").offset().top + "px",
                    left: $(".h-work-hdn-box").offset().left + 30 + "px",
                    width: $(".hsdot-1").width() + "px",
                    height: $(".hsdot-1").width() + "px",
                },
                0
            )
            .to(
                ".dot6",
                {
                    duration: 1,
                    opacity: 1,
                    top: $(".h-work-hdn-box").offset().top + "px",
                    left: $(".h-work-hdn-box").offset().left + 130 + "px",
                    width: $(".hsdot-1").width() + "px",
                    height: $(".hsdot-1").width() + "px",
                },
                0
            )
            .to(
                ".dot5",
                {
                    duration: 1,
                    opacity: 1,
                    top: $(".h-work-hdn-box").offset().top + "px",
                    left: $(".h-work-hdn-box").offset().left + 230 + "px",
                    width: $(".hsdot-1").width() + "px",
                    height: $(".hsdot-1").width() + "px",
                },
                0
            );

        new ScrollMagic.Scene({
            triggerElement: ".workTriggerStart",
            triggerHook: 0.2,
            duration: wrkTriggerEnd,
            // reverse: false
        })
            .setTween(tlWorkAnim)
            .addTo(controllerMid);

        var tlWorkAnim2 = gsap.timeline();
        tlWorkAnim2
            .to(
                ".dot4",
                {
                    duration: 1,
                    opacity: 1,
                    top: $(".h-work-pt-1").offset().top + "px",
                    left: $(".h-work-pt-1").offset().left + "px",
                },
                0
            )
            .to(
                ".dot6",
                {
                    duration: 1,
                    opacity: 1,
                    top: $(".h-work-pt-2").offset().top + "px",
                    left: $(".h-work-pt-2").offset().left + "px",
                },
                0
            )
            .to(
                ".dot5",
                {
                    duration: 1,
                    opacity: 1,
                    top: $(".h-work-pt-3").offset().top + "px",
                    left: $(".h-work-pt-3").offset().left + "px",
                },
                0
            );

        new ScrollMagic.Scene({
            triggerElement: ".h-work-hdn-box",
            triggerHook: 0.2,
            duration: 200,
            // reverse: false
        })

            // .addIndicators({
            //     'name': 'work'
            // })
            .on("update", function (e) {
                if (e.target.controller().info("scrollDirection") == "REVERSE" && tlWorkEnter) {
                    $(".h-work").removeClass("active");
                    $(".h-work").removeClass("active3");
                }
                if (e.target.controller().info("scrollDirection") == "REVERSE" && tlWorkProgress == 0) {
                    $(".h-work").removeClass("active");
                    $(".hsdot-3a").css({
                        backgroundColor: "var(--clr3)",
                    });
                    $(".dot4").css({
                        opacity: 0,
                    });
                    $(".dot5").css({
                        opacity: 0,
                    });
                    $(".dot6").css({
                        opacity: 0,
                    });
                }
            })
            .on("progress", function (e) {
                tlWorkProgress = e.progress;
            })
            .on("enter leave", function (e) {
                if (e.type == "enter") {
                    tlWorkEnter = true;
                    $(".hsdot-3a").css({
                        backgroundColor: "transparent",
                    });
                    $(".dot4").css({
                        opacity: 1,
                        top: $(".h-work-hdn-box").offset().top + "px",
                        left: $(".h-work-hdn-box").offset().left + 30 + "px",
                        width: $(".hsdot-1").width() + "px",
                        height: $(".hsdot-1").width() + "px",
                    });
                    $(".dot5").css({
                        opacity: 1,
                        top: $(".h-work-hdn-box").offset().top + "px",
                        left: $(".h-work-hdn-box").offset().left + 130 + "px",
                        width: $(".hsdot-1").width() + "px",
                        height: $(".hsdot-1").width() + "px",
                    });
                    $(".dot6").css({
                        opacity: 1,
                        top: $(".h-work-hdn-box").offset().top + "px",
                        left: $(".h-work-hdn-box").offset().left + 230 + "px",
                        width: $(".hsdot-1").width() + "px",
                        height: $(".hsdot-1").width() + "px",
                    });
                } else {
                    tlWorkEnter = false;
                    $(".h-work").addClass("active");
                    $(".dot4").css({
                        opacity: 0,
                    });
                    $(".dot5").css({
                        opacity: 0,
                    });
                    $(".dot6").css({
                        opacity: 0,
                    });
                }
            })
            .setTween(tlWorkAnim2)
            .addTo(controllerMid);

        /* Work Ends */

        /* Expertise Starts */
        var buildExpertiseTl = function () {
            var tl = gsap.timeline();
            tl.to(
                ".dot4",
                {
                    duration: 1,
                    opacity: 1,
                    width: $(".exp").width() + "px",
                    height: $(".exp").width() + "px",
                    top: $(".exp1").offset().top + "px",
                    left: $(".exp1").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
                .to(
                    ".dot6",
                    {
                        duration: 1,
                        opacity: 1,
                        width: $(".exp").width() + "px",
                        height: $(".exp").width() + "px",
                        top: $(".exp2").offset().top + "px",
                        left: $(".exp2").offset().left + "px",
                        ease: Linear.easeNone,
                    },
                    0
                )
                .to(
                    ".dot5",
                    {
                        duration: 1,
                        opacity: 1,
                        width: $(".exp").width() + "px",
                        height: $(".exp").width() + "px",
                        top: $(".exp3").offset().top + "px",
                        left: $(".exp3").offset().left + "px",
                        ease: Linear.easeNone,
                    },
                    0
                );
            return tl;
        };
        var tlExpertise = buildExpertiseTl();

        var expertiseScene = new ScrollMagic.Scene({
            triggerElement: ".h-work-btn",
            triggerHook: 0.4,
            duration: 0.3 * docHeight,
            // reverse: false
        })
            // .addIndicators()
            .on("update", function (e) {
                tlExpertiseDirection = e.target.controller().info("scrollDirection");
            })
            .on("enter leave", function (e) {
                if (tlExpertiseDirection == "FORWARD") {
                    if (e.type == "enter") {
                        $(".h-work").addClass("active2");
                        $(".h-work").removeClass("active3");
                        $(".dot4").css({
                            left: $(".h-work-pt-end-1").offset().left + "px",
                            top: $(".h-work-pt-end-1").offset().top + "px",
                        });
                        $(".dot6").css({
                            left: $(".h-work-pt-end-2").offset().left + "px",
                            top: $(".h-work-pt-end-2").offset().top + "px",
                        });
                        $(".dot5").css({
                            left: $(".h-work-pt-end-3").offset().left + "px",
                            top: $(".h-work-pt-end-3").offset().top + "px",
                        });
                    }
                } else if (tlExpertiseDirection == "REVERSE") {
                    if (e.type == "leave") {
                        $(".h-work").removeClass("active2");
                        $(".h-work").addClass("active3");
                        $(".dot4").css({
                            opacity: 0,
                        });
                        $(".dot5").css({
                            opacity: 0,
                        });
                        $(".dot6").css({
                            opacity: 0,
                        });
                    }
                }
            })
            .setTween(tlExpertise)
            .addTo(controllerMid);

        /* Fix: dot4/dot5/dot6 were landing off the map's dashed exp1/exp2/exp3
           markers because their .offset() is captured here before the map's
           Lottie SVG (and web fonts) finish loading and settling the layout.
           Once things settle, rebuild the tween from fresh offsets and keep
           the scene's trigger position in sync via .refresh() -- same pattern
           this file already uses for blogTrigger/quoteTrigger. Only do this
           while the scene hasn't been scrolled into yet, so we never yank the
           dots away from a user who already scrolled past. */
        var resyncExpertiseDots = function () {
            if (expertiseScene.state() !== "BEFORE") {
                return;
            }
            tlExpertise = buildExpertiseTl();
            expertiseScene.setTween(tlExpertise);
            expertiseScene.refresh();
        };
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(resyncExpertiseDots);
        }
        window.setTimeout(resyncExpertiseDots, 1000);
        /* Expertise Ends */

        /* Founder Starts */
        var fndrWidth = $(".fndr").width() + "px",
            fndr1Left = $(".fndr1").offset().left + "px",
            fndr1Top = $(".fndr1").offset().top + "px",
            fndr2Left = $(".fndr2").offset().left + "px",
            fndr2Top = $(".fndr2").offset().top + "px",
            fndr3Left = $(".fndr3").offset().left + "px",
            fndr3Top = $(".fndr3").offset().top + "px",
            fndrDuration = $(".founderTriggerEnd").offset().top - $(".founderTriggerStart").offset().top;

        var tlfndr = gsap.timeline();
        tlfndr
            .to(
                ".dot4",
                {
                    duration: 0.4,
                    opacity: 1,
                    width: fndrWidth,
                    height: fndrWidth,
                    top: fndr1Top,
                    left: fndr1Left,
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot6",
                {
                    duration: 0.4,
                    opacity: 1,
                    width: fndrWidth,
                    height: fndrWidth,
                    top: fndr2Top,
                    left: fndr2Left,
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot5",
                {
                    duration: 0.4,
                    opacity: 1,
                    width: fndrWidth,
                    height: fndrWidth,
                    top: fndr3Top,
                    left: fndr3Left,
                    ease: Linear.easeNone,
                },
                0
            );

        new ScrollMagic.Scene({
            triggerElement: ".founderTriggerStart",
            triggerHook: 0.1,
            duration: fndrDuration,
            // reverse: false
        })
            .setTween(tlfndr)
            // .addIndicators({
            //     'name': 'Founder'
            // })
            .addTo(controllerMid);
        /* Founder Ends */

        /* Blog Starts */

        blogDuration = $(".quoteTriggerUp").offset().top - $(".blogTriggerEnd").offset().top;
        var tlblog = gsap.timeline();
        tlblog
            .to(
                ".dot4",
                {
                    duration: 1,
                    width: $(".blg").width() + "px",
                    height: $(".blg").width() + "px",
                    top: $(".blg1").offset().top + "px",
                    left: $(".blg1").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot5",
                {
                    duration: 1,
                    width: $(".blg").width() + "px",
                    height: $(".blg").width() + "px",
                    top: $(".blg2").offset().top + "px",
                    left: $(".blg2").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot6",
                {
                    duration: 1,
                    width: $(".blg").width() + "px",
                    height: $(".blg").width() + "px",
                    top: $(".blg3").offset().top + "px",
                    left: $(".blg3").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            );

        blogTrigger = new ScrollMagic.Scene({
            triggerElement: ".blogTriggerStart",
            triggerHook: 0.2,
            // duration: durationCommon,
            duration: blogDuration,
            // reverse: false
        })
            .setTween(tlblog)
            // .addIndicators({
            //     'name': 'Blog'
            // })
            .addTo(controllerMid);
        /* Blog Ends */

        /* Blog-End Starts */
        var tlblogEnd = gsap.timeline();
        tlblogEnd
            .to(
                ".dot4",
                {
                    duration: 1,
                    width: $(".blgEndPt").width() + "px",
                    height: $(".blgEndPt").width() + "px",
                    top: $(".blgEndPt1").offset().top + "px",
                    left: $(".blgEndPt1").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot6",
                {
                    duration: 1,
                    width: $(".blgEndPt").width() + "px",
                    height: $(".blgEndPt").width() + "px",
                    top: $(".blgEndPt2").offset().top + "px",
                    left: $(".blgEndPt2").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
            .to(
                ".dot5",
                {
                    duration: 1,
                    width: $(".blgEndPt").width() + "px",
                    height: $(".blgEndPt").width() + "px",
                    top: $(".blgEndPt3").offset().top + "px",
                    left: $(".blgEndPt3").offset().left + "px",
                    ease: Linear.easeNone,
                },
                0
            )
            .to(".blogEndPts", {
                duration: 0.01,
                autoAlpha: 1,
            })
            .to(".dot4", {
                duration: 0.01,
                autoAlpha: 0,
            })
            .to(".dot5", {
                duration: 0.01,
                autoAlpha: 0,
            })
            .to(".dot6", {
                duration: 0.01,
                autoAlpha: 0,
            });

        quoteTrigger = new ScrollMagic.Scene({
            triggerElement: ".quoteTriggerUp",
            triggerHook: 0.4,
            duration: durationCommon,
            // reverse: false
        })
            .setTween(tlblogEnd)
            // .addIndicators({
            //     name: "Blog-End",
            // })
            .addTo(controllerMid);
        /* Blog-End Ends */
    }

    function scrollTopFn() {
        var sticky = $(".scrollTop"),
            scroll = $(window).scrollTop();

        if (scroll >= 1000) sticky.addClass("in");
        else sticky.removeClass("in");
    }

    $(window).scroll(function (e) {
        scrollTopFn();
    });

    $(document).on("click", ".scrollTop", function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            0
        );
    });

    $(document).on("click", ".bl-hdn", function () {
        let cont = $(this).next();
        if ($(cont).is(":visible")) {
            $(".bl-cont").slideUp();
            $(".bl-icon").removeClass("active");
        } else {
            $(".bl-cont").slideUp();
            $(".bl-icon").removeClass("active");
            $(cont).slideDown();
            $(this).find(".bl-icon").addClass("active");
        }
    });

    const tabs_container = document.querySelector(".tabs-wrapper"),
        tabs = document.querySelectorAll(".tab");

    const navigate = (tab) => {
        let tabContent = document.getElementsByClassName("tab-content");
        for (var i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        const { offsetLeft, offsetWidth } = tab,
            clipRight = offsetLeft + offsetWidth;

        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        tabs_container.style.setProperty(
            "--clip-path",
            `inset( 3px ${Number(100 - (clipRight / tabs_container.offsetWidth) * 100).toFixed()}% 3px ${Number((offsetLeft / tabs_container.offsetWidth) * 100).toFixed()}% round 40px`
        );
        let id = tab.getAttribute("tid");
        document.getElementById(id).style.display = "block";

        blogTrigger.refresh();
        quoteTrigger.refresh();
    };

    navigate(tabs[0]);

    tabs.forEach((t, i) => {
        t.addEventListener("click", () => navigate(t));
    });
}

$.when(ready()).done(function () {
    if (window.location.host != "localhost:8080" && window.location.host != "localhost") {
        window.scrollTo(0, 0);
        $("window").scrollTop(0);
    }
    $(window).on("load", function () {
        load();
    });
});
