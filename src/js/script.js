


$('#slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 4,
    autoplay:true,
    arrows: true,

    responsive: [
        {
            breakpoint: 768,
            settings: {

                centerMode: true,
                centerPadding: '0px',

                autoplay:true,
                arrows: false,

                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 2,
                autoplay:true

            }
        }
    ]
});



