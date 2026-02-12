
window.addEventListener('scroll', function () {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    const mainHeaderElements = document.querySelectorAll('.main-header');
    if (scrollPercentage >= 6) {
        mainHeaderElements.forEach(el => {
            el.style.color = '#FFD700';
        });
    } else {
        textAccentElements.forEach(el => {
            el.style.color = 'white';
        });
    }
    const textAccentElements = document.querySelectorAll('.text-accent');
    if (scrollPercentage >= 6) {
        textAccentElements.forEach(el => {
            el.style.color = '#FFD700';
        });
    } else {
        textAccentElements.forEach(el => {
            el.style.color = 'white';
        });
    }

    const textAccent1Elements = document.querySelectorAll('.text-accent1');
    if (scrollPercentage >= 15) {
        textAccent1Elements.forEach(el => {
            el.style.color = '#FFD700';
        });
    } else {
        textAccent1Elements.forEach(el => {
            el.style.color = 'white';
        });
    }

    const textAccent2Elements = document.querySelectorAll('.text-accent2');
    if (scrollPercentage >= 25) {
        textAccent2Elements.forEach(el => {
            el.style.color = '#FFD700';
        });
    } else {
        textAccent2Elements.forEach(el => {
            el.style.color = 'white';
        });
    }

    const textAccent3Elements = document.querySelectorAll('.text-accent3');
    if (scrollPercentage >= 30) {
        textAccent3Elements.forEach(el => {
            el.style.color = '#FFD700';
        });
    } else {
        textAccent3Elements.forEach(el => {
            el.style.color = 'white';
        });
    }
});
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-scroll');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.btn-cta, .btn-xl').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function () {
        this.style.transition = 'all 0.3s ease';
    });
    input.addEventListener('blur', function () {
        if (!this.value) {
            this.style.boxShadow = 'none';
        }
    });
});
let lastScrollTop = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.style.background = 'rgba(11, 11, 11, 0.95)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(11, 11, 11, 0.8)';
        header.style.backdropFilter = 'blur(10px)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
document.querySelectorAll('.card-stack').forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out';
            imageObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

images.forEach(img => imageObserver.observe(img));
