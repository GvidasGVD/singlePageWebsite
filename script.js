$(function() {
    const section = document.getElementById("top-content");
    const navMenu = $('#nav-menu');
    const headerElem = $('header');

    $('#testimonials-slider').slick({
        infinte: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
    })

    $('#nav-toggle').on('click', () => {
        navMenu.css('right', '0')
    })

    $('#close-flyout').on('click', () => {
        navMenu.css('right', '-100%')
    })

    $(document).on('click', (e) => {
        let target = $(e.target)
        if(target.closest('#nav-toggle').length > 0){
            return false;
        }
        navMenu.css('right', '-100%')
    })

    $('#main-container').scroll(() => {
        const scrollTop = $('#main-container').scrollTop();

        if(scrollTop > 0) {
            headerElem.css('background', 'rgba(180, 180, 180, 0.9)')
        } else {
            headerElem.css('background', 'transparent')
        }

        headerElem.css(scrollTop >= 200 ?
            { 'padding': '0.1rem 0', 'box-shadow': '0 -2px 10px 1px #999'}
            :
            { 'padding': '0.8rem 0', 'box-shadow': 'none'}
            )

    })

    $('#main-container').trigger('scroll');

    const images = [
        'url("images/house1.jpg")',
        'url("images/house2.jpg")',
        'url("images/house3.jpg")',
        'url("images/house4.jpg")',
        'url("images/house5.jpg")',
    ]

    var imageNo = 0;

    function topBgImgCarousel() {
        section.style.backgroundImage = images[imageNo];
        imageNo++;

        if(imageNo>= 4){
            imageNo = 0;
        }
    }
    // setInterval(topBgImgCarousel, 5000)

})