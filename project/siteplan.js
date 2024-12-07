//
var date = new Date();
var year = date.getFullYear();
document.getElementById('currentyear').innerHTML =year;



document.getElementById('lastdatemodified').innerHTML =document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-container');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});