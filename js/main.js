
$(function () {

    $('.image-wrap').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont01>div').eq(i).fadeIn().siblings().hide();
    });
    $('.cont01 .close01').on('click', function () {
        $(this).parents('.wide_play01').fadeOut();
    })

    $('.image-wrap02').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont02>div').eq(i).fadeIn().siblings().hide();
    });
    $('.cont02 .close02').on('click', function () {
        $(this).parents('.wide_play02').fadeOut();
    })


    $('.page-content').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont05>div').eq(i).fadeIn().siblings().hide();
    });
    $('.cont05 .close05').on('click', function () {
        $(this).parents('.wide_play05').fadeOut();
    })













}); // html, css문서 다 읽고 제일 마지막에 읽으라는 opening 구문