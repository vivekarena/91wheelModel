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
$("#ExpertOpinion,#ExpertOpinion2").owlCarousel({
    margin: 0,
    nav: true,
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
    autoPlay: true,
    smartSpeed: 1000,
    autoWidth:true,
    nav: false,
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
    autoPlay: true,
    smartSpeed: 1000,
    nav: true,
    dots: false,
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
