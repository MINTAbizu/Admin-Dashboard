const toggleButton = document.getElementById('toggle-theme');
const themeLink = document.getElementById('theme-style');

toggleButton.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === 'light-mode.css') {
        themeLink.setAttribute('href', 'dark-mode.css');
    } else {
        themeLink.setAttribute('href', 'light-mode.css');
    }
});






document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});