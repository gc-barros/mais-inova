function carrosselNoticiasInit() {
    const slides = document.querySelectorAll(".principal__slides-noticia");
    const carrousel = document.querySelector(".principal__carrosel");
    const left = document.querySelector(".principal__left-arrow");
    const right = document.querySelector(".principal__right-arrow");

    const SLIDES_COUNT = slides.length;

    let current_slide = 0;

    left.addEventListener("click", () => {
        current_slide--;
        if (current_slide < 0) {
            current_slide = SLIDES_COUNT - 1;
        }
        updateCarouse();
    });

    right.addEventListener("click", () => {
        current_slide++;
        if (current_slide > SLIDES_COUNT - 1) {
            current_slide = 0;
        }
        updateCarouse();
    });

    function updateCarouse() {
        carrousel.style.transform = `translateX(${
            -current_slide * slides[0].offsetWidth
        }px)`;
    }
}

export default carrosselNoticiasInit;