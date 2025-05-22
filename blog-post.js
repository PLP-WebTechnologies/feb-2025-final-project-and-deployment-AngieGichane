// Get blog post data from URL parameters
function getPostIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Sample comments for blog posts
const comments = {
    1: [
        {
            id: 1,
            name: "Jamie Taylor",
            email: "jamie@example.com",
            date: "May 19, 2025",
            text: "Great article! This really helped me understand HTML5 better. The examples were particularly useful."
        },
        {
            id: 2,
            name: "Chris Nolan",
            email: "chris@example.com",
            date: "May 19, 2025",
            text: "Thanks for sharing this comprehensive guide. I've bookmarked it for future reference!"
        }
    ],
    2: [
        {
            id: 1,
            name: "Rachel Kim",
            email: "rachel@example.com",
            date: "May 16, 2025",
            text: "This guide helped me finally understand CSS Grid after struggling with it for months. The visual examples are particularly helpful!"
        }
    ],
    3: [
        {
            id: 1,
            name: "Dev Thompson",
            email: "dev@example.com",
            date: "May 12, 2025",
            text: "I implemented some of these Promise techniques in our production app and saw great improvements. Thanks for the clear explanations!"
        },
        {
            id: 2,
            name: "Maria Garcia",
            email: "maria@example.com",
            date: "May 11, 2025",
            text: "Great article, but I think you could expand more on error handling with Promises. That would be helpful for beginners."
        }
    ],
    4: [
        {
            id: 1,
            name: "Alex Rivera",
            email: "alex@example.com",
            date: "May 8, 2025",
            text: "These responsive design tips are gold! I've already started implementing them in my current project."
        }
    ],
    5: [
        {
            id: 1,
            name: "Jordan Smith",
            email: "jordan@example.com",
            date: "May 2, 2025",
            text: "As someone with a disability, I really appreciate articles like this that promote web accessibility. Thank you!"
        }
    ],
    6: [
        {
            id: 1,
            name: "Taylor Brown",
            email: "taylor@example.com",
            date: "April 28, 2025",
            text: "The API integration patterns you described are exactly what I needed for my current project. Very practical advice!"
        }
    ]
};

// Full blog content for each post
const fullBlogContent = {
    1: `
        <p>The web development landscape continues to evolve at a rapid pace, with new tools and technologies emerging constantly. In this article, we explore the essential foundations of HTML5 that every web developer should master in 2025.</p>
        
        <h3>What is HTML5?</h3>
        <p>HTML5 is the latest version of the HyperText Markup Language, the standard markup language for creating web pages. It was designed to improve the language with support for multimedia, better structure, and enhanced functionality while maintaining backward compatibility.</p>
        
        <h3>Key Features of HTML5</h3>
        <p>HTML5 introduced several revolutionary features that have transformed web development:</p>
        
        <h4>1. Semantic Elements</h4>
        <p>HTML5 provides meaningful elements that describe their content:</p>
        <pre><code>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;, &lt;footer&gt;</code></pre>
        <p>These elements make your HTML more readable and improve SEO by helping search engines understand your content structure.</p>
        
        <h4>2. Media Elements</h4>
        <p>Native support for audio and video without plugins:</p>
        <pre><code>&lt;video controls&gt;
  &lt;source src="movie.mp4" type="video/mp4"&gt;
  Your browser does not support the video tag.
&lt;/video&gt;</code></pre>
        
        <h4>3. Form Enhancements</h4>
        <p>New input types and attributes make forms more powerful:</p>
        <pre><code>&lt;input type="email" required placeholder="Enter your email"&gt;
&lt;input type="date"&gt;
&lt;input type="range" min="0" max="100"&gt;</code></pre>
        
        <h3>Best Practices for HTML5</h3>
        <p>To write clean, maintainable HTML5 code, follow these guidelines:</p>
        <ul>
            <li>Use semantic elements appropriately</li>
            <li>Always include the HTML5 doctype: <code>&lt;!DOCTYPE html&gt;</code></li>
            <li>Validate your HTML regularly</li>
            <li>Consider accessibility from the start</li>
            <li>Use meaningful class and ID names</li>
        </ul>
        
        <h3>Getting Started</h3>
        <p>Here's a basic HTML5 template to get you started:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Your Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;section&gt;
            &lt;h2&gt;Main Content&lt;/h2&gt;
            &lt;p&gt;Your content goes here.&lt;/p&gt;
        &lt;/section&gt;
    &lt;/main&gt;
    &lt;footer&gt;
        &lt;p&gt;&copy; 2025 Your Name&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        
        <h3>Conclusion</h3>
        <p>HTML5 provides the foundation for modern web development. By understanding its semantic elements, multimedia capabilities, and enhanced form features, you'll be well-equipped to create accessible, SEO-friendly websites that work across all devices and browsers.</p>
        
        <p>Start implementing these HTML5 features in your next project and experience the difference in code quality and user experience!</p>
    `,
    2: `
        <p>CSS Grid and Flexbox are two powerful layout systems that have revolutionized how we create web layouts. While they can sometimes seem to overlap in functionality, each has its strengths and ideal use cases. This comprehensive guide will help you understand when and how to use each.</p>
        
        <h3>Understanding CSS Grid</h3>
        <p>CSS Grid is a two-dimensional layout system designed specifically for creating complex layouts. It allows you to control both rows and columns simultaneously, making it perfect for page-level layouts.</p>
        
        <pre><code>.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
}</code></pre>
        
        <h3>Understanding Flexbox</h3>
        <p>Flexbox is a one-dimensional layout method that excels at distributing space and aligning items within a container. It's perfect for component-level layouts and aligning items.</p>
        
        <pre><code>.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}</code></pre>
        
        <h3>When to Use CSS Grid</h3>
        <ul>
            <li><strong>Two-dimensional layouts:</strong> When you need to control both rows and columns</li>
            <li><strong>Complex page layouts:</strong> Headers, sidebars, main content, footers</li>
            <li><strong>Overlapping elements:</strong> Grid makes it easy to layer elements</li>
            <li><strong>Asymmetrical designs:</strong> When your layout doesn't follow a uniform pattern</li>
        </ul>
        
        <h3>When to Use Flexbox</h3>
        <ul>
            <li><strong>One-dimensional layouts:</strong> Arranging items in a row or column</li>
            <li><strong>Component layouts:</strong> Navigation bars, card layouts, form elements</li>
            <li><strong>Centering content:</strong> Flexbox excels at alignment</li>
            <li><strong>Flexible sizing:</strong> When you want items to grow and shrink</li>
        </ul>
        
        <h3>Grid Template Areas</h3>
        <p>One of Grid's most powerful features is the ability to name areas of your layout:</p>
        
        <pre><code>.container {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar content content"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }</code></pre>
        
        <h3>Flexbox Alignment Properties</h3>
        <p>Flexbox provides powerful alignment capabilities:</p>
        
        <pre><code>.flex-container {
    display: flex;
    
    /* Main axis alignment */
    justify-content: flex-start | flex-end | center | space-between | space-around;
    
    /* Cross axis alignment */
    align-items: flex-start | flex-end | center | baseline | stretch;
    
    /* Direction */
    flex-direction: row | row-reverse | column | column-reverse;
}</code></pre>
        
        <h3>Combining Grid and Flexbox</h3>
        <p>The most effective approach often involves using both together:</p>
        
        <pre><code>/* Grid for overall page layout */
.page-layout {
    display: grid;
    grid-template-areas: 
        "header"
        "main"
        "footer";
    min-height: 100vh;
}

/* Flexbox for component layouts */
.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}</code></pre>
        
        <h3>Responsive Design with Grid and Flexbox</h3>
        <p>Both systems excel at creating responsive layouts:</p>
        
        <pre><code>/* Responsive Grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}

/* Responsive Flexbox */
.responsive-flex {
    display: flex;
    flex-wrap: wrap;
}

.flex-item {
    flex: 1 1 300px; /* grow shrink basis */
}</code></pre>
        
        <h3>Conclusion</h3>
        <p>CSS Grid and Flexbox are complementary technologies. Use Grid for two-dimensional layouts and overall page structure, and use Flexbox for one-dimensional layouts and component-level alignment. Understanding both will make you a more effective CSS developer.</p>
    `,
    3: `
        <p>JavaScript Promises revolutionized how we handle asynchronous operations, providing a cleaner alternative to callback functions. This comprehensive guide covers everything you need to know about Promises, from basic concepts to advanced patterns.</p>
        
        <h3>What are Promises?</h3>
        <p>A Promise is an object representing the eventual completion or failure of an asynchronous operation. Think of it as a placeholder for a value that will be available in the future.</p>
        
        <h3>Promise States</h3>
        <p>A Promise can be in one of three states:</p>
        <ul>
            <li><strong>Pending:</strong> Initial state, neither fulfilled nor rejected</li>
            <li><strong>Fulfilled:</strong> Operation completed successfully</li>
            <li><strong>Rejected:</strong> Operation failed</li>
        </ul>
        
        <h3>Creating Promises</h3>
        <p>You can create a Promise using the Promise constructor:</p>
        
        <pre><code>const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});</code></pre>
        
        <h3>Consuming Promises</h3>
        <p>Use .then() for success and .catch() for errors:</p>
        
        <pre><code>myPromise
    .then(result => {
        console.log(result); // "Operation successful!"
    })
    .catch(error => {
        console.error(error); // "Operation failed!"
    });</code></pre>
        
        <h3>Promise Chaining</h3>
        <p>Chain multiple asynchronous operations:</p>
        
        <pre><code>fetchUser()
    .then(user => fetchUserPosts(user.id))
    .then(posts => filterImportantPosts(posts))
    .then(importantPosts => displayPosts(importantPosts))
    .catch(error => handleError(error));</code></pre>
        
        <h3>Promise.all()</h3>
        <p>Wait for multiple promises to complete:</p>
        
        <pre><code>Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
])
.then(([user, posts, comments]) => {
    console.log("All data loaded:", { user, posts, comments });
})
.catch(error => {
    console.error("One or more requests failed:", error);
});</code></pre>
        
        <h3>Async/Await</h3>
        <p>Modern syntax for working with Promises:</p>
        
        <pre><code>async function loadUserData() {
    try {
        const user = await fetchUser();
        const posts = await fetchUserPosts(user.id);
        const importantPosts = await filterImportantPosts(posts);
        displayPosts(importantPosts);
    } catch (error) {
        handleError(error);
    }
}</code></pre>
        
        <h3>Error Handling Best Practices</h3>
        <p>Always handle errors appropriately:</p>
        
        <pre><code>// Good error handling
async function robustDataFetch() {
    try {
        const data = await fetchData();
        return processData(data);
    } catch (error) {
        console.error("Data fetch failed:", error);
        // Return default data or rethrow
        return getDefaultData();
    } finally {
        // Cleanup code
        hideLoadingSpinner();
    }
}</code></pre>
        
        <h3>Conclusion</h3>
        <p>Promises are essential for modern JavaScript development. They provide a clean, readable way to handle asynchronous operations and form the foundation for async/await syntax. Master these concepts to write better, more maintainable asynchronous code.</p>
    `,
    4: `
        <p>Responsive design ensures your website looks and functions perfectly on any device. This guide covers modern techniques and best practices for creating truly responsive web experiences.</p>
        
        <h3>Mobile-First Approach</h3>
        <p>Start with mobile and progressively enhance:</p>
        
        <pre><code>/* Mobile first */
.container {
    width: 100%;
    padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        padding: 2rem;
    }
}</code></pre>
        
        <h3>Flexible Grids</h3>
        <p>Use CSS Grid and Flexbox for responsive layouts:</p>
        
        <pre><code>.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}</code></pre>
        
        <h3>Responsive Images</h3>
        <p>Optimize images for different screens:</p>
        
        <pre><code>img {
    max-width: 100%;
    height: auto;
}

/* Advanced responsive images */
&lt;img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
     sizes="(max-width: 500px) 100vw, 50vw"
     src="medium.jpg" alt="Responsive image"&gt;</code></pre>
        
        <h3>Typography</h3>
        <p>Scale typography responsively:</p>
        
        <pre><code>/* Fluid typography */
h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Responsive line height */
p {
    line-height: 1.6;
    font-size: clamp(0.875rem, 2.5vw, 1.125rem);
}</code></pre>
        
        <h3>Touch-Friendly Design</h3>
        <p>Design for touch interactions:</p>
        
        <pre><code>.button {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
    /* Adequate spacing for touch */
}</code></pre>
        
        <h3>Performance Optimization</h3>
        <ul>
            <li>Optimize images for different screen densities</li>
            <li>Use modern image formats like WebP</li>
            <li>Implement lazy loading for images</li>
            <li>Minimize CSS and JavaScript</li>
        </ul>
        
        <h3>Testing</h3>
        <p>Test your responsive design thoroughly:</p>
        <ul>
            <li>Use browser developer tools</li>
            <li>Test on real devices</li>
            <li>Use online testing services</li>
            <li>Test with different network speeds</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Responsive design is essential in today's multi-device world. By following these best practices and testing thoroughly, you can create websites that provide excellent experiences across all devices and screen sizes.</p>
    `,
    5: `
        <p>Web accessibility ensures that websites can be used by everyone, including people with disabilities. This guide covers the essential principles and practical techniques for making your websites inclusive and accessible.</p>
        
        <h3>Why Accessibility Matters</h3>
        <ul>
            <li><strong>Inclusivity:</strong> Make your content available to everyone</li>
            <li><strong>Legal compliance:</strong> Many countries require digital accessibility</li>
            <li><strong>Better UX:</strong> Accessibility improvements benefit all users</li>
            <li><strong>SEO benefits:</strong> Accessible sites often rank better</li>
        </ul>
        
        <h3>The POUR Principles</h3>
        
        <h4>1. Perceivable</h4>
        <p>Information must be presentable in ways users can perceive:</p>
        <pre><code>&lt;img src="chart.png" alt="Sales increased 50% from Q1 to Q2"&gt;</code></pre>
        
        <h4>2. Operable</h4>
        <p>Interface components must be operable:</p>
        <pre><code>button:focus {
    outline: 2px solid #005fcc;
    outline-offset: 2px;
}</code></pre>
        
        <h4>3. Understandable</h4>
        <p>Information and UI operation must be understandable:</p>
        <pre><code>&lt;label for="email"&gt;Email Address (required)&lt;/label&gt;
&lt;input type="email" id="email" required&gt;</code></pre>
        
        <h4>4. Robust</h4>
        <p>Content must work with assistive technologies:</p>
        <pre><code>&lt;nav aria-label="Main navigation"&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="/" aria-current="page"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
        
        <h3>Essential ARIA Attributes</h3>
        <pre><code>&lt;button aria-expanded="false" aria-controls="menu"&gt;Menu&lt;/button&gt;
&lt;div id="menu" aria-hidden="true"&gt;...&lt;/div&gt;
&lt;div aria-live="polite" id="status"&gt;&lt;/div&gt;</code></pre>
        
        <h3>Form Accessibility</h3>
        <pre><code>&lt;fieldset&gt;
    &lt;legend&gt;Contact Information&lt;/legend&gt;
    &lt;label for="name"&gt;Name (required)&lt;/label&gt;
    &lt;input type="text" id="name" required&gt;
&lt;/fieldset&gt;</code></pre>
        
        <h3>Color and Contrast</h3>
        <p>Ensure sufficient color contrast:</p>
        <ul>
            <li>4.5:1 ratio for normal text</li>
            <li>3:1 ratio for large text</li>
            <li>Don't rely solely on color to convey information</li>
        </ul>
        
        <h3>Testing Tools</h3>
        <ul>
            <li>axe-core browser extension</li>
            <li>WAVE accessibility evaluator</li>
            <li>Lighthouse accessibility audit</li>
            <li>Screen reader testing</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Web accessibility is not just about compliance—it's about creating inclusive experiences for all users. By following these guidelines and testing regularly, you can ensure your websites are accessible to everyone.</p>
    `,
    6: `
        <p>APIs are the backbone of modern web development, enabling applications to communicate and share data. This comprehensive guide covers everything you need to know about integrating APIs into your web applications.</p>
        
        <h3>Understanding APIs</h3>
        <p>An API (Application Programming Interface) is a set of protocols and tools that allows different software applications to communicate with each other.</p>
        
        <h3>Types of APIs</h3>
        
        <h4>REST APIs</h4>
        <p>Most common type using HTTP methods:</p>
        <ul>
            <li><strong>GET:</strong> Retrieve data</li>
            <li><strong>POST:</strong> Create new data</li>
            <li><strong>PUT:</strong> Update data</li>
            <li><strong>DELETE:</strong> Remove data</li>
        </ul>
        
        <h3>Making API Requests</h3>
        <p>Use the Fetch API for modern JavaScript:</p>
        
        <pre><code>async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}</code></pre>
        
        <h3>POST Requests</h3>
        <pre><code>async function createUser(userData) {
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
    
    return await response.json();
}</code></pre>
        
        <h3>Error Handling</h3>
        <p>Robust error handling is crucial:</p>
        
        <pre><code>async function apiRequest(url, options = {}) {
    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            switch (response.status) {
                case 400:
                    throw new Error('Bad Request');
                case 401:
                    throw new Error('Unauthorized');
                case 404:
                    throw new Error('Not Found');
                default:
                    throw new Error(\`HTTP error! status: \${response.status}\`);
            }
        }
        
        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}</code></pre>
        
        <h3>Authentication</h3>
        <p>Most APIs require authentication:</p>
        
        <pre><code>const response = await fetch('/api/data', {
    headers: {
        'Authorization': \`Bearer \${token}\`,
        'Content-Type': 'application/json'
    }
});</code></pre>
        
        <h3>Rate Limiting</h3>
        <p>Respect API rate limits to avoid being blocked:</p>
        
        <pre><code>class RateLimiter {
    constructor(maxRequests, windowMs) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMs;
        this.requests = [];
    }
    
    async makeRequest(requestFunction) {
        const now = Date.now();
        this.requests = this.requests.filter(
            time => now - time < this.windowMs
        );
        
        if (this.requests.length >= this.maxRequests) {
            const waitTime = this.windowMs - (now - Math.min(...this.requests));
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
        
        this.requests.push(now);
        return await requestFunction();
    }
}</code></pre>
        
        <h3>Best Practices</h3>
        <ul>
            <li>Always handle errors gracefully</li>
            <li>Implement proper authentication</li>
            <li>Cache responses when appropriate</li>
            <li>Respect rate limits</li>
            <li>Use HTTPS for all API communications</li>
            <li>Validate and sanitize all API data</li>
        </ul>
        
        <h3>Testing API Integrations</h3>
        <pre><code>// Mock API responses for testing
const mockFetch = jest.fn();
global.fetch = mockFetch;

test('should fetch user data', async () => {
    const mockUser = { id: 1, name: 'John Doe' };
    mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser
    });
    
    const user = await fetchUserData(1);
    expect(user).toEqual(mockUser);
});</code></pre>
        
        <h3>Conclusion</h3>
        <p>Working with APIs is a fundamental skill in modern web development. By understanding the different types of APIs, implementing proper error handling, and following best practices for authentication and rate limiting, you can build robust applications that effectively leverage external services and data.</p>
    `
};

// Get the current post data
function getCurrentPost() {
    const postId = getPostIdFromURL();
    if (!postId) {
        window.location.href = 'blog.html';
        return null;
    }

    // Try to get from global blog data first, then fallback to local data
    let posts = [];
    if (window.blogData && window.blogData.posts) {
        posts = window.blogData.posts;
    } else {
        // Fallback local data if blog.js hasn't loaded
        posts = [
            {
                id: 1,
                title: "Getting Started with HTML5",
                excerpt: "Learn the basics of HTML5 and how to structure your web pages properly.",
                author: "Alex Johnson",
                authorImage: "/api/placeholder/60/60",
                date: "May 10, 2025",
                category: "Web Development",
                tags: ["HTML5", "Frontend", "Beginner"],
                image: "/api/placeholder/800/400",
                comments: 8
            },
            {
                id: 2,
                title: "CSS Grid vs Flexbox",
                excerpt: "Understand the differences between CSS Grid and Flexbox and when to use each.",
                author: "Samantha Lee",
                authorImage: "/api/placeholder/60/60",
                date: "May 7, 2025",
                category: "CSS",
                tags: ["CSS", "Layout", "Design"],
                image: "/api/placeholder/800/400",
                comments: 12
            },
            {
                id: 3,
                title: "JavaScript Promises Explained",
                excerpt: "Master asynchronous JavaScript with a deep dive into Promises.",
                author: "Michael Brown",
                authorImage: "/api/placeholder/60/60",
                date: "May 5, 2025",
                category: "JavaScript",
                tags: ["JavaScript", "Async", "Intermediate"],
                image: "/api/placeholder/800/400",
                comments: 5
            },
            {
                id: 4,
                title: "Responsive Design Best Practices",
                excerpt: "Learn how to create websites that look great on any device.",
                author: "Alex Johnson",
                authorImage: "/api/placeholder/60/60",
                date: "May 3, 2025",
                category: "Web Design",
                tags: ["CSS", "Responsive", "Mobile"],
                image: "/api/placeholder/800/400",
                comments: 9
            },
            {
                id: 5,
                title: "Introduction to Accessibility",
                excerpt: "Make your websites accessible to everyone with these essential tips.",
                author: "Samantha Lee",
                authorImage: "/api/placeholder/60/60",
                date: "April 28, 2025",
                category: "Web Development",
                tags: ["Accessibility", "ARIA", "UX"],
                image: "/api/placeholder/800/400",
                comments: 3
            },
            {
                id: 6,
                title: "Working with APIs",
                excerpt: "Learn how to integrate third-party APIs into your web applications.",
                author: "Michael Brown",
                authorImage: "/api/placeholder/60/60",
                date: "April 25, 2025",
                category: "JavaScript",
                tags: ["API", "JavaScript", "Backend"],
                image: "/api/placeholder/800/400",
                comments: 7
            }
        ];
    }

    return posts.find(post => post.id === postId);
}

// Display the post header
function displayPostHeader(post) {
    const postHeader = document.getElementById('postHeader');
    if (!postHeader || !post) return;

    // Update page title
    document.title = `${post.title} | MiniBlog`;

    postHeader.innerHTML = `
        <div class="post-category">
            <span class="category-tag">${post.category}</span>
        </div>
        <h1 class="post-title">${post.title}</h1>
        <div class="post-meta">
            <div class="post-author-info">
                <div class="author-details">
                    <span class="author-name">By ${post.author}</span>
                    <span class="post-date">${post.date}</span>
                </div>
            </div>
            <div class="post-stats">
                <span class="comment-count">
                    <i class="fas fa-comment"></i>
                    ${post.comments} Comments
                </span>
            </div>
        </div>
    `;
}

// Display the post content
function displayPostContent(post) {
    const postContent = document.getElementById('postContent');
    if (!postContent || !post) return;

    const content = fullBlogContent[post.id] || `
        <p>${post.excerpt}</p>
        <p>This is the full content of the blog post. In a real application, this would contain the complete article content.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h3>Section Heading</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `;

    postContent.innerHTML = `
        <div class="post-body">
            ${content}
        </div>
    `;
}

// Display post tags
function displayPostTags(post) {
    const postTags = document.getElementById('postTags');
    if (!postTags || !post || !post.tags) return;

    postTags.innerHTML = `
        <h4>Tags:</h4>
        <div class="tags-list">
            ${post.tags.map(tag => `
                <span class="tag">${tag}</span>
            `).join('')}
        </div>
    `;
}

// Display post navigation (previous/next)
function displayPostNavigation(post) {
    const prevPost = document.getElementById('prevPost');
    const nextPost = document.getElementById('nextPost');
    
    if (!prevPost || !nextPost || !post) return;

    // Get all posts
    let allPosts = [];
    if (window.blogData && window.blogData.posts) {
        allPosts = window.blogData.posts;
    } else {
        // Use the same fallback data as in getCurrentPost
        allPosts = [
            { id: 1, title: "Getting Started with HTML5" },
            { id: 2, title: "CSS Grid vs Flexbox" },
            { id: 3, title: "JavaScript Promises Explained" },
            { id: 4, title: "Responsive Design Best Practices" },
            { id: 5, title: "Introduction to Accessibility" },
            { id: 6, title: "Working with APIs" }
        ];
    }

    const currentIndex = allPosts.findIndex(p => p.id === post.id);
    
    // Previous post
    if (currentIndex > 0) {
        const prev = allPosts[currentIndex - 1];
        prevPost.innerHTML = `
            <a href="blog-post.html?id=${prev.id}" class="nav-link prev-link">
                <i class="fas fa-arrow-left"></i>
                <div class="nav-text">
                    <span class="nav-label">Previous Post</span>
                    <span class="nav-title">${prev.title}</span>
                </div>
            </a>
        `;
    } else {
        prevPost.innerHTML = '';
    }

    // Next post
    if (currentIndex < allPosts.length - 1) {
        const next = allPosts[currentIndex + 1];
        nextPost.innerHTML = `
            <a href="blog-post.html?id=${next.id}" class="nav-link next-link">
                <div class="nav-text">
                    <span class="nav-label">Next Post</span>
                    <span class="nav-title">${next.title}</span>
                </div>
                <i class="fas fa-arrow-right"></i>
            </a>
        `;
    } else {
        nextPost.innerHTML = '';
    }
}

// Display comments
function displayComments(postId) {
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;

    const postComments = comments[postId] || [];
    
    if (postComments.length === 0) {
        commentsList.innerHTML = '<p class="no-comments">No comments yet. Be the first to comment!</p>';
        return;
    }

    commentsList.innerHTML = postComments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <div class="comment-author">
                    <div class="author-avatar">
                        ${comment.name.charAt(0).toUpperCase()}
                    </div>
                    <div class="author-info">
                        <h5 class="author-name">${comment.name}</h5>
                        <span class="comment-date">${comment.date}</span>
                    </div>
                </div>
            </div>
            <div class="comment-content">
                <p>${comment.text}</p>
            </div>
        </div>
    `).join('');
}

// Handle comment form submission
function setupCommentForm(postId) {
    const commentForm = document.getElementById('commentForm');
    if (!commentForm) return;

    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('commentName').value.trim();
        const email = document.getElementById('commentEmail').value.trim();
        const text = document.getElementById('commentText').value.trim();
        
        if (!name || !email || !text) {
            alert('Please fill in all fields.');
            return;
        }

        // Create new comment object
        const newComment = {
            id: Date.now(),
            name: name,
            email: email,
            date: new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            }),
            text: text
        };

        // Add to comments array
        if (!comments[postId]) {
            comments[postId] = [];
        }
        comments[postId].push(newComment);

        // Refresh comments display
        displayComments(postId);

        // Clear form
        commentForm.reset();

        // Show success message
        alert('Comment posted successfully!');
    });
}

// Display related posts
function displayRelatedPosts(currentPost) {
    const relatedPosts = document.getElementById('relatedPosts');
    if (!relatedPosts || !currentPost) return;

    // Get all posts
    let allPosts = [];
    if (window.blogData && window.blogData.posts) {
        allPosts = window.blogData.posts;
    } else {
        // Use fallback data
        allPosts = [
            {
                id: 1,
                title: "Getting Started with HTML5",
                excerpt: "Learn the basics of HTML5 and how to structure your web pages properly.",
                image: "/api/placeholder/400/250",
                category: "Web Development"
            },
            {
                id: 2,
                title: "CSS Grid vs Flexbox",
                excerpt: "Understand the differences between CSS Grid and Flexbox and when to use each.",
                image: "/api/placeholder/400/250",
                category: "CSS"
            },
            {
                id: 3,
                title: "JavaScript Promises Explained",
                excerpt: "Master asynchronous JavaScript with a deep dive into Promises.",
                image: "/api/placeholder/400/250",
                category: "JavaScript"
            }
        ];
    }

    // Filter out current post and get posts from same category
    const related = allPosts
        .filter(post => post.id !== currentPost.id)
        .filter(post => post.category === currentPost.category)
        .slice(0, 3);

    // If not enough posts in same category, add other posts
    if (related.length < 3) {
        const otherPosts = allPosts
            .filter(post => post.id !== currentPost.id)
            .filter(post => !related.some(r => r.id === post.id))
            .slice(0, 3 - related.length);
        
        related.push(...otherPosts);
    }

    if (related.length === 0) {
        relatedPosts.innerHTML = '<p>No related posts found.</p>';
        return;
    }

    relatedPosts.innerHTML = related.map(post => `
        <article class="post-card">
            <div class="post-card-image">
                <a href="blog-post.html?id=${post.id}">
                    <img src="${post.image}" alt="${post.title}">
                </a>
            </div>
            <div class="post-card-content">
                <h4 class="post-title">
                    <a href="blog-post.html?id=${post.id}">${post.title}</a>
                </h4>
                <p class="post-excerpt">${post.excerpt}</p>
            </div>
        </article>
    `).join('');
}

// Initialize the blog post page
function initBlogPost() {
    const post = getCurrentPost();
    if (!post) return;

    // Display all sections
    displayPostHeader(post);
    displayPostContent(post);
    displayPostTags(post);
    displayPostNavigation(post);
    displayComments(post.id);
    setupCommentForm(post.id);
    displayRelatedPosts(post);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initBlogPost);