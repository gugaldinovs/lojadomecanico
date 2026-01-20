document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://pay.mecanicselecionado.site/meABG9V9815g6Ea';

    const buttons = document.querySelectorAll('.pergunta-botao');
    buttons.forEach(button => {
        button.onclick = (event) => {
            event.preventDefault();
            window.location.href = url + window.location.search;
        };
    });
});