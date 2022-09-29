$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
    $('.slider').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});