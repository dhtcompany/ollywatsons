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
var listObjShowup = [];
var shuffle = function (a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
var init = function () {
    listObjShowup = shuffle(listObj).slice(0, 12);
    /* bind img to card*/
    for (var i = 0; i < listObjShowup.length; i++) {
        var frontId = '#front' + (i + 1);
        $(frontId).attr("src", listObjShowup[i]);
    }
}
$(function () {
    init();
});