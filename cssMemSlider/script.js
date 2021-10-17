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

const selfCheck = `Балл за задание - 150.
* Выполнено всё из секции Требования к репозиторию и как сабмитить задание +30
* Слайдер позиционируется с равными отступами слева и справа +10
* Соблюдено расположение картинок, подписей к ним и контролов +10
* Имеется анимация для смены картинок +20
* Имеется анимация для смены подписей к картинкам +10
* Подписи к картинкам должны быть строковыми значениями (текстом), т.е. текст не должен быть частью картинки +15
* Каждый контрол имеет большую область нажатия, чем размер самого контрола +5
* Контролы имеют интерактивность (момент наведения, момент нажатия, активный контрол, изменение курсора) +10
* Имеется мобильная версия слайдера и соблюдено расположение картинок, подписей к ним и контролов +20
* Используются относительные едициы измерения для основных блоков (rem, em, %, vh, vw, fr and etc... ) +10
// В пикселях указаны только размеры кнопок, что к основным блокам НЕ относится :)
* Все блоки/составные части слайдера (контролы, картинки, подписи к слайдеру) спозиционированы без использования position: absolute +10`;
const consoleStyle = ['padding: 5px;',
    'background: #CDB4B4;',
    'font: 18px Georgia;',
    'color: black;'].join('');

console.log('%c%s', consoleStyle, selfCheck);

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
            offset = `${Number(slidesWidth.slice(0, -2)) * 2}px`;
            textOffset = `${Number(textsWidth.slice(0, -2)) * 2}px`;
        } else if (dot.classList.contains('dot4')) {
            offset = `${Number(slidesWidth.slice(0, -2)) * 3}px`;
            textOffset = `${Number(textsWidth.slice(0, -2)) * 3}px`;
        }

        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');

        slidesInner.style.transform = `translateX(-${offset})`;
        textsInner.style.transform = `translateX(-${textOffset})`;
    });
});
