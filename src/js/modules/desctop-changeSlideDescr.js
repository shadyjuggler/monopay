function changeSlideDescr () {
    const abouts = {
        "0": `Sally. Employer descr.`,

        "1": `Olivia. Employer descr.`,

        "2": `Lucas. Employer descr. `
    }

    if (window.innerWidth > 768) {
        let currentId = 0;

        const prevBtn = document.querySelector(".swiper-button-next"),
        nextBtn = document.querySelector(".swiper-button-prev");
        

        prevBtn.addEventListener("click", () => {
            currentId++;
            showDescr()
        })

        nextBtn.addEventListener("click", () => {
            currentId--;
            showDescr()
        })
    
        function showDescr () {
            if (currentId > 2) {
                currentId = 0;
            }

            if (currentId < 0) {
                currentId = 2;
            }

            console.log(currentId)
            const descr = document.querySelector(".slider-content-descr");
            descr.textContent = abouts[currentId]
        }
    }
}

export default changeSlideDescr;

