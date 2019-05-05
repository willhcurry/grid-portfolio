const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.navlink');
    const navLinks = document.querySelectorAll('.navlink li');

    
    menu.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .5}s`;
            }
        });
        //Menu animation
        menu.classList.toggle('toggle');
    });


}

navSlide();