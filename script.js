// Menu Toggle com overlay e botão de fechar - CORRIGIDO
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('nav');
const menuOverlay = document.querySelector('.menu-overlay');

// Abrir menu
menuToggle.addEventListener('click', () => {
    nav.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Previne rolagem quando menu aberto
});

// Fechar menu (botão X)
menuClose.addEventListener('click', () => {
    nav.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaura rolagem
});

// Fechar menu (clicando no overlay)
menuOverlay.addEventListener('click', () => {
    nav.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaura rolagem
});

// Fechar menu ao clicar em um link de navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scrolling para anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        let isValid = true;
        const inputs = this.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        if (isValid) {
            // Here you would normally send the form data to a server
            // For demonstration, we'll just show an alert
            alert('Orçamento solicitado com sucesso! Entraremos em contato em breve para agendar uma visita técnica.');
            this.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
}

// Tooltip para imagens clicáveis
const images = document.querySelectorAll('img');
const tooltip = document.getElementById('tooltip');

images.forEach(img => {
    img.addEventListener('mouseover', function(e) {
        tooltip.style.display = 'block';
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
    });
    
    img.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });
    
    img.addEventListener('mousemove', function(e) {
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
    
    // Add shadow when scrolled
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Slider de destaques com navegação
const destaquesSlider = document.querySelector('.destaques-slider');
const sliderArrowLeft = document.querySelector('.slider-arrow-left');
const sliderArrowRight = document.querySelector('.slider-arrow-right');

if (destaquesSlider && sliderArrowLeft && sliderArrowRight) {
    // Definir a quantidade de pixels para scroll a cada clique
    const scrollAmount = 300;
    
    // Botão de navegação para esquerda
    sliderArrowLeft.addEventListener('click', () => {
        destaquesSlider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Botão de navegação para direita
    sliderArrowRight.addEventListener('click', () => {
        destaquesSlider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Verifique se as setas devem ser exibidas com base na posição do scroll
    destaquesSlider.addEventListener('scroll', () => {
        // Se estiver no início, oculta seta da esquerda
        if (destaquesSlider.scrollLeft <= 10) {
            sliderArrowLeft.style.opacity = '0.5';
        } else {
            sliderArrowLeft.style.opacity = '1';
        }
        
        // Se estiver no final, oculta seta da direita
        if (destaquesSlider.scrollLeft + destaquesSlider.clientWidth >= destaquesSlider.scrollWidth - 10) {
            sliderArrowRight.style.opacity = '0.5';
        } else {
            sliderArrowRight.style.opacity = '1';
        }
    });
    
    // Inicializar estado das setas
    if (destaquesSlider.scrollLeft <= 10) {
        sliderArrowLeft.style.opacity = '0.5';
    }
}