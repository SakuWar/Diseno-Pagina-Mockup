document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const sliderWidth = document.querySelector('.slider').offsetWidth;
    
    // Clonar elementos hasta llenar el doble del ancho visible
    let totalWidth = 0;
    let clones = [];
    
    while(totalWidth < sliderWidth * 2) {
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            clone.classList.add('clone');
            track.appendChild(clone);
            clones.push(clone);
            totalWidth += slide.offsetWidth + 40; // Incluir gap
        });
    }
    
    // Animación continua
    let progress = 0;
    const speed = 0.5; // px/ms (ajustar velocidad)
    
    function animate(timestamp) {
        if(!track.style.transform) track.style.transform = 'translateX(0)';
        
        progress -= speed;
        track.style.transform = `translateX(${progress}px)`;
        
        // Reset suave cuando se alcanza el final
        if(-progress >= track.offsetWidth / 2) {
            progress = 0;
        }
        
        requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
});