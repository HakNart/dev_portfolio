// About Tab
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section")

tabsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

// Portfolio Detail PopUp
document.addEventListener('click', (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0,0);
    fillPortfolioItemDetails(e.target.parentElement);
  }
});

document.querySelector(".pp-close").addEventListener('click', togglePortfolioPopup);

// Hide popup even when click outside the popup box
document.addEventListener('click', (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out")
}

function fillPortfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

  document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// Toggle Navigation Bar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener('click', (e) => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out")
}

function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

// Active Section
document.addEventListener('click', (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    const sectionId = e.target.hash; // sectionId matches with href in the link-item elements
    navToggler.classList.add("hide");
    // Overlay section to prevent multiclicks
    document.querySelector(".overlay").classList.add("active");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document.querySelector("section.active").classList.remove("active", "fade-out");
      document.querySelector(sectionId).classList.add("active");
      window.scrollTo(0,0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 300)
  }
});