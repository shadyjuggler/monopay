function burgerMenu () {
    const openBurger = document.querySelector(".openBurger"),
    closeBurger = document.querySelector(".closeBurger"),
    menu = document.querySelector(".burger-menu .menu");

    openBurger.addEventListener("click", e => {
        e.preventDefault();
        
        openBurger.style.display = "none";
        menu.style.transform = "translateX(0%)";
    })

    closeBurger.addEventListener("click", e => {
        e.preventDefault();

        openBurger.style.display = "block";
        menu.style.transform = "translateX(100%)";
    })
}

export default burgerMenu;