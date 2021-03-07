$('li a').click(function(e) {
    e.preventDefault();
    $('a').removeClass('active');
    $(this).addClass('active');
});
// Slider
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


let smallRoom = document.querySelectorAll('.thumbnail');
let slider = document.querySelector('.slider');
let divActive = document.querySelector('.div-active');
let imageActive = divActive.querySelector('img');

for (let i = 0; i < smallRoom.length; i++) {
    smallRoom[i].addEventListener('mouseover', () => {
        slider.classList.add('hide');
        divActive.classList.remove('hide');
        imageActive.src = smallRoom[i].src;
    });
    smallRoom[i].addEventListener('mouseout', () => {
        slider.classList.remove('hide');
        divActive.classList.add('hide');
    });
}