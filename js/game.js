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
var pauseModeImg = [
    './TemplateData/img/Blue.png',
    './TemplateData/img/Cyan.png',
    './TemplateData/img/Green.png',
    './TemplateData/img/Pink.png',
    './TemplateData/img/Red.png'
]
function preloadImage(src) {
    var image = new Image();
    image.src = src;
}

/**preload image**/
pauseModeImg.forEach(function (e) {
    preloadImage(e)
});
listObj.forEach(function (e) {
    preloadImage(e)
})




var listObjShowup = [], totalTime = 60, remainingTime, pickedCards = [], successCount = 0, isPause = false;
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

        $('#titleGame').text('Pairs');

        $('#preCountDown').css('display', 'none');

        $('#play-pause-section').css('display', 'block')
        $('#successCount').css('display', 'block');
        $('#countTimer').css('display', 'block');
    }, 5000);
}
var closeAllCard = function () {
    $('.card').removeClass('flip-active');
}
var countDownTime = function () {
    remainingTime = totalTime;
    var interVal = setInterval(function () {
        if (isPause) {
            return;
        }
        remainingTime--;
        var percentTime = remainingTime / totalTime * 100 + '%';
        $('#percentTime').css('width', percentTime)
        $('#time').html(remainingTime)
        if (remainingTime <= 0) {
            window.location.pathname = './submit.html'
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
    console.log(pickedCards)
    group.forEach(function (e) {
        if (e.includes(pickedCards[0].url) && e.includes(pickedCards[1].url)) {
            console.log('paired', true);
            successCount++;
            setTimeout(function () {
                $('#card' + pickedCards[0].index).addClass('locked')
                $('#card' + pickedCards[1].index).addClass('locked')
            }, 900)

            $('#successCount').text(successCount);
        }
    })
}
var resume = function () {
    $('#play').css('display', 'none');
    $('#pause').css('display', 'inline-block');
    isPause = false;
    $('#pause-mode').css('display', 'none');
}
$(function () {
    init();
    $('.card').click(function () {
        if (pickedCards.length >= 2 || $(this).hasClass("flip-active") || $(this).hasClass("locked")) {
            return;
        } else {
            var index = $(this).attr('index');
            var frontUrl = $('#front' + index).attr('src');
            pickedCards.push({ url: frontUrl, index: index });
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
    });


    $('#pause').click(function () {
        $(this).css('display', 'none');
        $('#play').css('display', 'inline-block');
        isPause = true;
        $('#pause-mode').css('display', 'block');
        $("#pause-mode-img").attr('src', pauseModeImg[Math.floor(Math.random() * pauseModeImg.length)]);
    });
    $('#play').click(function () {
        resume()
    });
    $('#pause-mode').click(function () {
        resume()
    })
});

