const menuBtn = document.querySelector('[data-menu-btn]');
const banner = document.querySelector('[data-main]');

function toggleMenu(event) {
    if(event.type === "touchstart"){
        event.preventDefault();
    }
    const nav = document.querySelector('[data-nav-menu]')
    nav.classList.toggle('active')

    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);

    const cabecalho = nav.parentNode

    const cordenadasY = banner.getBoundingClientRect()['y']

    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        cabecalho.classList.add('header-vissivel')
    }else if(cordenadasY == 0){
        cabecalho.classList.remove('header-vissivel')
    }
    else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('touchstart', toggleMenu)