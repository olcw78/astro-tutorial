const hamburgerEl = document.querySelector('.hamburger')! as HTMLDivElement;
const navListEl = document.querySelector('.nav-links')! as HTMLDivElement;

hamburgerEl.addEventListener('click', () => {
    navListEl.classList.toggle('expanded');
    console.log("hamburger clicked!")
});

export {};
