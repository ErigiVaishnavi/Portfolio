document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const hireButton = document.querySelector('.hire-btn');

    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        document.getElementById(pageId).classList.add('active');
        document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Hire Me button functionality
    if (hireButton) {
        hireButton.addEventListener('click', () => {
            showPage('contact');
        });
    }

    // More About Me button functionality
    const moreAboutBtn = document.querySelector('.more-about');
    if (moreAboutBtn) {
        moreAboutBtn.addEventListener('click', () => {
            showPage('about');
        });
    }

    // Typing animation for roles
    const roles = ['Software Developer', 'Web Developer', 'Front-End Developer', 'Python Developer', 'Quick Learner', 'Team Player'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;

    function typeRole() {
        const roleElement = document.querySelector('.typing');
        if (!roleElement) return;

        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, newTextDelay);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, typingDelay);
        } else {
            setTimeout(typeRole, isDeleting ? erasingDelay : typingDelay);
        }
    }

    typeRole();
}); 