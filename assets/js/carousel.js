$(document).ready(function() {
    var owl = $('.carousel1');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        lazyLoad: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

$(document).ready(function() {
    var owl = $('.carousel2');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});