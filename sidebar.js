const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".link-holder");
    const navLinks = document.querySelectorAll(".link-holder li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });

    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease fowards ${index / 7}s`;
    });

}

navSlide();