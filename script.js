document.addEventListener('DOMContentLoaded', () => {
    const projetos = document.querySelectorAll('.projeto');

    projetos,forEach((projeto, index) => {
        projeto.style.opacity = '0';
        projeto.style.transform = 'translateY(20px)';
        setTimeout(() => {
            projeto.style.transition = 'all 0.6s ease';
            projeto.style.opacity = '1';
            projeto.style.transform = 'translateY(0)';
        }, index * 200);
    });
});