document.addEventListener('DOMContentLoaded', function() {
    const actionButtons = document.querySelectorAll('.action-buttons a, .action-buttons button');
    actionButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.5)';
            this.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    const header = document.querySelector('header') || document.querySelector('.hero-section');
    if (header) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
    

    const mainContent = document.querySelector('main') || document.querySelector('.content-section');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 300);
    }
    

    const notificationBadge = document.createElement('div');
    notificationBadge.innerHTML = '🔥 New Products!';
    notificationBadge.style.position = 'fixed';
    notificationBadge.style.top = '100px';
    notificationBadge.style.right = '20px';
    notificationBadge.style.backgroundColor = '#0492C2';
    notificationBadge.style.color = 'white';
    notificationBadge.style.padding = '10px 15px';
    notificationBadge.style.borderRadius = '5px';
    notificationBadge.style.fontWeight = 'bold';
    notificationBadge.style.cursor = 'pointer';
    notificationBadge.style.zIndex = '1000';
    notificationBadge.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
    notificationBadge.style.animation = 'pulse 2s infinite';
    

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    notificationBadge.addEventListener('click', function() {
        var section = document.getElementById('new-arrivals');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    document.body.appendChild(notificationBadge);
    

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});