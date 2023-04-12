function test () {
    const descr = document.querySelector(".slider-content-descr");
    const abouts = {
        "0": `Sally. Employer descr.`,

        "1": `Olivia. Employer descr.`,

        "2": `Lucas. Employer descr. `
    }

    let slides = document.querySelectorAll(".swiper-wrapper .swiper-slide")
    slides.forEach(item => {
        if (item.classList.contains("swiper-slide-active")) {
            descr.textContent = abouts[item.id];
        }
    })
}

export default test;