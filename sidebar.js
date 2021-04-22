const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".link-holder");
    const navLinks = document.querySelectorAll(".link-holder li");
    const Line2 = document.querySelector(".line2");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        Line2.classList.toggle("burger-active");
    });

    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease fowards ${index / 7}s`;
    });

}

navSlide();