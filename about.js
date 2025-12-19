// =====================================
// About Page JS – MediguideAI
// =====================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("About & Disclaimer page loaded");

    // Smooth scroll for any internal links (future ready)
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
