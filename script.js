const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeBtn.textContent = 
        document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});
