$("#bannerSlider").owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1024: {
            items: 1
        }
    }
});
$("#KeySpecifications").owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        768: {
            items: 3
        },
        1024: {
            items: 5
        }
    }
});
$("#ExpertOpinion,#ExpertOpinion2").owlCarousel({
    margin: 0,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1024: {
            items: 1
        }
    }
});
$("#TopNotch").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    autoWidth:true,
    nav: true,
    items:4,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        }

    }
});
$("#DealersNearYou").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 2
        }

    }
});
