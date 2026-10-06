/* E-commerce Starts — loaded only by ecommerce.html */
(function ($) {
    if (window.__ecommerceInit) return;
    window.__ecommerceInit = true;

    var ecController = null;
    var ecIsDesktop = function () { return $(window).width() > 800; };

    /* ---------- Services switcher (no ScrollMagic needed) ---------- */
    function ecSelectService(idx) {
        $('.ecommerce-svc-tab').removeClass('is-active').attr('aria-selected', 'false');
        $('.ecommerce-svc-tab[data-ecommerce-svc="' + idx + '"]').addClass('is-active').attr('aria-selected', 'true');
        var $panels = $('.ecommerce-svc-panel');
        $panels.removeClass('is-active');
        var $p = $('.ecommerce-svc-panel[data-ecommerce-panel="' + idx + '"]').addClass('is-active');
        gsap.fromTo($p.find('li'), { autoAlpha: 0, x: -24 }, { autoAlpha: 1, x: 0, duration: 0.35, stagger: 0.07, overwrite: true });
        if (ecController) ecController.update(true);
    }
    $(document).on('click', '.ecommerce-svc-tab', function () { ecSelectService($(this).attr('data-ecommerce-svc')); });
    $(document).on('keydown', '.ecommerce-svc-tab', function (e) {
        var $t = $('.ecommerce-svc-tab'), i = $t.index(this);
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); $t.eq((i + 1) % $t.length).focus().click(); }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); $t.eq((i - 1 + $t.length) % $t.length).focus().click(); }
    });

    /* ---------- Smooth in-page links ---------- */
    $(document).on('click', '.ecommerce-page a[href^="#ecommerce-"]', function (e) {
        var t = document.querySelector($(this).attr('href'));
        if (!t) return;
        e.preventDefault();
        var top = $(t).offset().top - 20;
        $('html,body').stop().animate({ scrollTop: top }, 700);
    });

    /* ---------- Contact form -> WhatsApp (same hand-off the site's quote flow uses) ---------- */
    var ecEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    $(document).on('submit', '#ecommerceForm', function (e) {
        e.preventDefault();
        var f = this, v = function (n) { return $.trim(f.elements[n].value); };
        var $msg = $(f).find('.ecommerce-form-msg').removeClass('is-err');
        if (!v('firstName') || !ecEmail.test(v('email')) || !v('message')) {
            $msg.addClass('is-err').text('Please enter your name, a valid email and a short message.');
            return;
        }
        var text = 'Hi Now Level Up, I would like to discuss E-commerce services.' +
            '\nName: ' + v('firstName') + ' ' + v('lastName') +
            '\nEmail: ' + v('email') + '\nPhone: ' + v('phone') +
            '\nBrand: ' + v('brand') + '\nWebsite: ' + v('website') +
            '\nCategory: ' + v('category') + '\nMessage: ' + v('message');
        window.open('https://wa.me/919701602493?text=' + encodeURIComponent(text), '_blank', 'noopener');
        $msg.text('Thanks! Opening WhatsApp to send your request.');
        f.reset();
    });

    /* ---------- Scroll animations ---------- */
    function ecInitScroll() {
        ecController = new ScrollMagic.Controller();

        // Generic reveal — same fade-up language as .fadeInUp in common.js; siblings are staggered
        $('.ecommerce-reveal').each(function () {
            var $el = $(this), idx = $el.index();
            var delay = Math.min(idx, 5) * 0.08;
            var tw = gsap.fromTo(this, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.9, delay: delay, ease: 'power2.out' });
            new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.92, reverse: true })
                .setTween(tw).addTo(ecController);
        });

        // Headings fade up (not .ecommerce-reveal so they stay visible if JS fails)
        $('.ecommerce-page .ecommerce-h2, .ecommerce-page .ecommerce-sub, .ecommerce-pkg-k, .ecommerce-package h2, .ecommerce-contact h2, .ecommerce-band h2, .ecommerce-cta h2').each(function () {
            var tw = gsap.fromTo(this, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power2.out' });
            new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.92, reverse: true }).setTween(tw).addTo(ecController);
        });

        // Process flow: dotted connectors draw in, hub pops
        var $lines = $('.ecommerce-flow-lines path');
        if ($lines.length && ecIsDesktop()) {
            $lines.each(function () { var l = this.getTotalLength ? this.getTotalLength() : 300; $(this).css({ strokeDasharray: '2 5', opacity: 0 }); });
            var tlFlow = gsap.timeline();
            tlFlow.to($lines, { opacity: 1, duration: 0.8, stagger: 0.12 }, 0)
                  .fromTo('.ecommerce-hub', { scale: 0.9 }, { scale: 1, duration: 0.8, ease: 'back.out(1.6)' }, 0);
            new ScrollMagic.Scene({ triggerElement: '.ecommerce-flow', triggerHook: 0.75, reverse: true })
                .setTween(tlFlow).addTo(ecController);
        }

        // Hero planet parallax (desktop only — mobile keeps the static background)
        if (ecIsDesktop()) {
            var heroH = $('.ecommerce-hero').outerHeight();
            var par = { p: 74 };
            var tlPar = gsap.to(par, { p: 96, ease: 'none', onUpdate: function () { $('.ecommerce-hero').css('background-position', 'center ' + par.p + '%'); } });
            new ScrollMagic.Scene({ triggerElement: '.ecommerce-hero', triggerHook: 0, duration: heroH }).setTween(tlPar).addTo(ecController);
        }

        // Brand pile: logos land with a small tilt, then folder rises
        var tlPile = gsap.timeline();
        tlPile.from('.ecommerce-pile img', { y: -60, rotation: '-=18', autoAlpha: 0, duration: 0.8, stagger: 0.09, ease: 'back.out(1.4)' })
              .from('.ecommerce-folder', { y: 60, autoAlpha: 0, duration: 0.7, ease: 'power3.out' }, 0);
        new ScrollMagic.Scene({ triggerElement: '.ecommerce-pile', triggerHook: 0.85, reverse: false })
            .setTween(tlPile).addTo(ecController);
    }

    /* ---------- Hero intro + count-up ---------- */
    function ecIntro() {
        var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.ecommerce-pill', { y: 20, autoAlpha: 0, duration: 0.6 })
          .from('.ecommerce-hero h1', { y: 30, autoAlpha: 0, duration: 0.8 }, '-=0.3')
          .from('.ecommerce-hero-sub', { y: 20, autoAlpha: 0, duration: 0.6 }, '-=0.5')
          .from('.ecommerce-tag', { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
          .from('.ecommerce-arrow', { autoAlpha: 0, duration: 0.6, stagger: 0.1 }, '-=0.5')
          .from('.ecommerce-btn-hero', { y: 24, autoAlpha: 0, duration: 0.6 }, '-=0.4')
          .from('.ecommerce-hero-stats div', { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, '-=0.3');
        $('.ecommerce-hero-stats b[data-count]').each(function () {
            var $b = $(this), end = parseFloat($b.attr('data-count')), dec = +($b.attr('data-dec') || 0);
            var pre = $b.attr('data-prefix') || '', suf = $b.attr('data-suffix') || '', o = { v: 0 };
            gsap.to(o, { v: end, duration: 1.8, delay: 0.8, ease: 'power2.out', onUpdate: function () { $b.text(pre + o.v.toFixed(dec) + suf); } });
        });
    }

    /* ---------- Boot ---------- */
    $(window).on('load', function () {
        ecIntro();
        ecInitScroll();
        // re-measure after late layout changes (fonts, header/footer injected by common.js)
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ecController && ecController.update(true); });
        setTimeout(function () { ecController && ecController.update(true); }, 1200);
    });
    var ecResizeT, ecW = $(window).width();
    $(window).on('resize orientationchange', function () {
        clearTimeout(ecResizeT);
        ecResizeT = setTimeout(function () {
            if (ecW !== $(window).width() && ecController) { ecW = $(window).width(); ecController.update(true); }
        }, 200);
    });
    $(document).on('change', '.darkModeCheck', function () { setTimeout(function () { ecController && ecController.update(true); }, 100); });
})(jQuery);
/* E-commerce Ends */
