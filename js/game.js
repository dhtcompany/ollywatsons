// $(function () {
//     $(".card").flip();
// });
var listObj = [
    './TemplateData/img/blue1.png',
    './TemplateData/img/blue2.png',
    './TemplateData/img/blue3.png',
    './TemplateData/img/cyan1.png',
    './TemplateData/img/cyan2.png',
    './TemplateData/img/cyan3.png',
    './TemplateData/img/green1.png',
    './TemplateData/img/green2.png',
    './TemplateData/img/green3.png',
    './TemplateData/img/pink1.png',
    './TemplateData/img/pink2.png',
    './TemplateData/img/pink3.png',
    './TemplateData/img/red1.png',
    './TemplateData/img/red2.png',
    './TemplateData/img/red3.png'
];
var group = [
    ['./TemplateData/img/blue1.png', './TemplateData/img/blue2.png'],
    ['./TemplateData/img/blue1.png', './TemplateData/img/blue3.png'],
    ['./TemplateData/img/cyan1.png', './TemplateData/img/cyan2.png'],
    ['./TemplateData/img/cyan1.png', './TemplateData/img/cyan3.png'],
    ['./TemplateData/img/green1.png', './TemplateData/img/green2.png'],
    ['./TemplateData/img/green1.png', './TemplateData/img/green3.png'],
    ['./TemplateData/img/pink1.png', './TemplateData/img/pink2.png'],
    ['./TemplateData/img/pink1.png', './TemplateData/img/pink3.png'],
    ['./TemplateData/img/red1.png', './TemplateData/img/red2.png'],
    ['./TemplateData/img/red1.png', './TemplateData/img/red3.png'],
];
var listObjShowup = [], time = 10, pickedCards = [], successCount = 0;
var shuffle = function (a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
var startGame = function () {
    $('.card').addClass('flip-active');
    setTimeout(() => {
        closeAllCard();
        countDownTime();
    }, 2000);
}
var closeAllCard = function () {
    $('.card').removeClass('flip-active');
}
var countDownTime = function () {
    var interVal = setInterval(function () {
        time--;
        $('#time').html(time)
        if (time <= 0) {
            clearInterval(interVal);
        }
    }, 1000)
}
var init = function () {
    listObjShowup = shuffle(listObj).slice(0, 12);
    /* bind img to card*/
    for (var i = 0; i < listObjShowup.length; i++) {
        var frontId = '#front' + (i + 1);
        $(frontId).attr("src", listObjShowup[i]);
    }
    /* init logic */
    startGame();
}
var pair = function (pickedCards) {
    group.forEach(function (e) {
        if (e.includes(pickedCards[0]) && e.includes(pickedCards[1])) {
            console.log('paired', true);
            successCount++;
            $('#successCount').text(successCount);
        }
    })
}
$(function () {
    init();
    $('.card').click(function () {
        if (pickedCards.length >= 2 || $(this).hasClass("flip-active")) {
            return;
        } else {
            var index = $(this).attr('index');
            var frontUrl = $('#front' + index).attr('src');
            pickedCards.push(frontUrl);
            $(this).addClass('flip-active');

        }
        /*pair*/
        if (pickedCards.length === 2) {
            pair(pickedCards);
            setTimeout(() => {
                closeAllCard();
                pickedCards = [];
            }, 1000);
        }
    })
});

