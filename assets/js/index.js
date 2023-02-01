const mobileMenuButton = document.querySelector(".sub-header_inner .mobile_menu");
const mobileMenu = document.querySelector(".mobile_menu_container");
const dropdownLinks = document.querySelectorAll(".sub-header .has-icon");
const stickyHeader = document.querySelector(".sub-header");
const forum_option_buttons = document.querySelectorAll(".forum_menu > button");
const modalTitle = document.querySelector(".modal .modal-header .modal-title");
const modalToggleButtons = document.querySelectorAll(".modal .nav-pills .nav-link");

console.log(modalTitle);
// events
mobileMenuButton.addEventListener("click", toggleMobileMenu);
forum_option_buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		e.stopPropagation();
		const dropdown = this.nextElementSibling;
		dropdown.classList.toggle("clicked");
	});
});

modalToggleButtons.forEach((button) => {
	button.addEventListener("click", function () {
		this.parentElement.classList.contains("sign_up") ? (modalTitle.textContent = `Register`) : (modalTitle.textContent = `Sign In`);
	});
});

function toggleMobileMenu(e) {
	e.preventDefault();
	mobileMenu.classList.toggle("active");
}
dropdownLinks.forEach((link, index) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const nextItem = dropdownLinks[index - 1] ?? dropdownLinks[index + 1];
		const nextItemSibling = nextItem.nextElementSibling;
		this.classList.contains("has-icon") && nextItemSibling.classList.contains("active") ? nextItemSibling.classList.remove("active") : null;

		const activeDropdown = this.nextElementSibling;
		this.nextElementSibling.classList.toggle("active");
		const allLinksPerDropdowns = document.querySelectorAll(".sub-header .drop_down * a");

		for (let linkItem of allLinksPerDropdowns) {
			linkItem.addEventListener("click", function () {
				activeDropdown.classList.contains("active") ? activeDropdown.classList.remove("active") : null;
			});
		}
	});
});

// add instersect obersever

const observer = new IntersectionObserver(runObserver);

function runObserver() {}
