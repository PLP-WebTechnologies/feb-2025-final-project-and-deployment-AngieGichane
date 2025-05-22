// contact.js - Enhanced contact form functionality with animations and feedback

document.addEventListener('DOMContentLoaded', () => {
    // Handle contact form submission with enhanced validation and animations
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        // Add form fields animation on load
        const formFields = contactForm.querySelectorAll('.form-group');
        formFields.forEach((field, index) => {
            field.style.opacity = 0;
            field.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                field.style.transition = `all 0.5s ease ${index * 0.1}s`;
                field.style.opacity = 1;
                field.style.transform = 'translateY(0)';
            }, 100);
        });
        
        // Create reusable validation function
        const validateField = (input, errorElement, required = true, customValidator = null) => {
            const value = input.value.trim();
            let isValid = true;
            let errorMessage = '';
            
            // Check if required and empty
            if (required && value === '') {
                isValid = false;
                errorMessage = `Please enter your ${input.placeholder.toLowerCase()}`;
            } 
            // Run custom validation if provided
            else if (customValidator && !customValidator.isValid(value)) {
                isValid = false;
                errorMessage = customValidator.message;
            }
            
            // Set validation state
            input.classList.toggle('error', !isValid);
            
            // Show error with animation if invalid
            if (!isValid) {
                errorElement.textContent = errorMessage;
                errorElement.style.opacity = 0;
                errorElement.style.display = 'block';
                
                setTimeout(() => {
                    errorElement.style.transition = 'opacity 0.3s ease';
                    errorElement.style.opacity = 1;
                    
                    // Add subtle shake animation to the input
                    input.classList.add('shake-error');
                    setTimeout(() => input.classList.remove('shake-error'), 500);
                }, 10);
            } else {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
                
                // Add success animation
                if (value !== '') {
                    input.classList.add('success-validation');
                    setTimeout(() => input.classList.remove('success-validation'), 1000);
                }
            }
            
            return isValid;
        };
        
        // Email validator
        const emailValidator = {
            isValid: (email) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            },
            message: 'Please enter a valid email address'
        };
        
        // Live validation as user types (debounced)
        const setupLiveValidation = () => {
            const fields = [
                { input: document.getElementById('nameInput'), error: document.getElementById('nameError') },
                { input: document.getElementById('emailInput'), error: document.getElementById('emailError'), validator: emailValidator },
                { input: document.getElementById('subjectInput'), error: document.getElementById('subjectError') },
                { input: document.getElementById('messageInput'), error: document.getElementById('messageError') }
            ];
            
            fields.forEach(field => {
                if (!field.input || !field.error) return;
                
                let typingTimer;
                const doneTypingInterval = 500;
                
                field.input.addEventListener('keyup', () => {
                    clearTimeout(typingTimer);
                    typingTimer = setTimeout(() => {
                        validateField(field.input, field.error, true, field.validator);
                    }, doneTypingInterval);
                });
                
                field.input.addEventListener('keydown', () => {
                    clearTimeout(typingTimer);
                });
            });
        };
        
        setupLiveValidation();
        
        // Handle form submission
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
            
            // Validate all fields
            const nameValid = validateField(nameInput, nameError);
            const emailValid = validateField(emailInput, emailError, true, emailValidator);
            const subjectValid = validateField(subjectInput, subjectError);
            const messageValid = validateField(messageInput, messageError);
            
            if (!nameValid || !emailValid || !subjectValid || !messageValid) {
                // Add shake animation to the submit button
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.classList.add('shake-error');
                setTimeout(() => submitButton.classList.remove('shake-error'), 500);
                return;
            }
            
            // Form is valid - in a real application, you would send this to a server
            // For now, just simulate a successful submission with smooth animation
            
            // Fade out form with animation
            contactForm.style.transition = 'opacity 0.5s ease';
            contactForm.style.opacity = 0;
            
            setTimeout(() => {
                contactForm.style.display = 'none';
                
                // Prepare success message animation
                formSuccess.style.opacity = 0;
                formSuccess.style.display = 'flex';
                formSuccess.style.transform = 'scale(0.8)';
                
                // Fade in success message with animation
                setTimeout(() => {
                    formSuccess.style.transition = 'all 0.5s ease';
                    formSuccess.style.opacity = 1;
                    formSuccess.style.transform = 'scale(1)';
                }, 50);
                
                // Reset form and show it again after 5 seconds with animation
                setTimeout(() => {
                    // Prepare form reset
                    contactForm.reset();
                    
                    // Fade out success message
                    formSuccess.style.transition = 'all 0.5s ease';
                    formSuccess.style.opacity = 0;
                    formSuccess.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        formSuccess.style.display = 'none';
                        
                        // Show form again with animation
                        contactForm.style.display = 'block';
                        setTimeout(() => {
                            contactForm.style.transition = 'opacity 0.5s ease';
                            contactForm.style.opacity = 1;
                        }, 50);
                    }, 500);
                }, 5000);
            }, 500);
        });
    }
});