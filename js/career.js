$(window).on('load', function () {
    var animLion = lottie.loadAnimation({
        container: document.getElementById('lionCanvas'),
        path: '/json/now-level-up-anime.json',
        renderer: 'svg',
        loop: true,
        autoplay: true,
    });
});