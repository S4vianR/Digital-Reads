/* onClick of the button with id of "mobile-menu-trigger" add the style of display: block to the mobile menu but if clicked again remove the style of display: block from the mobile menu */
const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-icon-close');
const mobileMenuOpen = document.getElementById('mobile-menu-icon-open');

window.onload = () => {
    mobileMenu.style.display = 'none';
    mobileMenuClose.style.display = 'none';
};

mobileMenuTrigger.addEventListener('click', () => {
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        mobileMenuClose.style.display = 'none';
        mobileMenuOpen.style.display = 'block';
    } else {
        mobileMenu.style.display = 'block';
        mobileMenuClose.style.display = 'block';
        mobileMenuOpen.style.display = 'none';
    }
});

