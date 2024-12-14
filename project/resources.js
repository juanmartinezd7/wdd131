document.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById('currentyear').textContent = year;
    document.getElementById('lastdatemodified').textContent = document.lastModified;

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.nav-container');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
});