document.addEventListener("DOMContentLoaded", function () {
    const subheading = document.querySelector(".subheading");
    const typingElement = document.querySelector(".typing");
    const description = document.querySelector(".description");
    const contactButton = document.querySelector(".contact-btn");
    const heroImage = document.querySelector(".hero-image");

    // Step 1: Fade in "Hello, Welcome"
    subheading.style.opacity = "1";
    subheading.style.animation = "fadeIn 1.0s ease-in forwards";

    // Step 2: Wait, then start typing "I'm Gilianne Reyes"
    setTimeout(() => {
        typeText();
    }, 500); // 2-second delay after "Hello, Welcome"

    // Step 3: Wait for typing to finish, then fade in description
    setTimeout(() => {
        description.style.opacity = "1";
        description.style.animation = "fadeIn 1.5s ease-in forwards";
    }, 3000); // Delayed until typing is done

    // Step 4: Fade in contact button
    setTimeout(() => {
        contactButton.style.opacity = "1";
        contactButton.style.animation = "fadeIn 1.5s ease-in forwards";
    }, 4000); // Appears after the description

    // Step 5: Fade in hero image
    setTimeout(() => {
        heroImage.style.opacity = "1";
        heroImage.style.animation = "fadeIn 1.5s ease-in forwards";
    }, 4000); // Appears after button
});

function typeText() {
    const text = "I'm Gilianne Reyes";
    const typingElement = document.querySelector(".typing");
    let index = 0;

    function typeNextLetter() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeNextLetter, 130); // Adjust speed (100ms per letter)
        } else {
            // Remove the cursor after typing is complete
            typingElement.classList.remove("typing");
        }
    }

    typeNextLetter();
}

