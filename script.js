/////////////// Intersection Observers ///////////////

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("trigger");
        entry.target.classList.add("shown");
      }
    });
  },
  { threshold: 0.5 }
);

let hiddenSections = document.querySelectorAll(".section-content");
hiddenSections.forEach((el) => observer.observe(el));

///////////////// Event Listeners /////////////////

// Declare variables for dom elements
const bandPhotography = document.getElementById("band-photography");
const familyPhotography = document.getElementById("family-photography");
const architecturePhotography = document.getElementById(
  "architecture-photography"
);

const postersLink = document.getElementById("posters");
const editingLink = document.getElementById("editing");
const digitalDesignLink = document.getElementById("digital-design");

const photographySection = document.getElementById("photography-section");
const photographyPortfolio = document.getElementById("portfolio-photography");

const heroPhotography = document.getElementById("hero-photography");
const heroPhotographyText = document.getElementById("hero-photography-text");
const heroPhotographyButtons = document.getElementById(
  "hero-photography-buttons"
);

const heroDesign = document.getElementById("hero-design");
const designSection = document.getElementById("design-section");
const designPortfolio = document.getElementById("portfolio-design");

const heroCrafts = document.getElementById("hero-crafts");
const craftsSection = document.getElementById("crafts-section");
const craftsPortfolio = document.getElementById("portfolio-crafts");

const photographyLink = document.getElementById("photography-link");
const designLink = document.getElementById("design-link");
const craftsLink = document.getElementById("crafts-link");

let bandImages = document.querySelectorAll(".band-image");
let familyImages = document.querySelectorAll(".family-image");
let architectureImages = document.querySelectorAll(".architecture-image");
let posterImages = document.querySelectorAll(".poster-image");
let photoEditingImages = document.querySelectorAll(".photo-editing-image");
let designImages = document.querySelectorAll(".design-image");
let craftImages = document.querySelectorAll(".craft-image");

let currentGallery = bandImages; // Required to set up the current images for image gallery

// Handle mobile menu

const hamburgerIcon = document.getElementById("hamburger-menu-icon");
const exitIcon = document.getElementById("mobile-exit-icon");

hamburgerIcon.addEventListener("click", () => {
  anime({
    targets: document.getElementById("main-nav"),
    translateX: [0, "100vw"],
    duration: 1000,
    easing: "easeOutQuad",
  });
});

exitIcon.addEventListener("click", () => {
  anime({
    targets: document.getElementById("main-nav"),
    translateX: ["100vw", "-100vw"],
    duration: 1000,
    easing: "easeOutQuad",
  });
});

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
  });

  anime({
    targets: heroPhotographyText,
    delay: 2000,
    duration: 3000,
    opacity: [0, 1],
    filter: ["blur(5px", "blur(0px)"],
    easing: "easeOutQuad",
  });

  anime({
    targets: heroPhotographyButtons,
    delay: 2000,
    duration: 2000,
    opacity: [0, 1],
    filter: ["blur(5px", "blur(0px)"],
    easing: "easeOutQuad",
    translateX: [50, 0],
  });
};

window.addEventListener("load", () => {
  animatePhotographyHero(heroPhotography);
});

// Functions to control changing pages

animateSectionOut = (heroDiv, introSection, portfolioSection) => {
  if (heroDiv.classList.contains("hidden")) {
    return;
  }
  anime({
    targets: heroDiv,
    translateX: [0, 1000],
    filter: ["blur(0px)", "blur(5px)"],
    opacity: [1, 0],
    duration: 1500,
    easing: "easeInQuad",
  });
  setTimeout(() => {
    heroDiv.classList.add("hidden");
    introSection.classList.add("hidden");
    portfolioSection.classList.add("hidden");
  }, 1500);
};

animateSectionIn = (heroDiv, introSection, portfolioSection) => {
  introSection.classList.remove("hidden");
  portfolioSection.classList.remove("hidden");
  heroDiv.classList.remove("hidden");
  anime({
    targets: heroDiv,
    translateX: [-1000, 0],
    filter: ["blur(5px)", "blur(0px)"],
    opacity: [0, 1],
    easing: "easeOutQuad",
    duration: 2000,
  });
};

hideCraftsPage = () => {};

photographyLink.addEventListener("click", () => {
  currentGallery = bandImages;
  if (heroPhotography.classList.contains("hidden")) {
    animateSectionOut(heroDesign, designSection, designPortfolio);
    animateSectionOut(heroCrafts, craftsSection, craftsPortfolio);
    setTimeout(() => {
      animateSectionIn(
        heroPhotography,
        photographySection,
        photographyPortfolio
      );
    }, 1500);
  }
});

designLink.addEventListener("click", () => {
  currentGallery = posterImages;
  if (heroDesign.classList.contains("hidden")) {
    animateSectionOut(
      heroPhotography,
      photographySection,
      photographyPortfolio
    );
    animateSectionOut(heroCrafts, craftsSection, craftsPortfolio);
    setTimeout(() => {
      animateSectionIn(heroDesign, designSection, designPortfolio);
    }, 1500);
  }
});

craftsLink.addEventListener("click", () => {
  if (heroCrafts.classList.contains("hidden")) {
    animateSectionOut(heroDesign, designSection, designPortfolio);
    animateSectionOut(
      heroPhotography,
      photographySection,
      photographyPortfolio
    );
    setTimeout(() => {
      animateSectionIn(heroCrafts, craftsSection, craftsPortfolio);
    }, 1500);
  }
  currentGallery = craftImages;
  setupImageGallery(currentGallery);
});

// Handle animations for portfolios

hideImages = (imagesArray) => {
  let i = 0;
  while (i < imagesArray.length) {
    imagesArray[i].classList.add("hidden");
    i++;
  }
};

showImages = (imagesArray) => {
  let i = 0;
  while (i < imagesArray.length) {
    imagesArray[i].classList.remove("hidden");
    3;
    i++;
  }
  anime({
    targets: imagesArray,
    translateX: [-1000, 0],
    duration: 1000,
    easing: "easeInOutQuad",
    filter: ["blur(5px)", "blur(0px)"],
    opacity: [0, 1],
  });
};

bandPhotography.addEventListener("click", () => {
  hideImages(familyImages);
  hideImages(architectureImages);
  showImages(bandImages);
  currentGallery = bandImages;
  setupImageGallery(currentGallery);
});

familyPhotography.addEventListener("click", () => {
  currentGallery = familyImages;
  hideImages(bandImages);
  hideImages(architectureImages);
  showImages(familyImages);
  setupImageGallery(currentGallery);
});

architecturePhotography.addEventListener("click", () => {
  hideImages(bandImages);
  hideImages(familyImages);
  showImages(architectureImages);
  currentGallery = architectureImages;
  setupImageGallery(currentGallery);
});

postersLink.addEventListener("click", () => {
  hideImages(photoEditingImages);
  hideImages(designImages);
  showImages(posterImages);
  currentGallery = posterImages;
  setupImageGallery(currentGallery);
});

editingLink.addEventListener("click", () => {
  hideImages(posterImages);
  hideImages(designImages);
  showImages(photoEditingImages);
  currentGallery = photoEditingImages;
  setupImageGallery(currentGallery);
});

digitalDesignLink.addEventListener("click", () => {
  hideImages(posterImages);
  hideImages(photoEditingImages);
  showImages(designImages);
  currentGallery = designImages;
  setupImageGallery(designImages);
});

// Image Gallery

setupImageGallery = (imageArray) => {
  for (let i = 0; i < bandImages.length; i++) {
    imageArray[i].addEventListener("click", () => {
      // Create Elements
      const galleryDiv = document.createElement("div");
      let currentImg = document.createElement("img");
      const galleryExitButton = document.createElement("img");
      const galleryLeftArrow = document.createElement("img");
      const galleryRightArrow = document.createElement("img");

      // Add attributes to created elements
      galleryExitButton.src = "./media/icons/exit-icon.png";
      galleryLeftArrow.src = "./media/icons/left-arrow.png";
      galleryRightArrow.src = "./media/icons/right-arrow.png";
      galleryExitButton.classList.add("gallery-exit");
      galleryLeftArrow.classList.add("gallery-left-arrow");
      galleryRightArrow.classList.add("gallery-right-arrow");
      currentImg.src = imageArray[i].src;
      galleryDiv.classList.add("gallery");

      // Add event listeners
      galleryExitButton.addEventListener("click", () => {
        galleryDiv.remove();
        galleryLeftArrow.remove();
        galleryRightArrow.remove();
      });

      galleryLeftArrow.addEventListener("click", () => {
        if (i === 0) {
          i = imageArray.length;
        }
        currentImg.src = imageArray[i - 1].src;
        i--;
      });

      galleryRightArrow.addEventListener("click", () => {
        if (i === imageArray.length - 1) {
          i = -1;
        }
        currentImg.src = imageArray[i + 1].src;
        i++;
      });
      // Append elements
      galleryDiv.append(currentImg);
      galleryDiv.append(galleryExitButton);
      document.body.append(galleryLeftArrow);
      document.body.append(galleryRightArrow);
      document.body.append(galleryDiv);
    });
  }
};

setupImageGallery(currentGallery);
