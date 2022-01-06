function investimentosInit() {

    const botoesAbas = document.querySelectorAll('[data-aba]');
    const abasAtivos = document.querySelectorAll('[data-ativos]')

    botoesAbas.forEach((botao) => {
        botao.addEventListener('click', () => {
            let numero = botao.dataset.aba;
            destacarBotao(botao);
            exibirAba(numero);
        })
    })

    function exibirAba(numero) {
        let aba = abasAtivos[numero];

        abasAtivos.forEach((aba) => {
            aba.classList.remove("investimentos__ativos--exibir");
        })

        aba.classList.add("investimentos__ativos--exibir");
    }

    function destacarBotao(botaoClicado) {
        botoesAbas.forEach((botao) => {
            botao.classList.remove("investimentos__aba--atual");
        })

        botaoClicado.classList.add("investimentos__aba--atual");
    }

}

export default investimentosInit;