const aboutButton = document.getElementById("about-button");
const projectsButton = document.getElementById("projects-button");
const infoPanel = document.getElementById("info-panel");
const projectSlider = document.getElementById("project-slider");
const aboutPanel = document.getElementById("about-panel");
const aboutImage = document.getElementById("about-image");

function toggleElements() {
	aboutButton.addEventListener("click", function () {
		aboutPanel.style.display = "flex";
		aboutImage.style.display = "flex";
		aboutPanel.style.animation = "aboutSlideIn 3s forwards";
		projectSlider.style.animation = "navSlideOut 2s forwards";
	});

	projectsButton.addEventListener("click", function () {
		projectSlider.style.display = "flex";
		projectSlider.style.flexDirection = "column";
		aboutPanel.style.animation = "aboutSlideOut 1.5s forwards";
		projectSlider.style.animation = "navSlideIn 3s forwards";
	});
}

function hideSliderOnLoad() {
	projectSlider.style.display = "none";
	aboutPanel.style.display = "none";
}

hideSliderOnLoad();
toggleElements();
