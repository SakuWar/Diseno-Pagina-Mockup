// JavaScript para controlar la animación del scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scroll-down');
    } else {
        header.classList.remove('scroll-down');
    }
});
