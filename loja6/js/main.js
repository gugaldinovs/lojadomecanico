document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://pay.mecanicselecionado.site/nQ7kZ7Rky1030eJ';

    const buttons = document.querySelectorAll('.pergunta-botao');
    buttons.forEach(button => {
        button.onclick = (event) => {
            event.preventDefault();
            window.location.href = url + window.location.search;
        };
    });
});