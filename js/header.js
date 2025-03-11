// JavaScript modificado para efecto más sutil
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('header');
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll hacia abajo
        header.classList.add('scroll-down');
    } else {
        // Scroll hacia arriba o en parte superior
        header.classList.remove('scroll-down');
    }
    lastScroll = currentScroll;
});
