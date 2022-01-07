function investimentosInit() {

    const botoesAbas = document.querySelectorAll('[data-aba]');
    const abasAtivos = document.querySelectorAll('[data-ativos]')

    botoesAbas[0].classList.add("investimentos__aba--atual");
    abasAtivos[0].classList.add("investimentos__ativos--exibir");

    botoesAbas.forEach((botao) => {
        botao.addEventListener('click', () => {
            let numero = botao.dataset.aba;
            console.log(numero)
            destacarBotao(botao);
            exibirAba(numero);
        })
    })

    function exibirAba(numero) {
        let abaAlvo = 0;

        abasAtivos.forEach((aba) => {
            if (aba.dataset.ativos == numero) {
                abaAlvo = aba;
            }
        })

        abasAtivos.forEach((aba) => {
            aba.classList.remove("investimentos__ativos--exibir");
        })

        abaAlvo.classList.add("investimentos__ativos--exibir");
    }

    function destacarBotao(botaoClicado) {
        botoesAbas.forEach((botao) => {
            botao.classList.remove("investimentos__aba--atual");
        })

        botaoClicado.classList.add("investimentos__aba--atual");
    }

}

export default investimentosInit;