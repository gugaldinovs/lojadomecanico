document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://pay.mecanicselecionado.site/lqv1308AOWW3xbj';

    const buttons = document.querySelectorAll('.pergunta-botao');
    buttons.forEach(button => {
        button.onclick = (event) => {
            event.preventDefault();
            window.location.href = url + window.location.search;
        };
    });
});