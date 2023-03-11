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

// Declare variables for dom elements
const bandPhotography = document.getElementById("band-photography");
const familyPhotography = document.getElementById("family-photography");
const architecturePhotography = document.getElementById("architecture-photography");

const postersLink = document.getElementById("posters");
const editingLink = document.getElementById("editing");
const digitalDesignLink = document.getElementById("digital-design");

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
let posterImages = document.querySelectorAll(".poster-image");
let photoEditingImages = document.querySelectorAll(".photo-editing-image");
let designImages = document.querySelectorAll(".design-image");


// Animate hero on page load 
handleMainNavigation = () => {
    
}


animatePhotographyHero = () => {
    if (!document.getElementById("hero-photography").classList.contains("hidden")){
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
    document.getElementById("design-section").classList.remove("hidden");
    document.getElementById("portfolio-design").classList.remove("hidden");
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

// Handle animations for portfolios

hideImages = (imagesArray) => {
    let i = 0;
    while (i<imagesArray.length) {
        imagesArray[i].classList.add("hidden");
        i++;
    }
}

showImages = (imagesArray) => {
    let i = 0;
    while (i<imagesArray.length) {
        imagesArray[i].classList.remove("hidden");3
        i++;
    }
    anime({
        targets: imagesArray,
        translateX: [-1000, 0],
        duration: 1000,
        easing: "easeInOutQuad",
        filter: ["blur(5px)", "blur(0px)"],
        opacity: [0, 1],
        })
}

bandPhotography.addEventListener("click", () => {
    hideImages(familyImages);
    hideImages(architectureImages);
    showImages(bandImages);
});

familyPhotography.addEventListener("click", () => {
    hideImages(bandImages);
    hideImages(architectureImages);
    showImages(familyImages);
});

architecturePhotography.addEventListener("click", () => {
    hideImages(bandImages);
    hideImages(familyImages);
    showImages(architectureImages);
});

postersLink.addEventListener("click", () => {
   hideImages(photoEditingImages);
   hideImages(designImages);
   showImages(posterImages); 
});

editingLink.addEventListener("click", () => {
    hideImages(posterImages);
    hideImages(designImages);
    showImages(photoEditingImages);
});

digitalDesignLink.addEventListener("click", () => {
    hideImages(posterImages);
    hideImages(photoEditingImages);
    showImages(designImages);
});