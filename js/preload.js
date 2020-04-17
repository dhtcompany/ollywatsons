function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var listProduct = [
    './TemplateData/img/blue1.png',
    './TemplateData/img/cyan1.png',
    './TemplateData/img/green1.png',
    './TemplateData/img/pink1.png',
    './TemplateData/img/red1.png',
]
var listContent = [
    ['./TemplateData/img/blue2.png', './TemplateData/img/blue3.png'],
    ['./TemplateData/img/cyan2.png', './TemplateData/img/cyan3.png'],
    ['./TemplateData/img/green2.png', './TemplateData/img/green3.png'],
    ['./TemplateData/img/pink2.png', './TemplateData/img/pink3.png'],
    ['./TemplateData/img/red2.png', './TemplateData/img/red3.png']
]
var listObj = [];
for (let i = 0; i < listProduct.length; i++) {
    listObj.push(listProduct[i]);
    var contents = listContent[i];
    listObj.push(contents[Math.floor(Math.random() * 2)])
}
var lastProductIndex = getRandomInt(5);
listObj.push(listProduct[lastProductIndex]);
var lastContents = listContent[lastProductIndex];
listObj.push(lastContents[Math.floor(Math.random() * 2)])
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
    './TemplateData/img/blue0.png',
    './TemplateData/img/Blue.png',

    './TemplateData/img/cyan0.png',
    './TemplateData/img/Cyan.png',

    './TemplateData/img/Green.png',
    './TemplateData/img/green0.png',

    './TemplateData/img/Pink.png',
    './TemplateData/img/pink0.png',

    './TemplateData/img/Red.png',
    './TemplateData/img/red0.png'

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
