# portfolio-page

A single page portfolio with tab navigation and dynamic content. When navigating, panels are displayed on the left containing information for and by utilising a variety of animations.

I used keyframe animations to animate the header and buttons sliding in at the bottom, the navigation panel sliding up and quick vertical fade-ins for the panels. For the navigation I added an event listener on each tab that parsed in the relevant panel. It then called a function on it using Array.from and .forEach that set the display of all panels to "none" and the relevent one to "flex"
