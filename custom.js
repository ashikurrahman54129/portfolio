var gallery = new SimpleLightbox('.gallery a', {
});

const d = new Date();
document.getElementById("date").innerHTML = d.getFullYear();

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        rewind: true,
        autoplay: true,
        autoplayTimeout: 4200,
        autoplayHoverPause: true,
        margin: 15,
        nav: true,
        dots: false,
        smartSpeed: 2500,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }

    });
});
