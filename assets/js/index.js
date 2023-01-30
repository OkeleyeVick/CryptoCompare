const mobileMenuButton = document.querySelector(".sub-header_inner .mobile_menu");
const mobileMenu = document.querySelector(".mobile_menu_container");
const dropdownLinks = document.querySelectorAll(".sub-header .has-icon");

// events
mobileMenuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(e) {
	e.preventDefault();
	mobileMenu.classList.toggle("active");
}
dropdownLinks.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		this.nextElementSibling.classList.toggle("active");
	});
});
