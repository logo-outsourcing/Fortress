$(document).on('click', 'a', function (event) {

    event.preventDefault();

});
jQuery(document).ready(function ($) {
    $('.pop').magnificPopup({
        type: 'inline',
        mainClass: 'my-mfp-zoom-in'
    });
});
// var active = $('.quiz__element').attr('data-src');
var element = $('.quiz__content').length;

$(".quiz__button").click(function () {

    var question = $(this).attr('data-src');

    if (question < 6) {
        var current = '#question_' + question;
        var next = '#question_' + (parseInt(question) + 1);
        $(current).addClass('quiz__element--hidden');
        $(next).removeClass('quiz__element--hidden')
    }

    // if(active == $('.quiz__element').attr('data-src') ){
    //     $('.quiz__element').eq(active++).removeClass('quiz__element--hidden');
    // }


});

// var activeStep = 1;
// $('.quiz__element').eq(activeStep++).removeClass("quiz__element--hidden");
// if(activeStep == $('.quiz__element').length) $(this).addClass('quiz__element--hidden');
// console.log(activeStep)