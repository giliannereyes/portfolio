document.addEventListener("DOMContentLoaded", function() {
    typeText();
});

function typeText() {
    const aboutText = "My ";
    const highlightText = "Experience";
    const aboutElement = document.getElementById("my-text");
    const highlightElement = document.getElementById("experience-text");

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
