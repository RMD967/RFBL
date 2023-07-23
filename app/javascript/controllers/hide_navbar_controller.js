import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("hide-navbar controller connected.");
    this.observeHomeBannerRadioContent();
  }

  observeHomeBannerRadioContent() {
    const homeBannerRadioContent = document.querySelector('.home-banner-radio-content');
    if (!homeBannerRadioContent) return;

    // Create a new IntersectionObserver to observe the visibility of the element
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // When the element becomes visible, hide the navbar
          this.hideNavbar();
        } else {
          // When the element is not visible, show the navbar
          this.showNavbar();
        }
      }
    });

    // Observe the visibility changes of the homeBannerRadioContent element
    observer.observe(homeBannerRadioContent);
  }

  hideNavbar() {
    const navbarTarget = document.querySelector('[data-hide-navbar-target="navbar"]');
    if (navbarTarget) {
      console.log("Hiding the navbar");
      navbarTarget.classList.add("hide_navbar_banner_content");
    }
  }

  showNavbar() {
    const navbarTarget = document.querySelector('[data-hide-navbar-target="navbar"]');
    if (navbarTarget) {
      console.log("Showing the navbar");
      navbarTarget.classList.remove("hide_navbar_banner_content");
    }
  }
}
