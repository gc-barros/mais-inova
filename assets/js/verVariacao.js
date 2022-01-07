function verVariacaoInit() {
    const botoesVariacao = document.querySelectorAll("[data-vervariacao]");
    const overlay = document.querySelector("[data-overlay]");
    const modal = document.querySelector("[data-modal]");
    const botaoFechar = document.querySelector("[data-fechar-modal]");
    const grafico = document.querySelector("[data-grafico]");

    botoesVariacao.forEach((botao) => {
        let tipo = capturarTipo(botao);
        let source = `assets/img/graficos/grafico-${tipo}.png`;

        botao.addEventListener("click", () => {
            grafico.setAttribute("src", source);
            setTimeout(() => {
                modal.classList.add("modal-ativa");
                overlay.classList.add("overlay-ativo")
            }, 400)
        })
    })

    botaoFechar.addEventListener('click', () => {
        fecharModal();
    })

    overlay.addEventListener("click", () => {
        fecharModal();
    })

    function fecharModal() {
        modal.classList.add("anima-saida");
        overlay.classList.add("anima-saida");
        setTimeout(() => {
            modal.classList.remove("modal-ativa");
            modal.classList.remove("anima-saida");
            overlay.classList.remove("overlay-ativo");
            overlay.classList.remove("anima-saida");
        }, 400);
    }

    function capturarTipo(botao) {
        let divPai = botao.parentNode;
        divPai = divPai.parentNode;
        let tipo = divPai.querySelector(".investimentos__ativo--tipo");

        return tipo.textContent;
    }
}

export default verVariacaoInit;