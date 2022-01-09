function exibirGraficoInit() {
    const botoes = document.querySelectorAll("[data-grafico-botao]");
    const graficos = document.querySelectorAll("[data-grafico-img]");

    botoes.forEach((botao, indice) => {
        botao.addEventListener("click", () => {
            limparBotoes();
            botao.classList.add("graficos__botao--ativo");
            carregarGrafico(indice);
        })
    })

    function limparBotoes() {
        botoes.forEach((botao) => {
            botao.classList.remove("graficos__botao--ativo");
        });
    }

    function carregarGrafico(indexAlvo) {
        graficos.forEach((grafico, index) => {
            if (index == indexAlvo) {
                grafico.style.display = "block";
            } else {
                grafico.style.display = "none";
            }
        })
    }

}

export default exibirGraficoInit;