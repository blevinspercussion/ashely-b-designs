/////////////// Intersection Observers ///////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        console.log('trigger');
        entry.target.classList.add("shown");
        }
    })
}, {threshold: 0.5})

let hiddenSections = document.querySelectorAll(".section-content");
hiddenSections.forEach((el) => observer.observe(el));


///////////////// Event Listeners /////////////////
const bandPhotography = document.getElementById("band-photography");
const familyPhotography = document.getElementById("family-photography");
const architecturePhotography = document.getElementById("architecture-photography");

const photographySection = document.getElementById("photography-section");
const photographyPortfolio = document.getElementById("portfolio-photography");


const heroPhotographyText = document.getElementById("hero-photography-text");
const heroPhotographyButtons = document.getElementById("hero-photography-buttons");

const photographyLink = document.getElementById("photography-link");
const designLink = document.getElementById("design-link");
const craftsLink = document.getElementById("crafts-link");

let bandImages = document.querySelectorAll(".band-image");
let familyImages = document.querySelectorAll(".family-image");
let architectureImages = document.querySelectorAll(".architecture-image");


// Animate hero on page load 
animatePhotographyHero = () => {
    anime({
        targets: ".hero-photography",
        translateX: [-1000, 0],
        duration: 1500,
        delay: 500,
        filter: ["blur(5px)", "blur(0px)"],
        opacity: [0, 1],
        easing: "easeOutQuad",
    })

    anime({
        targets: heroPhotographyText,
        delay: 2000,
        duration: 3000,
        opacity: [0, 1],
        filter: ["blur(5px", "blur(0px)"],
        easing: "easeOutQuad",
    })

    anime({
        targets: heroPhotographyButtons,
        delay: 2000,
        duration: 2000,
        opacity: [0, 1],
        filter: ["blur(5px", "blur(0px)"],
        easing: "easeOutQuad",
        translateX: [50, 0],
    })
}

window.addEventListener("load", () => {
    animatePhotographyHero();
})

designLink.addEventListener("click", () => {
    if (!document.getElementById("hero-design").classList.contains("hidden")){
        return
    }
    anime({
        targets: ".hero-photography",
        translateX: [0, 1000],
        filter: ["blur(0px)", "blur(5px)"],
        opacity: [1, 0],
        duration: 1500,
        easing: "easeInQuad",
    })
    photographySection.classList.add("hidden");
    photographyPortfolio.classList.add("hidden");
    setTimeout(() => {
        document.getElementById("hero-photography").classList.add("hidden");
        document.getElementById("hero-design").classList.remove("hidden");
        anime({
            targets: ".hero-design",
            translateX: [-1000, 0],
            filter: ["blur(5px)", "blur(0px)"],
            opacity: [0, 1],
            easing: "easeOutQuad",
            duration: 2000,

        })
    }, 1500);

})

// Handle animations for photo portfolio

function hideBandImages() {
    
    let i = 0;
    while (i<bandImages.length) {
        bandImages[i].classList.add("hidden");
        i++;
    }
}

function hideFamilyImages() {
    let i = 0;
    while (i<familyImages.length) {
        familyImages[i].classList.add("hidden");
        i++;        
    }
}

function hideArchitectureImages() {
    let i = 0;
    while (i<architectureImages.length) {
        architectureImages[i].classList.add("hidden");
        i++;
    }
}

function showBandImages() {
    let i = 0;
    i = 0;
    while (i<bandImages.length) {
        bandImages[i].classList.remove("hidden");
        i++;
    }
    anime({
        targets: ".band-image",
        translateX: [-1000, 0],
        duration: 1000,
        easing: "easeInOutQuad",
        filter: ["blur(5px)", "blur(0px)"],
        opacity: [0, 1],
    })
}

function showFamilyImages() {
    i = 0;
    while (i<familyImages.length) {
        familyImages[i].classList.remove("hidden");
        i++;
    }
    anime({
        targets: ".family-image",
        translateX: [-1000, 0],
        duration: 1000,
        easing: "easeInOutQuad",
        filter: ["blur(5px)", "blur(0px)"],
        opacity: [0, 1],
    })
}

function showArchitectureImages() {
    i = 0;
    while (i<architectureImages.length) {
        architectureImages[i].classList.remove("hidden");
        i++;
    }
    anime({
        targets: ".architecture-image",
        translateX: [-1000, 0],
        duration: 1000,
        easing: "easeInOutQuad",
        filter: ["blur(5px)", "blur(0px)"],
        opacity: [0, 1],
    })
}


bandPhotography.addEventListener("click", () => {
    hideFamilyImages();
    hideArchitectureImages();
    showBandImages();
});

familyPhotography.addEventListener("click", () => {
    hideBandImages();
    hideArchitectureImages();
    showFamilyImages();
});

architecturePhotography.addEventListener("click", () => {
    hideBandImages();
    hideFamilyImages();
    showArchitectureImages();
});