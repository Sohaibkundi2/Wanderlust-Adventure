function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  const menuIcon = document.getElementById("menu-icon");

  navLinks.classList.toggle("nav-active");

  // Toggle Menu Icon (Bars <-> Close)
  if (navLinks.classList.contains("nav-active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times"); // Close Icon
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars"); // Hamburger Icon
  }
}


document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".hero h1", {
    y: -50,  // Slide in from the top
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".hero-lower", {
    y: 50,  // Slide in from the bottom
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.5,
    stagger: 0.3,  // Smooth delay between elements
  });


  gsap.registerPlugin(ScrollTrigger);

  // Animate heading (h2) when it comes into view
  gsap.from(".destination-section h2", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
    color:"",
    scrollTrigger: {
      trigger: ".destination-section h2",
      start: "top 80%", // Starts animation when 80% of the section is in view
      toggleActions: "play none none none",
    },
  });
});






document.addEventListener("DOMContentLoaded", function () {
    // Swiper Initialization
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      on: {
        slideChangeTransitionEnd: function () {
          let slides = document.querySelectorAll(".swiper-slide");
          slides.forEach((slide) => slide.style.transform = "scale(1)");
          document.querySelector(".swiper-slide-active").style.transform = "scale(1.1)";
        },
      },
    });
  
    // GSAP Animation for Smooth Fade-In
    gsap.from(".destination-section", { opacity: 0, y: 50, duration: 1.5, ease: "power2.out" });
    gsap.from(".swiper-slide", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.2, ease: "power2.out" });
  });
  