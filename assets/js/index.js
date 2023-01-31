const mobileMenuButton = document.querySelector(".sub-header_inner .mobile_menu");
const mobileMenu = document.querySelector(".mobile_menu_container");
const dropdownLinks = document.querySelectorAll(".sub-header .has-icon");
const stickyHeader = document.querySelector(".sub-header");

// events
mobileMenuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(e) {
	e.preventDefault();
	mobileMenu.classList.toggle("active");
}
dropdownLinks.forEach((link, index) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const nextItem = dropdownLinks[index - 1] ?? dropdownLinks[index + 1];
		const nextItemSibling = nextItem.nextElementSibling;
		if (this.classList.contains("has-icon") && nextItemSibling.classList.contains("active")) {
			nextItemSibling.classList.remove("active");
		}
		const generalThis = this;
		const activeDropdown = generalThis.nextElementSibling;
		generalThis.nextElementSibling.classList.toggle("active");
		const allLinksPerDropdowns = document.querySelectorAll(".sub-header .drop_down * a");

		for (let linkItem of allLinksPerDropdowns) {
			linkItem.addEventListener("click", function () {
				if (activeDropdown.classList.contains("active")) {
					activeDropdown.classList.remove("active");
				}
			});
		}
	});
});

// add instersect obersever

const observer = new IntersectionObserver(runObserver);

function runObserver() {}
