alert("the PRICING link will take you to the pricing page. To get back either the logo or HOMEPAGE link. Thank you")

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function(){
	headerEl.classList.toggle("nav-open");
});
