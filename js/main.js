$(document).on('click', 'a', function (event) {
    event.preventDefault();
});
$('.header__cost[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
});
jQuery(document).ready(function ($) {
    $('.pop').magnificPopup({
        type: 'inline',
        mainClass: 'my-mfp-zoom-in',
    });
});
$(".thank__link").on("click",function () {
    var magnificPopup = $.magnificPopup.instance;
    magnificPopup.close();
});
$(".quiz__button").click(function () {
    var question = $(this).attr('data-src');
    if (question < 7) {
        var current = '#question_' + question;
        var next = '#question_' + (parseInt(question) + 1);
        $(current).addClass('quiz__element--hidden');
        $(next).removeClass('quiz__element--hidden')
    }
});

inputs=document.getElementsByTagName("input");
for(var i=0;i<inputs.length;i++)
{
    if(inputs[i].type=="radio")
    {
        inputs[i].onchange=function()
        {
            inputs=document.getElementsByTagName("input");
            for(var i=0;i<inputs.length;i++)
            {
                if(inputs[i].type=="radio")
                {
                    inputs[i].checked=false;
                }
                this.checked=true;
            }
        }
    }
}
