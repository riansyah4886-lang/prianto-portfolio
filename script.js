// ==================== SMOOTH SCROLL & NAVIGATION ====================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger Menu Toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll for internal links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and skill cards
document.querySelectorAll('.project-card, .skill-card, .stat').forEach(el => {
    observer.observe(el);
});

// ==================== ACTIVE NAV LINK ====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value
        };

        // Show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = '✓ Pesan Terkirim!';
        submitBtn.style.background = '#10b981';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);

        // Log untuk development (ganti dengan API call di production)
        console.log('Form Data:', data);
    });
}

// ==================== 3D BACKGROUND ANIMATION ====================
// Animated background particles (simple version tanpa Three.js)
const createParticles = () => {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.insertBefore(particleContainer, document.body.firstChild);

    // Create animated particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 100 + 50;
        const delay = Math.random() * 5;
        const duration = Math.random() * 8 + 15;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${duration}s linear ${delay}s infinite;
            filter: blur(40px);
        `;
        
        particleContainer.appendChild(particle);
    }
};

createParticles();

// ==================== COUNTER ANIMATION ====================
const animateCounters = () => {
    const stats = document.querySelectorAll('.stat h3');
    let hasAnimated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                stats.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    const increment = target / 30;
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = Math.ceil(current) + (stat.textContent.includes('+') ? '+' : stat.textContent.includes('Years') ? '' : '');
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = stat.textContent;
                        }
                    };
                    updateCounter();
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.about-stats').forEach(el => {
        counterObserver.observe(el);
    });
};

animateCounters();

// ==================== MOUSE FOLLOW EFFECT ====================
document.addEventListener('mousemove', (e) => {
    const elements = document.querySelectorAll('.floating-element');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    elements.forEach((el, index) => {
        const moveX = (mouseX - 0.5) * (index + 1) * 50;
        const moveY = (mouseY - 0.5) * (index + 1) * 50;
        
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// ==================== SCROLL PROGRESS BAR ====================
const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #8b5cf6, #a78bfa);
        z-index: 999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

createProgressBar();

// ==================== SKILL PROGRESS ANIMATION ====================
const animateSkillProgress = () => {
    const progressBars = document.querySelectorAll('.progress');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fillProgress 1s ease-out forwards';
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
};

animateSkillProgress();

// ==================== PARALLAX SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ==================== THEME TOGGLE (Optional) ====================
const toggleTheme = () => {
    const theme = localStorage.getItem('theme') || 'dark';
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('light-theme');
};

// ==================== PRELOAD IMAGES ====================
const preloadImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const loadImg = new Image();
        loadImg.src = img.src;
    });
};

window.addEventListener('load', preloadImages);

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    }
});

// ==================== DEBOUNCE FUNCTION ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== WINDOW RESIZE HANDLER ====================
window.addEventListener('resize', debounce(() => {
    console.log('Window resized');
}, 250));

// ==================== LAZY LOADING ====================
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==================== CONSOLE WELCOME MESSAGE ====================
console.log('%c🎨 Welcome to Prianto\'s Portfolio!', 'font-size: 20px; color: #8b5cf6; font-weight: bold;');
console.log('%cDesigned & Developed with 💜 by Prianto', 'font-size: 14px; color: #a78bfa;');
console.log('%cGet in touch: priantop985@gmail.com', 'font-size: 12px; color: #e0e0e0;');