/////////////// Intersection Observers ///////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        console.log('trigger');
        entry.target.classList.add("shown");
        }
    })
}, {threshold: 0.5})

hiddenSections = document.querySelectorAll(".section-content");
hiddenSections.forEach((el) => observer.observe(el));