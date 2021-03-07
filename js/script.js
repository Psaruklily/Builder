$('li a').click(function(e) {
    e.preventDefault();
    $('a').removeClass('active');
    $(this).addClass('active');
});

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.fa-chevron-right').addEventListener('click', () => {
    offset += 786;
    if (offset > 2358) offset = 0;
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.fa-chevron-left').addEventListener('click', () => {
    offset -= 786;
    if (offset < 0) offset = 2358;
    sliderLine.style.left = -offset + 'px';
});