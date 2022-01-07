function verVariacaoInit() {
    const botoesVariacao = document.querySelectorAll("[data-vervariacao]");
    const overlay = document.querySelector("[data-overlay]");
    const modal = document.querySelector("[data-modal]");
    const botaoFechar = document.querySelector("[data-fechar-modal]");

    botoesVariacao.forEach((botao) => {
        botao.addEventListener("click", () => {
            modal.classList.add("modal-ativa");
            overlay.classList.add("overlay-ativo")
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
}

export default verVariacaoInit;