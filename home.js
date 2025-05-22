// Sample featured posts data (if blog.js is not loaded yet)
let featuredPosts = [
    {
        id: 1,
        title: "10 Essential Web Development Tools for 2025",
        excerpt: "Discover the must-have tools that are revolutionizing web development this year and streamlining workflows for developers worldwide.",
        image: "images/web-dev-tools.jpg",
        author: "Alex Morgan",
        date: "May 18, 2025",
        category: "Development"
    },
    {
        id: 2,
        title: "Understanding CSS Grid: A Comprehensive Guide",
        excerpt: "Master the power of CSS Grid layout with this in-depth tutorial covering everything from basic concepts to advanced techniques.",
        image: "images/css-grid.jpg",
        author: "Sarah Johnson",
        date: "May 15, 2025",
        category: "CSS"
    },
    {
        id: 3,
        title: "JavaScript Performance Optimization Strategies",
        excerpt: "Learn how to significantly improve your web application's performance with these proven JavaScript optimization techniques.",
        image: "images/js-performance.jpg",
        author: "Michael Chen",
        date: "May 10, 2025",
        category: "JavaScript"  
    }
];

// Sample testimonials data
const testimonials = [
    {
        name: "David Thompson",
        role: "Frontend Developer",
        company: "TechCorp",
        text: "The tutorials on MiniBlog have been instrumental in helping me level up my CSS skills. Clear explanations with practical examples!",
        avatar: "images/testimonial-1.jpg"
    },
    {
        name: "Sarah Mitchell",
        role: "UX Designer",
        company: "DesignHub",
        text: "As a designer learning to code, I've found MiniBlog to be an invaluable resource. The articles bridge the gap between design theory and technical implementation.",
        avatar: "images/testimonial-2.jpg"
    },
    {
        name: "James Wilson",
        role: "Student",
        company: "Tech University",
        text: "I credit MiniBlog for helping me land my first internship. The practical advice and code examples made complex concepts accessible to me as a beginner.",
        avatar: "images/testimonial-3.jpg"
    }
];

// Sample categories for quick access section
const popularCategories = [
    { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e", count: 12 },
    { name: "CSS", icon: "fab fa-css3", color: "#264de4", count: 8 },
    { name: "React", icon: "fab fa-react", color: "#61dafb", count: 7 },
    { name: "Web Design", icon: "fas fa-paint-brush", color: "#e34c26", count: 5 },
    { name: "Performance", icon: "fas fa-tachometer-alt", color: "#764abc", count: 4 },
    { name: "Accessibility", icon: "fas fa-universal-access", color: "#35495e", count: 3 }
];

// Load featured posts
function loadFeaturedPosts() {
    const featuredPostsContainer = document.getElementById('featuredPosts');
    featuredPostsContainer.innerHTML = '';
    
    // Use blog data if available from blog.js, otherwise use local data
    const postsToShow = window.blogData ? window.blogData.posts.slice(0, 3) : featuredPosts;
    
    postsToShow.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post-card feature-card';
        
        postElement.innerHTML = `
            <div class="post-card-content">
                <span class="post-category">${post.category}</span>
                <h3 class="post-title"><a href="blog-post.html?id=${post.id}">${post.title}</a></h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-author">By ${post.author}</span>
                    <span class="post-date">${post.date}</span>
                </div>
                <a href="blog-post.html?id=${post.id}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        featuredPostsContainer.appendChild(postElement);
    });
}

// Create and add testimonials section
function addTestimonialsSection() {
    const main = document.querySelector('main');
    const newsletterSection = document.querySelector('.newsletter');
    
    // Create testimonials section
    const testimonialsSection = document.createElement('section');
    testimonialsSection.className = 'testimonials';
    
    testimonialsSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">What Our Readers Say</h2>
            <div class="testimonials-slider" id="testimonialsSlider">
                ${testimonials.map(testimonial => `
                    <div class="testimonial-card">
                        <div class="testimonial-content">
                            <p class="testimonial-text">"${testimonial.text}"</p>
                        </div>
                        <div class="testimonial-author">
                            <div class="author-info">
                                <h4 class="author-name">${testimonial.name}</h4>
                                <p class="author-title">${testimonial.role}, ${testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Insert before newsletter
    main.insertBefore(testimonialsSection, newsletterSection);
}

// Create and add categories section
function addCategoriesSection() {
    const main = document.querySelector('main');
    const newsletterSection = document.querySelector('.newsletter');
    
    // Create categories section
    const categoriesSection = document.createElement('section');
    categoriesSection.className = 'categories-section';
    
    categoriesSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">Explore Topics</h2>
            <div class="categories-grid">
                ${popularCategories.map(category => `
                    <a href="blog.html?category=${encodeURIComponent(category.name)}" class="category-card">
                        <div class="category-icon" style="background-color: ${category.color}15; color: ${category.color}">
                            <i class="${category.icon}"></i>
                        </div>
                        <h3 class="category-name">${category.name}</h3>
                        <span class="category-count">${category.count} articles</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
    
    // Insert before newsletter
    main.insertBefore(categoriesSection, newsletterSection);
}

// Handle newsletter subscription
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    const messageElement = document.getElementById('subscribeMessage');
    
    if (!email) {
        messageElement.textContent = 'Please enter a valid email address.';
        messageElement.className = 'form-message error';
        return;
    }
    
    // In a real app, you would send this to a server
    // For this demo, we'll just show a success message
    messageElement.textContent = 'Thank you for subscribing! You will receive our updates soon.';
    messageElement.className = 'form-message success';
    emailInput.value = '';
    
    // Reset message after 3 seconds
    setTimeout(() => {
        messageElement.textContent = '';
        messageElement.className = 'form-message';
    }, 3000);
});

// Add about blog section
function addAboutSection() {
    const main = document.querySelector('main');
    const featuredSection = document.querySelector('.featured-posts');
    
    // Create about section
    const aboutSection = document.createElement('section');
    aboutSection.className = 'about-section';
    
    aboutSection.innerHTML = `
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>About MiniBlog</h2>
                    <p>MiniBlog is a platform dedicated to helping web developers and designers improve their skills through practical tutorials, insightful articles, and industry best practices.</p>
                    <p>Whether you're just starting out or looking to master advanced techniques, our content is crafted to be accessible, actionable, and relevant to the current state of web development.</p>
                    <div class="stats-container">
                        <div class="stat-item">
                            <span class="stat-number">50+</span>
                            <span class="stat-label">Articles</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">5k+</span>
                            <span class="stat-label">Readers</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">12</span>
                            <span class="stat-label">Topics</span>
                        </div>
                    </div>
                    <a href="about.html" class="btn btn-secondary">Learn More About Us</a>
                </div>
            </div>
        </div>
    `;
    
    // Insert after featured section
    main.insertBefore(aboutSection, featuredSection.nextSibling);
}

// Initialize the home page
window.addEventListener('DOMContentLoaded', function() {
    loadFeaturedPosts();
    addAboutSection();
    addCategoriesSection();
    addTestimonialsSection();
});