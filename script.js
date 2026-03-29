// ====== HEADER SCROLL ======
const header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ====== SMOOTH SCROLL NAVIGATION ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====== FADE IN ON SCROLL ======
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(element => {
    observer.observe(element);
});

// ====== FORM SUBMISSION ======
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Simulação de envio - em produção, conectar com backend
        console.log('Formulário enviado:', data);
        
        // Feedback visual
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Mensagem enviada!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// ====== ANIMATE NUMBERS ======
function animateNumber(element, target) {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current.toFixed(0);
    }, 30);
}

// Usar Intersection Observer para animar números quando visíveis
const statNumbers = document.querySelectorAll('.stat-number');
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.getAttribute('data-animated') !== 'true') {
            const text = entry.target.textContent;
            const number = parseInt(text);
            if (!isNaN(number)) {
                animateNumber(entry.target, number);
                entry.target.setAttribute('data-animated', 'true');
            }
            numberObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => numberObserver.observe(stat));

// ====== PARALLAX EFFECT ======
window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.documentElement.style.setProperty('--mouse-x', `${x * 100}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y * 100}%`);
});

// ====== SCROLL REVEAL ======
const reveals = document.querySelectorAll('.service-card, .portfolio-item, .result-card');

const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
            entry.target.style.animationDelay = `${index * 0.1}s`;
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

reveals.forEach(reveal => revealOnScroll.observe(reveal));

// ====== KEYBOARD NAVIGATION ======
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Adicionar funcionalidade conforme necessário
    }
});

// ====== DARK MODE INDICATOR ======
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Log para debug
console.log('Site LetyADS carregado com sucesso! 🚀');