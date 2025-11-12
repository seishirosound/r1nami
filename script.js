document.addEventListener('DOMContentLoaded', function() {
    // Platform selection
    const platformButtons = document.querySelectorAll('.platform-btn');
    const downloadLinks = {
        windows: {
            yandex: 'https://yadi.sk/d/example-windows',
            google: 'https://drive.google.com/example-windows',
            dropbox: 'https://dropbox.com/example-windows'
        },
        macos: {
            yandex: 'https://yadi.sk/d/example-macos',
            google: 'https://drive.google.com/example-macos',
            dropbox: 'https://dropbox.com/example-macos'
        },
        linux: {
            yandex: 'https://yadi.sk/d/example-linux',
            google: 'https://drive.google.com/example-linux',
            dropbox: 'https://dropbox.com/example-linux'
        }
    };

    platformButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.dataset.platform;
            
            // Update active button
            platformButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update download card
            const downloadCard = document.querySelector('.download-card');
            const title = downloadCard.querySelector('h4');
            const link = downloadCard.querySelector('.btn-download');
            const alternatives = downloadCard.querySelectorAll('.alternative-link');
            
            switch(platform) {
                case 'windows':
                    title.textContent = 'R1NAMI для Windows';
                    link.href = downloadLinks.windows.yandex;
                    alternatives[0].href = downloadLinks.windows.google;
                    alternatives[1].href = downloadLinks.windows.dropbox;
                    break;
                case 'macos':
                    title.textContent = 'R1NAMI для macOS';
                    link.href = downloadLinks.macos.yandex;
                    alternatives[0].href = downloadLinks.macos.google;
                    alternatives[1].href = downloadLinks.macos.dropbox;
                    break;
                case 'linux':
                    title.textContent = 'R1NAMI для Linux';
                    link.href = downloadLinks.linux.yandex;
                    alternatives[0].href = downloadLinks.linux.google;
                    alternatives[1].href = downloadLinks.linux.dropbox;
                    break;
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .testimonial-card, .screenshot-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Language switcher
    const languageBtn = document.createElement('button');
    languageBtn.className = 'language-btn';
    languageBtn.innerHTML = '<i data-feather="globe"></i>';
    languageBtn.title = 'Switch to English';
    languageBtn.addEventListener('click', function() {
        // In a real app, this would toggle between languages
        alert('Language switching functionality would be implemented here');
    });
    
    const languageSwitch = document.createElement('div');
    languageSwitch.className = 'language-switch';
    languageSwitch.appendChild(languageBtn);
    document.body.appendChild(languageSwitch);
    
    // Re-run feather icons replacement for dynamic content
    feather.replace();
});