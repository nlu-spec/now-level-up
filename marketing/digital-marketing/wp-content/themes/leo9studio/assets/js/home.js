


// function formSubmit() {
//     $('#get-started-button').click(function () {
//         var textareaval = $('#get-started-email').val();
//         // $('#email-091abcb1-e32a-4552-9a81-84772b40167b').val(textareaval);
//             setTimeout(() => { 
//                 $('.hs-form-field input[type="email"]').val(textareaval).change();
//             }, 2000);
//     });
//     // $(document).on('load', '.hbspt-form', function (e) {
//     // })

// }

// formSubmit() 










$(document).on('click', '.faqAcc', function (e) {
    // console.log($(this).hasClass('active'));
    if (!$(this).hasClass('active')) {
        $(".faqpara").slideUp();
        $('.faqAcc').removeClass('active');
        $(this).addClass('active');
        $(this).find(".faqpara").slideToggle();
    } else {
        $(".faqpara").slideUp();
        $('.faqAcc').removeClass('active');
    }
    // return
    // e.stopPropogation();
});

if ($(window).width() <= 800) {
    $(document).on('click', 'footer h4', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });
}
const swiperCaseStudy = new Swiper('.swiper-case-study', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    grabCursor: true,
    speed: 800,
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    breakpoints: {
        1366: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 40,
        },
        641: {
            slidesPerView: 1.8,
            spaceBetween: 30,
        },
        481: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        }
    }
});
$('body').magnificPopup({
    delegate: '.popup',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


$(".case-study-box").click(function () {
    $(this).toggleClass('active')
})




function bannerAnim() {


    // gsap.to(".animating-balls", {
    //     opacity: 1,
    //     y: "50%",
    //     scale: 1,
    //     duration: 0.8,
    // })

    // gsap.to(".balls-wrap", {
    //     rotate: 360,
    //     repeat: -1,
    //     ease: "none",
    //     duration: 5
    // }, 0)


    // gsap.to(".animating-balls", {
    //     y: 0,
    //     duration: 1,
    //     delay: 0.5
    // })


    gsap.to("#header", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.in()",
    }, 0)
    gsap.to(".banner-wrap", {
        opacity: 1,
        // y: 0,
        top: 0,
        // ease: "power2.inOut()",
        duration: 0.5,
    })
    // gsap.to(".animating-balls", {
    //     opacity: 1,
    //     duration: 0.5,
    //     delay: 0.3
    // }, 0)

    gsap.to(".banner-num", {
        y: 0,
        stagger: {
            each: 0.05,
            from: "center",
        },
        duration: 0.5,
    }, 0)

    gsap.to(".banner-screen img", {
        y: 0,
        scale: 1,
        // duration: 1.6,
        stagger: {
            amount: 0.2,
            from: "center",
            ease: "power2.inOut",
        },
    }, 0)

    gsap.to(".banner-screen img", {
        opacity: 1,
        duration: 1.6,
    }, 0)

    // }, 1000);





    let tlBanner1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".banner",
            start: "0 0%",
            end: "0 -80%",
            scrub: 0.5,
            // scroller: document.body,
            // pinType: "transform",
            // markers: true,

        }
    })
        // .to(".balls-wrap", {
        //     y: 0,
        // }, 0)
        .to(".banner-screen", {
            y: 0,
        }, 0)

    // let tlBanner2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".logo-section-1",
    //         start: "0 100%",
    //         end: "0 0%",
    //         scrub: 0.5,
    //         // scroller: document.body,
    //         // pinType: "transform",
    //         // markers: true,

    //     }
    // })
    //     .to(".balls-wrap", {
    //         x: "100%",
    //     }, 0)

}

function textAnimation() {

    let splitWords = function (selector) {
        var elements = document.querySelectorAll(selector);

        elements.forEach(function (el) {
            el.dataset.splitText = el.textContent;
            el.innerHTML = el.textContent
                .split(/\s/)
                .map(function (word) {
                    return word
                        .split("-")
                        .map(function (word) {
                            return '<span class="word">' + word + "</span>";
                        })
                        .join('<span class="hyphen">-</span>');
                })
                .join('<span class="whitespace"> </span>');
        });
    };

    let splitLines = function (selector) {
        var elements = document.querySelectorAll(selector);

        splitWords(selector);

        elements.forEach(function (el) {
            var lines = getLines(el);

            var wrappedLines = "";
            lines.forEach(function (wordsArr) {
                wrappedLines += '<span class="line"><span class="words">';
                wordsArr.forEach(function (word) {
                    wrappedLines += word.outerHTML;
                });
                wrappedLines += "</span></span>";
            });
            el.innerHTML = wrappedLines;
        });
    };

    let getLines = function (el) {
        var lines = [];
        var line;
        var words = el.querySelectorAll("span");
        var lastTop;
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.offsetTop != lastTop) {
                // Don't start with whitespace
                if (!word.classList.contains("whitespace")) {
                    lastTop = word.offsetTop;

                    line = [];
                    lines.push(line);
                }
            }
            line.push(word);
        }
        return lines;
    };

    splitLines(".reveal-text");

    let revealText = document.querySelectorAll(".reveal-text");

    gsap.registerPlugin(ScrollTrigger);
    let revealLines = revealText.forEach((element) => {
        const lines = element.querySelectorAll(".word");

        let tlLines = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                // toggleActions: "restart none none reset",
                // markers: true,
                scrub: 1,
                start: "0% 80%",
                end: "100% 80%"
            }
        });
        tlLines.set(element, { autoAlpha: 1 });
        tlLines.from(lines, {
            // y: 100,
            opacity: 0.2,
            stagger: 0.01,
            delay: 0.15
        });
    });

    let tlLines2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".reveal-text",
            // toggleActions: "restart none none reset",
            // markers: true,
            scrub: 1,
            // scroller: document.body,
            // pinType: "transform",
            start: "0% 150%",
            end: "0% 50%"
        }
    }).from(".text-section-1", {
        y: 100
    })

}

function cardAnim() {

    const playerContainers = document.querySelectorAll(".card-img");
    playerContainers.forEach(container => {
        container.addEventListener("mouseover", () => {
            const player = container.querySelector("dotlottie-player");
            player.setDirection(1);
            player.play();
        });

        container.addEventListener("mouseleave", () => {
            const player = container.querySelector("dotlottie-player");
            player.setDirection(-1);
            player.play();
        });
    });

    let tlCardsection = gsap.timeline({
        scrollTrigger: {
            trigger: ".cards-section",
            start: "0 100%",
            end: "0 0%",
            scrub: 0.5,
            // scroller: document.body,
            // markers: true,
        }
    })
        // .to(".balls-wrap", {
        //     x: 0,
        //     opacity: 0,
        // }, 0)
        .from(".card", {
            y: 200,
            stagger: 0.1
        }, 0)
}

function blackAnim() {

    let tlBlack = gsap.timeline({
        scrollTrigger: {
            trigger: ".black-section",
            start: "0 100%",
            end: "0 100%",
            // scrub: 0.8,
            // scroller: document.body,
            // pinType: "transform",
            // markers: true,
            toggleActions: "play none none reverse",
            preventOverlaps: true
        }
    })
        .to("body", {
            background: "#0D0D0D",
            duration: 0.8
        }, 0)

    let tlWhite = gsap.timeline({
        scrollTrigger: {
            trigger: ".case-study-section",
            start: "0 40%",
            end: "0 40%",
            // scrub: 0.8,
            toggleActions: "play none none reverse",
            preventOverlaps: true
        }
    })
        .to("body", {
            background: "#fff",
            duration: 0.8
        }, 0)


    const blackImg = document.querySelectorAll(".black-img")
    blackImg.forEach(section => {
        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "0 120%",
                end: "0 50%",
                scrub: 0.5,
                // scroller: document.body,
                // pinType: "transform",
                // markers: true,
            }
        })
            .fromTo(section, {
                scale: 1.2,
                y: 200,
                opacity: 0
            }, {
                scale: 1,
                y: 0,
                opacity: 1
            })

    });

}

function caseAnim() {

    let tlCase = gsap.timeline({
        scrollTrigger: {
            trigger: ".case-study-section",
            start: "0 100%",
            end: "0 0%",
            scrub: 0.8,
            // scroller: document.body,
            // pinType: "transform",
            // markers: true,
            preventOverlaps: true
        }
    })
        .from(".case-study-box", {
            y: 100,
            stagger: 0.2
        }, 0)
    // .to(".balls-wrap", {
    //     opacity: 1,
    // }, 0)
}

function clientAnim() {

    let tlCase = gsap.timeline({
        scrollTrigger: {
            trigger: ".clients-section",
            start: "0 100%",
            end: "0 0%",
            scrub: 0.5,
            // scroller: document.body,
            // pinType: "transform",
            // markers: true,
            preventOverlaps: true
        }
    })
        .from(".clients-box", {
            y: 100,
            stagger: 0.2
        }, 0)
    // .to(".balls-wrap", {
    //     x: 0
    // }, 0)
}

function pricingAnim() {
    let tlpricing = gsap.timeline({
        scrollTrigger: {
            trigger: ".pricing-section",
            start: "0 100%",
            end: "0 0%",
            scrub: 0.8,
            // scroller: document.body,
            // pinType: "transform",
            // markers: true,
            preventOverlaps: true
        }
    })
        .from(".plan-box", {
            y: 100,
            stagger: 0.2
        }, 0)
}


function faqAnim() {
    let tlfaq = gsap.timeline({
        scrollTrigger: {
            trigger: ".faq-section",
            start: "0 100%",
            end: "0 50%",
            scrub: 1,
            // scroller: document.body,
            preventOverlaps: true,
        }
    })
        .to(".balls-wrap", {
            x: "-100%"
        }, 0)
}

function boostAnim() {
    let tlfaq = gsap.timeline({
        scrollTrigger: {
            trigger: ".need-section",
            start: "0 80%",
            end: "0 30%",
            scrub: 1,
            // scroller: document.body,
            preventOverlaps: true,
            // markers: true,
        }
    })
        // .to(".balls-wrap", {
        //     scale: 1.2,
        //     opacity: 0,
        //     y: "100%",
        //     x: 0
        // }, 0)
        .from(".need-blur", {
            scale: 1.5,
            opacity: 0
        }, 0)
}








const generateGlowButtons = () => {
    document.querySelectorAll(".glow-button").forEach((button) => {
        let gradientElem = button.querySelector('.gradient');

        if (!gradientElem) {
            gradientElem = document.createElement("div");
            gradientElem.classList.add("gradient");

            button.appendChild(gradientElem);
        }

        button.addEventListener("pointermove", (e) => {
            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(button, {
                "--pointer-x": `${x}px`,
                "--pointer-y": `${y}px`,
                duration: 0.1,
            });

            gsap.to(button, {
                "--button-glow": chroma
                    .mix(
                        getComputedStyle(button)
                            .getPropertyValue("--button-glow-start")
                            .trim(),
                        getComputedStyle(button).getPropertyValue("--button-glow-end").trim(),
                        x / rect.width
                    )
                    .hex(),
                duration: 0.1,
            });
        });
    });
}




$(document).ready(function () {
    bannerAnim()

    // if ($(window).width() > 990) {
    //     var mainScroll = document.getElementById("main-scrollbar");

    //     var bodyScrollBar = Scrollbar.init(mainScroll, {
    //         damping: 0.08,
    //         delegateTo: mainScroll,
    //     });
    // }

    textAnimation()
    if ($(window).width() > 990) {
        cardAnim()
    }
    blackAnim()
    caseAnim()
    clientAnim()
    pricingAnim()
    // faqAnim()
    boostAnim()
    generateGlowButtons()

    // if ($(window).width() <= 990) {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $("#header").addClass("fixHeader");
        } else {
            $("#header").removeClass("fixHeader");
        }
    })

    // }

})




