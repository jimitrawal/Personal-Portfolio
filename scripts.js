document.addEventListener('DOMContentLoaded', function() {
    // Selecting the nav-toggle checkbox
    const navToggle = document.getElementById('nav-toggle');
    // Selecting all elements with the class nav-link
    const navLinks = document.querySelectorAll('.nav-link');

    // Adding a click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Unchecking the nav-toggle checkbox to hide the navbar
            navToggle.checked = false;
        });
    });
});