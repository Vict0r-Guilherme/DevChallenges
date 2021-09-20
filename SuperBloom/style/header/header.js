const header = document.querySelector('[data-header]');
const main = document.querySelector('[data-main]');
const menu = document.querySelector('[data-nav-menu]')

window.addEventListener('scroll', ()=>{
    const cordenadas = main.getBoundingClientRect()['y']
    if(cordenadas !== 0){
        header.classList.add('header-vissivel')
    }
    else if(!(menu.classList.contains('active')) && cordenadas == 0 ){
        header.classList.remove('header-vissivel')
    }
    
})