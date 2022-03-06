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