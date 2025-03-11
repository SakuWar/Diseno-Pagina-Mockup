// JavaScript para manejar la traducción y el estado
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('language') || 'en';

    // Función para aplicar traducciones
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Actualizar textos
        document.querySelectorAll('[data-en], [data-es]').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
        
        // Actualizar texto del botón
        langToggle.textContent = lang === 'en' ? 'ES' : 'EN';
    };

    // Cargar idioma guardado
    setLanguage(currentLang);

    // Manejador del botón
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'es' : 'en';
        setLanguage(newLang);
    });
});