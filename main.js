import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
  gsap.from(".hero-text", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".circle-bg", {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "elastic.out(1, 0.5)",
  });

  gsap.from(".delivery-man", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    delay: 0.5,
    ease: "back.out(1.7)",
  });

  gsap.from(".burger-card", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.7,
    ease: "power2.out",
  });

  gsap.from(".delivery-card", {
    opacity: 0,
    x: 30,
    duration: 0.8,
    delay: 0.9,
    ease: "power2.out",
  });

  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((stat, index) => {
    const text = stat.textContent;
    const number = parseInt(text.replace(/[^\d]/g, ""));

    if (number) {
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        textContent: 0,
        duration: 2,
        delay: index * 0.1,
        snap: { textContent: 1 },
        onUpdate: function () {
          const current = Math.ceil(this.targets()[0].textContent);
          if (text.includes("M")) {
            stat.innerHTML = current + 'M<span class="plus">+</span>';
          } else if (text.includes("k")) {
            stat.innerHTML = current + 'k<span class="plus">+</span>';
          } else if (text.includes("%")) {
            stat.textContent = current + "%";
          }
        },
      });
    }
  });

  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: ".about-company",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about-company",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".mission-text", {
    scrollTrigger: {
      trigger: ".mission-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: -80,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".mission-image", {
    scrollTrigger: {
      trigger: ".mission-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power3.out",
  });

  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power2.out",
    });
  });

  gsap.from(".journey-intro", {
    scrollTrigger: {
      trigger: ".journey-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".partners-header", {
    scrollTrigger: {
      trigger: ".partners-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
  });

  const partnerCards = document.querySelectorAll(".partner-card");
  partnerCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      scale: 0.9,
      duration: 0.8,
      delay: index * 0.15,
      ease: "back.out(1.5)",
    });
  });

  gsap.to(".floating-card", {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.from(".press-header", {
    scrollTrigger: {
      trigger: ".press-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
  });

  const pressCards = document.querySelectorAll(".press-card");
  pressCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power2.out",
    });
  });

  gsap.from(".footer-brand", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
  });

  const footerColumns = document.querySelectorAll(".footer-column");
  footerColumns.forEach((column, index) => {
    gsap.from(column, {
      scrollTrigger: {
        trigger: ".footer-links",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: index * 0.1,
      ease: "power2.out",
    });
  });
}

document.addEventListener("DOMContentLoaded", initAnimations);
