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


///////////////// Event Listeners /////////////////
bandPhotography = document.getElementById("band-photography");
familyPhotography = document.getElementById("family-photography");
architecturePhotography = document.getElementById("architecture-photography");

let bandImages = document.querySelectorAll(".band-image");
let familyImages = document.querySelectorAll(".family-image");
let architectureImages = document.querySelectorAll(".architecture-image");

animateOut = (elements) => {
    anime({
        targets: elements,
        translateX: [0, 1000],
        duration: 1000,
        easing: "easeInOutQuad",
        filter: ["blur(0px)", "blur(5px)"],
        opacity: [1, 0],
    })
}

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