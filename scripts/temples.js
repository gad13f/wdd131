const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const currentYearSpan = document.querySelector('#currentyear');
const lastModifiedSpan = document.querySelector('#lastModified');

const today = new Date();
currentYearSpan.textContent = today.getFullYear();
lastModifiedSpan.textContent = document.lastModified;