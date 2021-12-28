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
        fecharMenuLateral();
    })

    function fecharMenuLateral() {
        menu.classList.remove("cabecalho__menu--ativo");
        overlay.classList.remove("overlay-ativo");
    }
}

export default menuLateralInit;