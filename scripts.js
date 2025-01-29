document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    // add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });
});