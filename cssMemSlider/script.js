const slidesWrapper = document.querySelector('.mem-slider__slides');
const slidesInner = document.querySelector('.slides__inner');
const slides = document.querySelectorAll('.slide');
const textsWrapper = document.querySelector('.mem-slider__texts');
const textsInner = document.querySelector('.texts__inner');
const texts = document.querySelectorAll('.text');
const dots = document.querySelectorAll('.mem-slider__dot');
const slidesWidth = window.getComputedStyle(slidesWrapper).width;
const textsWidth = window.getComputedStyle(textsWrapper).width;
let offset = 0;
let textOffset = 0;

slidesInner.style.width = 100 * slides.length + '%';
textsInner.style.width = 100 * texts.length + '%';

slides.forEach(slide => {
    slide.style.width = slidesWidth;
});

texts.forEach(text => {
    text.style.width = textsWidth;
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        if (dot.classList.contains('dot1')) {
            offset = 0;
            textOffset = 0;
        } else if (dot.classList.contains('dot2')) {
            offset = slidesWidth;
            textOffset = textsWidth;
        } else if (dot.classList.contains('dot3')) {
            offset = '1200px';
            textOffset = '500px';
        } else if (dot.classList.contains('dot4')) {
            offset = '1800px';
            textOffset = '750px';
        }

        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');

        slidesInner.style.transform = `translateX(-${offset})`;
        textsInner.style.transform = `translateX(-${textOffset})`;
    });
});
