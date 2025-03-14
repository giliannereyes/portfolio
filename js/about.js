document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");
    typeText();
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});

function typeText() {
    const aboutText = "About ";
    const highlightText = "Me";
    const aboutElement = document.getElementById("about-text");
    const highlightElement = document.getElementById("me-text");

    let index = 0;

    function typeAbout() {
        if(index < aboutText.length) {
            aboutElement.textContent += aboutText.charAt(index);
            index++;
            setTimeout(typeAbout, 130); // Adjust speed as needed
        } else {
            // Start typing the highlighted text
            index = 0;
            typeHighlight();
        }
    }

    function typeHighlight() {
        if (index < highlightText.length) {
            highlightElement.textContent += highlightText.charAt(index);
            index++;
            setTimeout(typeHighlight, 130); // Adjust speed as needed
        } else {
            document.querySelector("h2.typing").classList.remove("typing");
        }
    }

    typeAbout();
}
