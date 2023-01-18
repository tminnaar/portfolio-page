const aboutButton = document.getElementById("about-button");
const projectsButton = document.getElementById("projects-button");
const projectSlider = document.getElementById("project-slider");
const aboutMe = document.getElementById("about-info");

// function navReveal() {
// 	if ((projectSlider.style.display = "none")) {
// 		projectSlider.style.display = "flex";
// 		projectSlider.style.flexDirection = "column";
// 		projectSlider.style.animationName;
// 	}
// }

function toggleElements() {
	aboutButton.addEventListener("click", function () {
		aboutMe.style.display = "flex";
		projectSlider.style.animation = "navSlideOut 3s forwards";
		// projectSlider.style.display = "none";
	});

	projectsButton.addEventListener("click", function () {
		aboutMe.style.display = "none";
		projectSlider.style.display = "flex";
		projectSlider.style.flexDirection = "column";
		projectSlider.style.animation = "navSlideIn 3s forwards";
	});
}

function hideSliderOnLoad() {
	projectSlider.style.display = "none";
}

hideSliderOnLoad();
toggleElements();
