document.addEventListener('DOMContentLoaded', () => {
    const projetos = document.querySelectorAll('.projeto');

    projetos.forEach((projeto, index) => {
        projeto.style.opacity = '0';
        projeto.style.transform = 'translateY(20px)';
        setTimeout(() => {
            projeto.style.transition = 'all 0.6s ease';
            projeto.style.opacity = '1';
            projeto.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

function setLanguage(lang) {
    const langs = ['pt', 'en'];
    langs.forEach(l => {
        document.getElementById(l).style.display = (l === lang) ? 'block' : 'none';
    });
    // Salva a preferência do usuário
    localStorage.setItem('preferredLanguage', lang);
}

// Define o idioma ao carregar a página
window.onload = function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    setLanguage(savedLang);
}