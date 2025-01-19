// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for elements
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Add projects dynamically
const projects = [
    {
        title: 'Test Automation Framework',
        description: 'Selenium WebDriver based test automation framework',
        link: '#'
    },
    {
        title: 'API Testing Suite',
        description: 'Postman collection for API testing',
        link: '#'
    },
    // Add more projects as needed
];

const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}">View Project</a>
    `;
    projectsGrid.appendChild(projectCard);
});