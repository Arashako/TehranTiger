// ===========================
// TehranTiger - JavaScript
// ===========================

// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuBtn.textContent = "×";
            } else {
                menuBtn.textContent = "☰";
            }

        });

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuBtn.textContent = "☰";

            });

        });

    }

});


// ===========================
// Sticky Navbar
// ===========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.padding = "14px 7%";
        navbar.style.background = "rgba(8,17,31,.92)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.padding = "18px 7%";
        navbar.style.background = "rgba(8,17,31,.55)";
        navbar.style.boxShadow = "none";

    }

});


// ===========================
// Reveal Animation
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });

        }, {
            threshold: 0.15
        });

        sections.forEach(function (section) {

            section.classList.add("fade-up");
            observer.observe(section);

        });

    }

});


// ===========================
// Counter Animation
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll("[data-target]");

    if (!("IntersectionObserver" in window)) return;

    const counterObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;

            const interval = setInterval(function () {

                current++;

                counter.textContent = current;

                if (current >= target) {

                    clearInterval(interval);
                    counter.textContent = target + "+";

                }

            }, 80);

            counterObserver.unobserve(counter);

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(function (counter) {
        counterObserver.observe(counter);
    });

});


// ===========================
// Smooth Scroll
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const href = link.getAttribute("href");

            if (!href || href === "#") return;

            const target = document.querySelector(href);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});


// ===========================
// Back To Top
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    const topBtn = document.createElement("button");

    topBtn.textContent = "↑";
    topBtn.className = "topBtn";

    document.body.appendChild(topBtn);

    topBtn.style.position = "fixed";
    topBtn.style.left = "25px";
    topBtn.style.bottom = "25px";
    topBtn.style.width = "55px";
    topBtn.style.height = "55px";
    topBtn.style.borderRadius = "50%";
    topBtn.style.border = "none";
    topBtn.style.cursor = "pointer";
    topBtn.style.fontSize = "24px";
    topBtn.style.background = "#ff8800";
    topBtn.style.color = "white";
    topBtn.style.display = "none";
    topBtn.style.zIndex = "999";

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {
            topBtn.style.display = "flex";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


// ===========================
// Card Hover Effect
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("mousemove", function (event) {

            if (window.innerWidth <= 768) return;

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            card.style.background =
                "radial-gradient(circle at " +
                x +
                "px " +
                y +
                "px, rgb(161,65,0), rgba(255,255,255,.05))";

        });

        card.addEventListener("mouseleave", function () {

            card.style.background =
                "rgba(255,255,255,.06)";

        });

    });

});


// ===========================
// Portfolio Filter
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    const filters = document.querySelectorAll(".filter");
    const projects = document.querySelectorAll(".project");

    filters.forEach(function (button) {

        button.addEventListener("click", function () {

            filters.forEach(function (filter) {
                filter.classList.remove("active");
            });

            button.classList.add("active");

            const value = button.dataset.filter;

            projects.forEach(function (project) {

                if (
                    value === "all" ||
                    project.classList.contains(value)
                ) {

                    project.style.display = "block";

                } else {

                    project.style.display = "none";

                }

            });

        });

    });

});
// ===========================
// Preloader
// ===========================

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (!preloader) {
        return;
    }

    setTimeout(function () {

        preloader.classList.add("hide");

        setTimeout(function () {

            preloader.remove();

        }, 500);

    }, 1000);

});
