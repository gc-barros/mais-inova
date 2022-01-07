function investimentosLinksInit() {

    const botoesSaibaMais = document.querySelectorAll("[data-saibamais]");

    botoesSaibaMais.forEach((botao) => {
        botao.addEventListener("click", () => {
            let tipo = capturarTipo(botao);
            let endereco = `https://br.tradingview.com/chart/?symbol=${tipo}`;
            acessarLink(endereco);
        });
    })
    

    function acessarLink(link) {
        window.open(link, '_blank')
    }

    function capturarTipo(botao) {
        let divPai = botao.parentNode;
        divPai = divPai.parentNode;
        let tipo = divPai.querySelector(".investimentos__ativo--tipo");

        return tipo.textContent;
    }

    
}

export default investimentosLinksInit;