function toggleProject() {
    // Toggle the 'show-project' class on the parent container
    const projectContainer = document.querySelector('.project-container');
    projectContainer.classList.toggle('show-project')
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section'); // Corrected to select all sections
let navLinks = document.querySelectorAll('header .navbar a'); // Corrected selector for nav links

// Toggle the navbar when clicking the menu icon
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-times'); // Toggles menu icon to close icon
};

// Highlight active link while scrolling
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY; // Get current scroll position
        let offset = section.offsetTop - 150; // Section's top offset minus threshold
        let height = section.offsetHeight; // Height of the section
        let id = section.getAttribute('id'); // Section ID

        if (top >= offset && top < offset + height) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the current section's link
            let activeLink = document.querySelector(`header .navbar a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Close navbar on scroll if it is active
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-times');
    }
};
