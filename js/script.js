window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("scroll-to").style.display = "block";
    } else {
        document.getElementById("scroll-to").style.display = "none";
    }
};

document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function(e) {
		 e.preventDefault();

		 let href = this.getAttribute('href').substring(1);

		 const scrollTarget = document.getElementById(href);

		 const topOffset = document.querySelector('.scrollto').offsetHeight;
		 const elementPosition = scrollTarget.getBoundingClientRect().top;
		 const offsetPosition = elementPosition - topOffset;

		 window.scrollBy({
			  top: offsetPosition,
			  behavior: 'smooth'
		 });
	});
});

let tab = document.querySelectorAll('.try__btn'),
tabContent = document.querySelectorAll('.try__container');

tab.forEach(function(tab, i) {
tab.addEventListener('click', function() {
hideTab();
this.classList.add('active');
tabContent[i].classList.add('tab-content_show');
});
});

function hideTab() {
tab.forEach((item) => {
item.classList.remove('active');
});
tabContent.forEach((item) => {
item.classList.remove('tab-content_show');
});
}

/* Set the width of the side navigation to 0 */


let burger = document.querySelector(".container-burger");
let menu = document.querySelector("#mySidenav");
let body = document.querySelector("body");

burger.onclick = function(){
	menu.classList.toggle("active");
	burger.classList.toggle("change");
	body.classList.toggle("lock");
};

function closeNav() {
	menu.classList.toggle("active");
	burger.classList.remove("change");
	body.classList.remove("lock");
}


document.addEventListener('DOMContentLoaded', () => { 

	const button = document.querySelector('.header__button') // находим кнопку для открытия/закрытия окна навигации
	const nav = document.querySelector('.nav') // находим окно навигации
 
	window.addEventListener('click', e => { // при клике в любом месте окна браузера
	  const target = e.target // находим элемент, на котором был клик
	  if (!target.closest('#mySidenav') && !target.closest('.container-burger')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
		menu.classList.remove('active'); // то закрываем окно навигации, удаляя активный класс
		burger.classList.remove("change");
		body.classList.remove("lock");
	  }
	})
 
 })