document.addEventListener('DOMContentLoaded', () => {
    const urls = {
        produto1: 'https://pay.regularizando-pedido.online/bz5KZbKbRvOG7dL',
        produto2: 'https://pay.regularizando-pedido.online/PyE2Zym4Rp2ZqRb',
        produto3: 'https://pay.regularizando-pedido.online/7vJOGYJop9LgKXd',
        produto4: 'https://pay.regularizando-pedido.online/yOeXZK7rpJ1ZAQa',
        produto5: 'https://pay.regularizando-pedido.online/z0qn3514JQR398m',
        produto6: 'https://pay.regularizando-pedido.online/a9ArZMrRp8RG7xj',
        produto7: 'https://pay.regularizando-pedido.online/meABG990WpAG6Ea',
        produto8: 'https://pay.regularizando-pedido.online/NDr8gm8rDepGBmj',
        produto9: 'https://pay.regularizando-pedido.online/65XDZB7Y0APGVJw'
    };

    const productId = document.body.dataset.productId || new URLSearchParams(window.location.search).get('id');

    if (urls[productId]) {
        const buttons = document.querySelectorAll('.pergunta-botao');
        buttons.forEach(button => {
            button.onclick = (event) => {
                event.preventDefault();
                window.location.href = urls[productId] + window.location.search;
            };
        });
    }
});
