
const heading = document.querySelector(".hero h2");

const text = heading.textContent.trim();

heading.textContent = "";

let index = 0;

function typeText() {
    if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;

        setTimeout(typeText, 70);
    }
}

typeText();
