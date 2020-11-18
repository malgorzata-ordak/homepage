

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', ()=> {
    const nav = document.querySelector('.nawigacja--js');

    console.log(nav);
    nav.classList.toggle('nawigacja--open');
})