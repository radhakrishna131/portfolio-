// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
          
        // Contact form submission with email functionality - FIXED VERSION
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                showErrorMessage('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showErrorMessage('Please enter a valid email address.');
                return;
            }
            
            // Create mailto link
            const subject = encodeURIComponent(`Message from ${name} - CSE Portfolio`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto: radhakrishna628191@gmail.com?subject=${subject}&body=${body}`;
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            try {
                // Open default email client
                window.open(mailtoLink, '_blank');
                
                // Show success message
                showSuccessMessage();
                
                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 2000);
                
            } catch (error) {
                console.error('Error sending email:', error);
                showErrorMessage('Failed to open email client. Please copy the email address and send manually.');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });

        function showSuccessMessage() {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }

        function showErrorMessage(message) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            
            // Hide error message after 3 seconds
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }

        // Add scroll animation for elements
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe project cards and other elements
        document.querySelectorAll('.project-card, .contact-item, .about-text').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
                  
