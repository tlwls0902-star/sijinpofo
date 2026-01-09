$(function () {
    // 스크롤 햇을 때
    // cotaniner 이미지가 w100% 되게
    let containerTop = $('.container').offset().top

    $(window).resize(function () {
        containerTop = $('.container').offset().top
    })

    $(window).scroll(function () {
        let sc = $(window).scrollTop() >= containerTop
        $('.container').toggleClass('on', sc)
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.menubtn .toparrow').fadeIn()
        } else {
            $('.menubtn .toparrow').fadeOut()
        }
    })

    $('.menubtn .toparrow').click(function (e) {
        e.preventDefault()
    })

    $('.menubtn .toparrow').click(function () {
        $('.gomenu').fadeToggle()
    })

    $('.menubtn .gomenu li').click(function () {
        let idx = $(this).index()
        console.log(idx)
        console.log($('.container  > .babo > .item').eq(idx))
        let sectionA = $('.container > .babo > .item').eq
            (idx).offset().top - 70

        $('html, body').animate({
            scrollTop: sectionA
        })

    })
    $('.openBtn').click(function(){
        $(this).next('.process').addClass('on')
        $('body').css('overflow', 'hidden')
    })
    $('.process').click(function (e) {
        $(this).removeClass('on')
        $('body').css('overflow', 'visible')
    });


    window.addEventListener('scroll', function () {
        const tape = document.querySelector('.tape');
        const scrollPosition = window.scrollY;


        if (scrollPosition > 100) {
            tape.classList.add('sticky');
        } else {
            tape.classList.remove('sticky');
        }
    });

})