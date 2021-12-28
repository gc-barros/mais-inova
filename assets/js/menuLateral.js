function menuLateralInit() {
    const menu = document.querySelector("[data-menu]");
    const hamburguer = document.querySelector("[data-hamburguer]");
    const closeButton = document.querySelector("[data-close-menu]");
    const overlay = document.querySelector("[data-overlay]");
    
    hamburguer.addEventListener("click", () => {
        menu.classList.add("cabecalho__menu--ativo");
        overlay.classList.add("overlay-ativo");
    });
    
    closeButton.addEventListener("click", () => {
        fecharMenuLateral();
    });
    
    overlay.addEventListener('click', () => {
        const menuAtivo = menu.classList.contains("cabecalho__menu--ativo");
        if (menuAtivo) {
            fecharMenuLateral();
        }
    })

    function fecharMenuLateral() {
        menu.classList.add("anima-saida");
        overlay.classList.add("anima-saida");
        setTimeout(() => {
            menu.classList.remove("cabecalho__menu--ativo");
            menu.classList.remove("anima-saida");
            overlay.classList.remove("overlay-ativo");
            overlay.classList.remove("anima-saida");
        }, 400);
    }
}

export default menuLateralInit;