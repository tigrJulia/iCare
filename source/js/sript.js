const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
};


$(document).ready(function () {
    $('.care_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: false,
        infinite: true,
        draggable: false,
        width: 400,
        responsive: [
            {
                breakpoint: 1588,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1175,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 929,
                settings: {
                    verticalSwiping: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: true,
                }
            }
        ]
    })
});

$(document).ready(function () {
    $('.question_col').click(function () {
        // Закрити всі інші відкриті вікна
        $('.question_col').not(this).each(function () {
            $(this).removeClass('show small');
            $(this).find('i').removeClass('rotate');
            $(this).find('.collapse').removeClass('show');
        });

        // Перемикання іконки для поточного елемента
        const icon = $(this).find('i');
        icon.toggleClass('rotate');

        // Перемикання класів для поточного елемента
        $(this).toggleClass('show small');
        $(this).find('.collapse').toggleClass('show');
    });
});