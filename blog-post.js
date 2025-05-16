// blog-post.js - Individual blog post functionality

document.addEventListener('DOMContentLoaded', function() {
    // Sample blog post data (same as in blog.js)
    const blogPosts = [
        {
            id: 1,
            title: "Getting Started with HTML5",
            excerpt: "Learn the basics of HTML5 and how to structure your web pages properly.",
            content: `
                <p>HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.</p>
                
                <h3>Key Features of HTML5</h3>
                
                <p>HTML5 introduces several new elements and attributes that reflect typical usage on modern websites. Some of them are semantic replacements for common uses of generic block (<code>&lt;div&gt;</code>) and inline (<code>&lt;span&gt;</code>) elements, for example <code>&lt;nav&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>.</p>
                
                <p>Some deprecated elements from HTML 4.01 have been dropped, including purely presentational elements such as <code>&lt;font&gt;</code> and <code>&lt;center&gt;</code>, whose effects are better handled by Cascading Style Sheets (CSS).</p>
                
                <p>There is also a renewed emphasis on the importance of DOM scripting (e.g., JavaScript) in Web behavior.</p>
                
                <h3>Semantic Structure</h3>
                
                <p>HTML5 introduces several new semantic elements to help describe the structure of an HTML document:</p>
                
                <ul>
                    <li><code>&lt;header&gt;</code> - Represents introductory content or navigational aids</li>
                    <li><code>&lt;nav&gt;</code> - Contains navigation links</li>
                    <li><code>&lt;main&gt;</code> - Contains the main content of the document</li>
                    <li><code>&lt;section&gt;</code> - Represents a standalone section of content</li>
                    <li><code>&lt;article&gt;</code> - Represents an independent piece of content</li>
                    <li><code>&lt;aside&gt;</code> - Contains content tangentially related to the content around it</li>
                    <li><code>&lt;footer&gt;</code> - Represents the footer for a document or section</li>
                </ul>
                
                <h3>Getting Started</h3>
                
                <p>The basic structure of an HTML5 document looks like this:</p>
                
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;My HTML5 Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;article&gt;
            &lt;h2&gt;Article Title&lt;/h2&gt;
            &lt;p&gt;Article content goes here...&lt;/p&gt;
        &lt;/article&gt;
        
        &lt;aside&gt;
            &lt;h3&gt;Related Links&lt;/h3&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;Link 2&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/aside&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
        &lt;p&gt;&copy; 2025 My Website&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                
                <p>By using these semantic elements, you make your HTML more descriptive and provide better structure for search engines, screen readers, and other devices to interpret your content.</p>
                
                <h3>Conclusion</h3>
                
                <p>HTML5 represents a significant improvement over previous versions of HTML, providing developers with more semantic options for structuring their content. By learning and implementing HTML5 properly, you'll create more accessible, SEO-friendly, and future-proof websites.</p>
            `,
            author: "Alex Johnson",
            authorImage: "img/team-1.jpg",
            date: "May 10, 2025",
            category: "Web Development",
            tags: ["HTML5", "Frontend", "Beginner"],
            image: "img/post-1.jpg",
            comments: [
                {
                    id: 1,
                    name: "Sarah Thompson",
                    email: "sarah@example.com",
                    date: "May 11, 2025",
                    content: "Great article! I've been looking for a clear explanation of HTML5 semantic elements."
                },
                {
                    id: 2,
                    name: "David Wilson",
                    email: "david@example.com",
                    date: "May 12, 2025",
                    content: "Thanks for sharing! Do you plan to write about CSS Grid next?"
                }
            ]
        },
        {
            id: 2,
            title: "CSS Grid vs Flexbox",
            excerpt: "Understand the differences between CSS Grid and Flexbox and when to use each.",
            content: `
                <p>When it comes to layout in CSS, two powerful systems stand out: CSS Grid and Flexbox. Both offer modern solutions for creating complex layouts, but they each have their own strengths and ideal use cases.</p>
                
                <h3>Understanding Flexbox</h3>
                
                <p>Flexbox (Flexible Box Module) is designed for one-dimensional layouts - either a row or a column. It works great for:</p>
                
                <ul>
                    <li>Navigation menus and bars</li>
                    <li>Centering elements</li>
                    <li>Distributing space between items in a container</li>
                    <li>Aligning items within a container</li>
                </ul>
                
                <p>The key properties for the flex container are:</p>
                
                <pre><code>.container {
    display: flex;
    flex-direction: row | row-reverse | column | column-reverse;
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    align-items: stretch | flex-start | flex-end | center | baseline;
    flex-wrap: nowrap | wrap | wrap-reverse;
}</code></pre>
                
                <p>And for the flex items:</p>
                
                <pre><code>.item {
    flex-grow: number;
    flex-shrink: number;
    flex-basis: length | auto;
    /* shorthand */
    flex: grow shrink basis;
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}</code></pre>
                
                <h3>Understanding CSS Grid</h3>
                
                <p>CSS Grid is designed for two-dimensional layouts - rows and columns together. It's great for:</p>
                
                <ul>
                    <li>Overall page layouts</li>
                    <li>Complex grid-based designs</li>
                    <li>Precisely positioning items</li>
                    <li>Controlling both dimensions simultaneously</li>
                </ul>
                
                <p>The key properties for the grid container are:</p>
                
                <pre><code>.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr | repeat(3, 1fr) | 100px 1fr 200px;
    grid-template-rows: 100px 100px | repeat(2, 100px);
    grid-gap: 10px | 10px 20px;
    grid-template-areas: "header header" "sidebar content" "footer footer";
}</code></pre>
                
                <p>And for the grid items:</p>
                
                <pre><code>.item {
    grid-column: 1 / 3 | 1 / span 2 | auto;
    grid-row: 1 / 2 | auto;
    grid-area: header | 1 / 1 / 2 / 3;
}</code></pre>
                
                <h3>When to Use Each</h3>
                
                <p><strong>Use Flexbox when:</strong></p>
                <ul>
                    <li>You need to align elements in a single row or column</li>
                    <li>You want content to dictate sizing</li>
                    <li>You're creating simple layouts or components</li>
                </ul>
                
                <p><strong>Use Grid when:</strong></p>
                <ul>
                    <li>You need to control both rows and columns</li>
                    <li>You want the container to dictate sizing</li>
                    <li>You're creating complex layouts or overall page structure</li>
                </ul>
                
                <h3>Combining Both</h3>
                
                <p>For many modern websites, the best approach is actually to use both:</p>
                <ul>
                    <li>CSS Grid for the overall page layout</li>
                    <li>Flexbox for alignment within those grid areas</li>
                </ul>
                
                <h3>Conclusion</h3>
                
                <p>Both CSS Grid and Flexbox are powerful tools that have revolutionized how we create layouts on the web. Understanding when and how to use each one will make you a more effective front-end developer. Think of Grid as your layout foundation and Flexbox as your content aligner, and you'll be well on your way to creating beautiful, responsive designs.</p>
            `,
            author: "Samantha Lee",
            authorImage: "img/team-2.jpg",
            date: "May 7, 2025",
            category: "CSS",
            tags: ["CSS", "Layout", "Design"],
            image: "img/post-2.jpg",
            comments: [
                {
                    id: 3,
                    name: "James Rodriguez",
                    email: "james@example.com",
                    date: "May 8, 2025",
                    content: "This really cleared up my confusion! I've been using Flexbox for everything, but now I understand when Grid would be better."
                },
                {
                    id: 4,
                    name: "Emily Chen",
                    email: "emily@example.com",
                    date: "May 9, 2025",
                    content: "Great comparison! Would love to see some real-world examples of layouts that combine both."
                },
                {
                    id: 5,
                    name: "Robert Taylor",
                    email: "robert@example.com",
                    date: "May 10, 2025",
                    content: "I always struggled with choosing between the two. This article makes it clear when to use each. Thank you!"
                }
            ]
        },
        {
            id: 3,
            title: "JavaScript Promises Explained",
            excerpt: "Master asynchronous JavaScript with a deep dive into Promises.",
            content: "Full content of the JavaScript Promises article goes here...",
            author: "Michael Brown",
            authorImage: "img/team-3.jpg",
            date: "May 5, 2025",
            category: "JavaScript",
            tags: ["JavaScript", "Async", "Intermediate"],
            image: "img/post-3.jpg",
            comments: []
        },
        {
            id: 4,
            title: "Responsive Design Best Practices",
            excerpt: "Learn how to create websites that look great on any device.",
            content: "Full content of the responsive design article goes here...",
            author: "Alex Johnson",
            authorImage: "img/team-1.jpg",
            date: "May 3, 2025",
            category: "Web Design",
            tags: ["CSS", "Responsive", "Mobile"],
            image: "img/post-4.jpg",
            comments: []
        },
        {
            id: 5,
            title: "Introduction to Accessibility",
            excerpt: "Make your websites accessible to everyone with these essential tips.",
            content: "Full content of the accessibility article goes here...",
            author: "Samantha Lee",
            authorImage: "img/team-2.jpg",
            date: "April 28, 2025",
            category: "Web Development",
            tags: ["Accessibility", "ARIA", "UX"],
            image: "img/post-5.jpg",
            comments: []
        },
        {
            id: 6,
            title: "Working with APIs",
            excerpt: "Learn how to integrate third-party APIs into your web applications.",
            content: "Full content of the API integration article goes here...",
            author: "Michael Brown",
            authorImage: "img/team-3.jpg",
            date: "April 25, 2025",
            category: "JavaScript",
            tags: ["API", "JavaScript", "Backend"],
            image: "img/post-6.jpg",
            comments: []
        }
    ];

    // Get post ID from URL parameter
    function getPostId() {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));
        return isNaN(postId) ? 1 : postId; // Default to first post if invalid ID
    }

    // Get post by ID
    function getPostById(id) {
        return blogPosts.find(post => post.id === id) || blogPosts[0];
    }

    // Get related posts (same category, excluding current post)
    function getRelatedPosts(currentPost) {
        return blogPosts
            .filter(post => post.category === currentPost.category && post.id !== currentPost.id)
            .slice(0, 3); // Get up to 3 related posts
    }

    // Get next and previous posts
    function getAdjacentPosts(currentId) {
        const maxId = Math.max(...blogPosts.map(post => post.id));
        const minId = Math.min(...blogPosts.map(post => post.id));
        
        const prevId = currentId > minId ? currentId - 1 : null;
        const nextId = currentId < maxId ? currentId + 1 : null;
        
        return {
            prev: prevId ? getPostById(prevId) : null,
            next: nextId ? getPostById(nextId) : null
        };
    }

    // Display post header
    function displayPostHeader(post) {
        const postHeader = document.getElementById('postHeader');
        if (!postHeader) return;

        postHeader.innerHTML = `
            <h1>${post.title}</h1>
            <div class="post-meta">
                <div class="post-author">
                    <img src="${post.authorImage}" alt="${post.author}">
                    <span>${post.author}</span>
                </div>
                <div class="post-date">
                    <i class="far fa-calendar-alt"></i>
                    <span>${post.date}</span>
                </div>
                <div class="post-category">
                    <i class="fas fa-folder"></i>
                    <span>${post.category}</span>
                </div>
                <div class="post-comments">
                    <i class="fas fa-comment"></i>
                    <span>${post.comments.length} Comments</span>
                </div>
            </div>
            <div class="post-featured-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
        `;
    }

    // Display post content
    function displayPostContent(post) {
        const postContent = document.getElementById('postContent');
        if (!postContent) return;

        postContent.innerHTML = post.content;
    }

    // Display post tags
    function displayPostTags(post) {
        const postTags = document.getElementById('postTags');
        if (!postTags) return;

        postTags.innerHTML = '<h4>Tags:</h4><div class="tags-list"></div>';
        
        const tagsList = postTags.querySelector('.tags-list');
        post.tags.forEach(tag => {
            const tagLink = document.createElement('a');
            tagLink.href = `blog.html?tag=${tag}`;
            tagLink.className = 'tag';
            tagLink.textContent = tag;
            tagsList.appendChild(tagLink);
        });
    }

    // Display post navigation (prev/next)
    function displayPostNavigation(currentId) {
        const prevPost = document.getElementById('prevPost');
        const nextPost = document.getElementById('nextPost');
        if (!prevPost || !nextPost) return;

        const adjacentPosts = getAdjacentPosts(currentId);
        
        if (adjacentPosts.prev) {
            prevPost.innerHTML = `
                <a href="blog-post.html?id=${adjacentPosts.prev.id}">
                    <span class="nav-label"><i class="fas fa-arrow-left"></i> Previous Post</span>
                    <span class="nav-title">${adjacentPosts.prev.title}</span>
                </a>
            `;
        } else {
            prevPost.innerHTML = '';
        }
        
        if (adjacentPosts.next) {
            nextPost.innerHTML = `
                <a href="blog-post.html?id=${adjacentPosts.next.id}">
                    <span class="nav-label">Next Post <i class="fas fa-arrow-right"></i></span>
                    <span class="nav-title">${adjacentPosts.next.title}</span>
                </a>
            `;
        } else {
            nextPost.innerHTML = '';
        }
    }

    // Display comments
    function displayComments(post) {
        const commentsList = document.getElementById('commentsList');
        if (!commentsList) return;

        if (post.comments.length === 0) {
            commentsList.innerHTML = '<p class="no-comments">No comments yet. Be the first to leave a comment!</p>';
            return;
        }

        commentsList.innerHTML = '';
        
        post.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-item';
            
            commentElement.innerHTML = `
                <div class="comment-avatar">
                    <img src="img/avatar-placeholder.jpg" alt="${comment.name}">
                </div>
                <div class="comment-content">
                    <div class="comment-header">
                        <h4 class="comment-author">${comment.name}</h4>
                        <span class="comment-date">${comment.date}</span>
                    </div>
                    <div class="comment-text">
                        <p>${comment.content}</p>
                    </div>
                    <div class="comment-reply">
                        <button class="reply-btn">Reply</button>
                    </div>
                </div>
            `;
            
            commentsList.appendChild(commentElement);
        });
    }

    // Display related posts
    function displayRelatedPosts(post) {
        const relatedPostsContainer = document.getElementById('relatedPosts');
        if (!relatedPostsContainer) return;

        const relatedPosts = getRelatedPosts(post);
        
        if (relatedPosts.length === 0) {
            relatedPostsContainer.innerHTML = '<p class="no-related">No related posts found.</p>';
            return;
        }

        relatedPostsContainer.innerHTML = '';
        
        relatedPosts.forEach(relatedPost => {
            const postElement = document.createElement('article');
            postElement.className = 'post-card small-card';
            
            postElement.innerHTML = `
                <div class="post-image">
                    <a href="blog-post.html?id=${relatedPost.id}">
                        <img src="${relatedPost.image}" alt="${relatedPost.title}">
                    </a>
                </div>
                <div class="post-content">
                    <h3 class="post-title">
                        <a href="blog-post.html?id=${relatedPost.id}">${relatedPost.title}</a>
                    </h3>
                    <div class="post-meta">
                        <span class="post-date">${relatedPost.date}</span>
                    </div>
                </div>
            `;
            
            relatedPostsContainer.appendChild(postElement);
        });
    }

    // Handle comment form submission
    function setupCommentForm() {
        const commentForm = document.getElementById('commentForm');
        if (!commentForm) return;

        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('commentName');
            const emailInput = document.getElementById('commentEmail');
            const commentInput = document.getElementById('commentText');
            
            if (!nameInput || !emailInput || !commentInput) return;
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const content = commentInput.value.trim();
            
            if (name === '' || email === '' || content === '') {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, we would send this to a server
            // For now, just simulate adding a comment
            const newComment = {
                id: Date.now(), // Use timestamp as ID
                name: name,
                email: email,
                date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}),
                content: content
            };
            
            const postId = getPostId();
            const post = getPostById(postId);
            
            // Add comment to post
            post.comments.push(newComment);
            
            // Update comments display
            displayComments(post);
            
            // Update comment count in header
            const commentCountElement = document.querySelector('.post-comments span');
            if (commentCountElement) {
                commentCountElement.textContent = `${post.comments.length} Comments`;
            }
            
            // Reset form
            commentForm.reset();
            
            // Show success message
            alert('Your comment has been posted successfully!');
        });
    }

    // Initialize post page
    function initPostPage() {
        const postId = getPostId();
        const post = getPostById(postId);
        
        // Update page title
        document.title = `${post.title} | MiniBlog`;
        
        displayPostHeader(post);
        displayPostContent(post);
        displayPostTags(post);
        displayPostNavigation(postId);
        displayComments(post);
        displayRelatedPosts(post);
        setupCommentForm();
        
        // Set up reply button functionality
        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('reply-btn')) {
                const commentForm = document.getElementById('commentForm');
                if (commentForm) {
                    const commentAuthor = e.target.closest('.comment-item').querySelector('.comment-author').textContent;
                    const commentTextarea = document.getElementById('commentText');
                    
                    if (commentTextarea) {
                        commentTextarea.value = `@${commentAuthor} `;
                        commentTextarea.focus();
                        
                        // Scroll to form
                        commentForm.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    }

    // Only run on the blog post page
    if (document.querySelector('.blog-post')) {
        initPostPage();
    }
});
