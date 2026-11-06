// Formulaire de contact
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Merci pour votre message ! Nous vous contacterons bientôt.");

    contactForm.reset();
});

// Animation au défilement
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {
    sections.forEach(function(section) {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});