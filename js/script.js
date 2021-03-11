let smallRoom = document.querySelectorAll('.thumbnail');
let slider = document.querySelector('.slider');
let divActive = document.querySelector('.div-active');
let imageActive = divActive.querySelector('img');

$('li a').click(function(e) {
    e.preventDefault();
    $('a').removeClass('active');
    $(this).addClass('active');
});
// Slider
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

let mainSliderImages = document.querySelectorAll('.slider-line img');
let firstImg = document.querySelector('.slider-line img');

document.querySelector('.fa-chevron-right').addEventListener('click', () => {
    offset += 786;
    if (offset > 2358) offset = 0;
    sliderLine.style.left = -offset + 'px';
    //Work with the active class
    let activeImage = document.querySelector('.active1');
    activeImage.classList.remove('active1');
    if (activeImage.nextElementSibling == null) {
        console.log('end');
        firstImg.classList.add('active1');
    } else {
        activeImage.nextElementSibling.classList.add('active1');
    }

    for (let i = 0; i < mainSliderImages.length; i++) {
        // When you scroll through a slide, the thumbnail image becomes active.
        if (mainSliderImages[i].classList.contains('active1')) {
            for (let j = 0; j < smallRoom.length; j++) {
                let activeThumbnail = document.querySelectorAll('.active-thumbnail');
                if (activeThumbnail.length > 0) {
                    activeThumbnail[0].classList.remove('active-thumbnail');
                }
                smallRoom[i].classList.add('active-thumbnail');
            }
        }
    }
});

document.querySelector('.fa-chevron-left').addEventListener('click', () => {
    offset -= 786;
    if (offset < 0) offset = 2358;
    sliderLine.style.left = -offset + 'px';
    //Work with the active class
    let activeImage = document.querySelector('.active1');
    activeImage.classList.remove('active1');
    if (activeImage.previousElementSibling == null) {
        mainSliderImages[mainSliderImages.length - 1].classList.add('active1');
    } else {
        activeImage.previousElementSibling.classList.add('active1');
    }

    for (let i = 0; i < mainSliderImages.length; i++) {
        // When you scroll through a slide, the thumbnail image becomes active.
        if (mainSliderImages[i].classList.contains('active1')) {
            for (let j = 0; j < smallRoom.length; j++) {
                let activeThumbnail = document.querySelectorAll('.active-thumbnail');
                if (activeThumbnail.length > 0) {
                    activeThumbnail[0].classList.remove('active-thumbnail');
                }
                smallRoom[i].classList.add('active-thumbnail');
            }
        }
    }

});

//When you hover over a thumbnail image, it displays an enlarged right
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