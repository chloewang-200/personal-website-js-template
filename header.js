document.addEventListener('DOMContentLoaded', (event) => {
    const headerContent = `
    <div class="first">
        <!-- page title -->
        <div class="pageTitle"><a href="/index.html">Chloe.</a></div>
        <!-- page navigation -->
        <div class="headerContainer">
            <div class="headers">
                <a href="/index.html">home</a>
                <a href="/blogs.html">blogs</a>
                <a href="/gallery.html">gallery</a>
                <a href="/resume.html">resume</a>
            </div>
        </div>
        <!-- drop down menu for smaller screens -->
        <div class="menu-container">
            <div class="menu-icon" onclick="toggleDropdown()">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <div class="dropdown-content">
                <a href="/index.html">home</a>
                <a href="/blogs.html">blogs</a>
                <a href="/gallery.html">gallery</a>
                <a href="/resume.html">resume</a>
            </div>
        </div>
    </div>`;

    const roundBox = document.querySelector('.roundBox');
    const navContainer = document.createElement('div');
    navContainer.innerHTML = headerContent;
    roundBox.insertAdjacentElement('afterbegin', navContainer);

    // New code for setting selected-text
    const currentPath = window.location.pathname;
    const navLinks = navContainer.querySelectorAll('.headerContainer a, .dropdown-content a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Clear previously set selected-text
        link.classList.remove('selected-text');

        let isBlogPage = currentPath.includes('/blogs/');
        
        // Highlight "blogs" link when in the blogs section
        if (isBlogPage && href === '/blogs.html') {
            link.classList.add('selected-text');
        }
        // Highlight "home" link when not in the blogs section
        else if (!isBlogPage && (currentPath === '/' || currentPath === '/index.html') && href === '/index.html') {
            link.classList.add('selected-text');
        }
        else if (!isBlogPage && currentPath.endsWith(href)) {
            link.classList.add('selected-text');
        }
    });
});
