document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://pay.mecanicselecionado.site/7vJOGY5Jdn4GKXd';

    const buttons = document.querySelectorAll('.pergunta-botao');
    buttons.forEach(button => {
        button.onclick = (event) => {
            event.preventDefault();
            window.location.href = url + window.location.search;
        };
    });
});