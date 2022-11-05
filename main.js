// Alterar o estilo de navegação na rolagem

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// Mostrar/esconder faq resposta

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('abrir');

        // Mudar icone

        const icone = faq.querySelector('.faq__icone i');
        if (icone.className === 'uil uil-plus') {
            icone.className = 'uil uil-minus'
        } else {
            icone.className = "uil uil-plus";
        }
    })
})

// Mostrar/esconder nav menu

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = "none";
})

// Fechar o menu nav

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

