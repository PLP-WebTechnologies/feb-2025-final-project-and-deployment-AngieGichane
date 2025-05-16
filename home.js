// home.js - Functionality for the home page

document.addEventListener('DOMContentLoaded', function() {
    // Sample blog post data - in a real application, this would come from a server
    const featuredPosts = [
        {
            id: 1,
            title: 'Getting Started with HTML5',
            excerpt: 'Learn the basics of HTML5 and how to structure your web pages properly.',
            image: 'https://via.placeholder.com/600x400',
            author: 'Jane Doe',
            date: 'May 12, 2025',
            category: 'Web Development'
        },
        {
            id: 2,
            title: 'CSS Flexbox Mastery',
            excerpt: 'Master CSS Flexbox layout to create responsive and flexible designs.',
            image: 'https://via.placeholder.com/600x400',
            author: 'John Smith',
            date: 'May 10, 2025',
            category: 'CSS'
        },
        {
            id: 3,
            title: 'JavaScript Fundamentals',
            excerpt: 'Build a solid foundation in JavaScript with these essential concepts.',
            image: 'https://via.placeholder.com/600x400',
            author: 'Alex Johnson',
            date: 'May 8, 2025',
            category: 'JavaScript'
        }
    ];

    // Load featured posts
    function loadFeaturedPosts() {
        const featuredPostsContainer = document.getElementById('featuredPosts');
        
        if (featuredPostsContainer) {
            // Clear any existing content
            featuredPostsContainer.innerHTML = '';
            
            // Add each post to the container
            featuredPosts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.className = 'blog-card';
                
                postElement.innerHTML = `
                    <div class="blog-img">
                        <img src="${post.image}" alt="${post.title}">
                    </div>
                    <div class="blog-content">
                        <div class="blog-date">${post.date} | ${post.category}</div>
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <a href="blog-post.html?id=${post.id}" class="read-more">Read More</a>
                    </div>
                `;
                
                featuredPostsContainer.appendChild(postElement);
            });
        }
    }

    // Handle newsletter subscription form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('emailInput');
            const subscribeMessage = document.getElementById('subscribeMessage');
            
            // Validate email
            if (!emailInput.value.trim()) {
                subscribeMessage.textContent = 'Please enter your email address.';
                subscribeMessage.className = 'form-message error';
                return;
            }
            
            if (!isValidEmail(emailInput.value.trim())) {
                subscribeMessage.textContent = 'Please enter a valid email address.';
                subscribeMessage.className = 'form-message error';
                return;
            }
            
            // Simulate successful subscription
            subscribeMessage.textContent = 'Thank you for subscribing to our newsletter!';
            subscribeMessage.className = 'form-message success';
            
            // Reset form
            newsletterForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                subscribeMessage.textContent = '';
                subscribeMessage.className = 'form-message';
            }, 5000);
        });
    }
    
    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Initialize home page
    loadFeaturedPosts();
});
