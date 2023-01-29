const aboutButton = document.getElementById("about-button");
const projectsButton = document.getElementById("projects-button");
const infoPanel = document.getElementById("info-panel");
const projectSlider = document.getElementById("project-slider");
const aboutPanel = document.getElementById("panel-about");
const aboutImage = document.getElementById("about-image");

function toggleElements() {
	aboutButton.addEventListener("click", function () {
		aboutPanel.style.display = "flex";
		projectSlider.style.display = "none";
	});
	projectsButton.addEventListener("click", function () {
		infoPanel.style.animation = "aboutSlideOut 2s forwards";
		projectSlider.style.display = "flex";
		projectSlider.style.animation = "navSlideIn 2s forwards";
	});
}

toggleElements();

function aboutFadeIn() {
	aboutPanel.classList.add("about-fade-in");
}

aboutFadeIn();
