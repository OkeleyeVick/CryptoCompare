const mobileMenuButton = document.querySelector(".sub-header_inner .mobile_menu");
const mobileMenu = document.querySelector(".mobile_menu_container");

// events
mobileMenuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(e) {
	e.preventDefault();
	// if (!mobileMenu.classList.contains("active")) {
	// 	mobileMenu.classList.add("active");
	// } else {
	// 	mobileMenu.classList.remove("active");
	// }
	mobileMenu.classList.toggle("active");
}
