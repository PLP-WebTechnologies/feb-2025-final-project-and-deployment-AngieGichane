// Sample blog post data - Make it globally available
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with HTML5",
        excerpt: "Learn the basics of HTML5 and how to structure your web pages properly.",
        content: "Full content of the HTML5 article goes here...",
        author: "Alex Johnson",
        date: "May 10, 2025",
        category: "Web Development",
        tags: ["HTML5", "Frontend", "Beginner"],
        comments: 8
    },
    {
        id: 2,
        title: "CSS Grid vs Flexbox",
        excerpt: "Understand the differences between CSS Grid and Flexbox and when to use each.",
        content: "Full content of the CSS layout comparison article goes here...",
        author: "Samantha Lee",
        date: "May 7, 2025",
        category: "CSS",
        tags: ["CSS", "Layout", "Design"],
        comments: 12
    },
    {
        id: 3,
        title: "JavaScript Promises Explained",
        excerpt: "Master asynchronous JavaScript with a deep dive into Promises.",
        content: "Full content of the JavaScript Promises article goes here...",
        author: "Michael Brown",
        date: "May 5, 2025",
        category: "JavaScript",
        tags: ["JavaScript", "Async", "Intermediate"],
        comments: 5
    },
    {
        id: 4,
        title: "Responsive Design Best Practices",
        excerpt: "Learn how to create websites that look great on any device.",
        content: "Full content of the responsive design article goes here...",
        author: "Alex Johnson",
        date: "May 3, 2025",
        category: "Web Design",
        tags: ["CSS", "Responsive", "Mobile"],
        comments: 9
    },
    {
        id: 5,
        title: "Introduction to Accessibility",
        excerpt: "Make your websites accessible to everyone with these essential tips.",
        content: "Full content of the accessibility article goes here...",
        author: "Samantha Lee",
        date: "April 28, 2025",
        category: "Web Development",
        tags: ["Accessibility", "ARIA", "UX"],
        comments: 3
    },
    {
        id: 6,
        title: "Working with APIs",
        excerpt: "Learn how to integrate third-party APIs into your web applications.",
        content: "Full content of the API integration article goes here...",
        author: "Michael Brown",
        date: "April 25, 2025",
        category: "JavaScript",
        tags: ["API", "JavaScript", "Backend"],
        comments: 7
    }
];

// Make blog data globally available
window.blogData = {
    posts: blogPosts
};

document.addEventListener('DOMContentLoaded', () => {
    // Get unique categories
    const getUniqueCategories = () => {
        return [...new Set(blogPosts.map(post => post.category))];
    };

    // Display blog posts
    const displayBlogPosts = (posts = blogPosts) => {
        const blogPostsContainer = document.getElementById('blogPosts');
        if (!blogPostsContainer) return;

        blogPostsContainer.innerHTML = '';

        if (posts.length === 0) {
            blogPostsContainer.innerHTML = '<div class="no-results"><p>No posts found. Try a different search term.</p></div>';
            return;
        }

        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'blog-post-card';
            
            postElement.innerHTML = `
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-category">${post.category}</span>
                        <span class="post-date">${post.date}</span>
                    </div>
                    <h3 class="post-title">
                        <a href="blog-post.html?id=${post.id}">${post.title}</a>
                    </h3>
                    <div class="post-excerpt">
                        <p>${post.excerpt}</p>
                    </div>
                    <div class="post-footer">
                        <div class="post-author">
                            <span>${post.author}</span>
                        </div>
                        <div class="post-comments">
                            <i class="fas fa-comment"></i>
                            <span>${post.comments}</span>
                        </div>
                    </div>
                </div>
            `;
            
            blogPostsContainer.appendChild(postElement);
        });
    };

    // Display categories in sidebar
    const displayCategories = () => {
        const categoriesList = document.getElementById('categoriesList');
        if (!categoriesList) return;

        const categories = getUniqueCategories();
        
        categories.forEach(category => {
            const categoryCount = blogPosts.filter(post => post.category === category).length;
            
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="#" data-category="${category}">
                    ${category} <span class="category-count">${categoryCount}</span>
                </a>
            `;
            
            li.querySelector('a').addEventListener('click', function(e) {
                e.preventDefault();
                const selectedCategory = this.getAttribute('data-category');
                const filteredPosts = blogPosts.filter(post => post.category === selectedCategory);
                displayBlogPosts(filteredPosts);
                
                // Update active class
                document.querySelectorAll('#categoriesList a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            });
            
            categoriesList.appendChild(li);
        });
    };

    // Display recent posts in sidebar
    const displayRecentPosts = () => {
        const recentPostsList = document.getElementById('recentPostsList');
        if (!recentPostsList) return;

        // Get 3 most recent posts
        const recentPosts = [...blogPosts]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);
        
        recentPosts.forEach(post => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="blog-post.html?id=${post.id}">
                    <div class="recent-post-info">
                        <h4>${post.title}</h4>
                        <span class="recent-post-date">${post.date}</span>
                    </div>
                </a>
            `;
            
            recentPostsList.appendChild(li);
        });
    };

    // Handle search functionality
    const setupSearch = () => {
        const searchForm = document.getElementById('searchForm');
        const searchInput = document.getElementById('searchInput');
        
        if (!searchForm || !searchInput) return;
        
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                displayBlogPosts();
                return;
            }
            
            const filteredPosts = blogPosts.filter(post => 
                post.title.toLowerCase().includes(searchTerm) || 
                post.excerpt.toLowerCase().includes(searchTerm) || 
                post.category.toLowerCase().includes(searchTerm) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
            
            displayBlogPosts(filteredPosts);
        });
    };

    // Initialize blog page
    const initBlogPage = () => {
        displayBlogPosts();
        displayCategories();
        displayRecentPosts();
        setupSearch();
    };

    // Only run on the blog page
    if (document.querySelector('.blog-content')) {
        initBlogPage();
    }
});