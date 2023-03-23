const aboutButton = document.getElementById("about-button");
const projectsButton = document.getElementById("projects-button");

const projectPanels = document.getElementById("project-panels");
const projectSlider = document.getElementById("project-slider");
const aboutPanel = document.getElementById("panel-about");
const projectGalleryPanel = document.getElementById("panel-project-gallery");
const musicProductionPanel = document.getElementById("panel-music-production");
const commentBoxPanel = document.getElementById("panel-comment-box");
const movieDataPanel = document.getElementById("panel-movie-data");
const portfolioPagePanel = document.getElementById("panel-portfolio-page");
const reflexGamePanel = document.getElementById("panel-reflex-game");

const navProjectGallery = document.getElementById("nav-project-gallery");
const navMusicProduction = document.getElementById("nav-music-production");
const navCommentBox = document.getElementById("nav-comment-box");
const navMovieData = document.getElementById("nav-movie-data");
const navPortfolioPage = document.getElementById("nav-portfolio-page");
const navReflexGame = document.getElementById("nav-reflex-game");

//toggles the display for the navigation panel and triggers animations for itself and the about panel
projectsButton.addEventListener("click", function () {
	projectPanels.style.animation = "aboutSlideOut 2s forwards";
	projectSlider.style.display = "flex";
	projectSlider.style.animation = "navSlideIn 2s forwards";
});

//creates an array for all panel elements, toggles display to "none" for each and "flex" for panelToShow
function panelToggle(panelToShow) {
	Array.from(document.getElementsByClassName("panel")).forEach((panel) => {
		panel.style.display = "none";
	});
	panelToShow.style.display = "flex";
}

//buttons that passes the relevant panel element to panelToggle when clicked
aboutButton.addEventListener("click", () => panelToggle(aboutPanel));
navProjectGallery.addEventListener("click", () => panelToggle(projectGalleryPanel));
navMusicProduction.addEventListener("click", () => panelToggle(musicProductionPanel));
navCommentBox.addEventListener("click", () => panelToggle(commentBoxPanel));
navMovieData.addEventListener("click", () => panelToggle(movieDataPanel));
navPortfolioPage.addEventListener("click", () => panelToggle(portfolioPagePanel));
navReflexGame.addEventListener("click", () => panelToggle(reflexGamePanel));
