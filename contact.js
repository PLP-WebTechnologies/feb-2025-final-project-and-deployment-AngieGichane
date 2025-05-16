// contact.js - Contact form functionality

document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const nameInput = document.getElementById('nameInput');
            const emailInput = document.getElementById('emailInput');
            const subjectInput = document.getElementById('subjectInput');
            const messageInput = document.getElementById('messageInput');
            
            // Get error message spans
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const subjectError = document.getElementById('subjectError');
            const messageError = document.getElementById('messageError');
            
            // Reset error messages
            nameError.textContent = '';
            emailError.textContent = '';
            subjectError.textContent = '';
            messageError.textContent = '';
            
            // Remove any existing error classes
            nameInput.classList.remove('error');
            emailInput.classList.remove('error');
            subjectInput.classList.remove('error');
            messageInput.classList.remove('error');
            
            // Validate form fields
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                isValid = false;
                nameError.textContent = 'Please enter your name';
                nameInput.classList.add('error');
            }
            
            if (!emailInput.value.trim()) {
                isValid = false;
                emailError.textContent = 'Please enter your email address';
                emailInput.classList.add('error');
            } else if (!isValidEmail(emailInput.value.trim())) {
                isValid = false;
                emailError.textContent = 'Please enter a valid email address';
                emailInput.classList.add('error');
            }
            
            if (!subjectInput.value.trim()) {
                isValid = false;
                subjectError.textContent = 'Please enter a subject';
                subjectInput.classList.add('error');
            }
            
            if (!messageInput.value.trim()) {
                isValid = false;
                messageError.textContent = 'Please enter your message';
                messageInput.classList.add('error');
            }
            
            if (!isValid) {
                return;
            }
            
            // Form is valid - in a real application, you would send this to a server
            // For now, just simulate a successful submission
            
            // Hide form and show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'flex';
            
            // Reset form and show it again after 5 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
            }, 5000);
        });
    }
    
    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
