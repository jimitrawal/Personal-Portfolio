document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.checked = true; 
} else {
  body.classList.remove('dark-mode');
  themeToggle.checked = false; 
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});