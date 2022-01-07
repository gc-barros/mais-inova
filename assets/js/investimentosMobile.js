function investimentosMobileInit() {
    const botaoAnterior = document.querySelector("[data-carrossel-botao='left']")
    const botaoProximo = document.querySelector("[data-carrossel-botao='right']")
    const tag = document.querySelector("[data-carrossel-tag]");
    const abasAtivos = document.querySelectorAll("[data-ativos]");

    let abaAtual = 0;
    let tagNames = ["ETF", "ESG", "ICO2", "IGCT", "ISEE"]

    if (abasAtivos.length == 4) {
        tagNames = ["ESG", "ICO2", "IGCT", "ISEE"];
    }

    renderizarTag(abaAtual);

    botaoAnterior.addEventListener('click', () => {
        abaAtual--;
        if (abaAtual < 0) {
            abaAtual = abasAtivos.length - 1;
        }
        exibirAba(abaAtual);
    });

    botaoProximo.addEventListener("click", () => {
        abaAtual++;
        if (abaAtual == abasAtivos.length) {
            abaAtual = 0;
        }
        exibirAba(abaAtual);
    });

    function exibirAba(numero) {
        let aba = abasAtivos[numero];

        abasAtivos.forEach((aba) => {
            aba.classList.remove("investimentos__ativos--exibir");
        });

        aba.classList.add("investimentos__ativos--exibir");

        renderizarTag(numero);
    }

    function renderizarTag(numero) {
        tag.textContent = tagNames[numero];
    }

}

export default investimentosMobileInit;