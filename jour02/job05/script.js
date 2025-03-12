function updateFooterColor() {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    const footer = document.getElementById("footer");
    footer.style.backgroundColor = `hsl(${Math.round(scrollPercentage * 2)}, 100%, 50%)`;
}

// Ajoute un écouteur d'événement pour le scroll
window.addEventListener("scroll", updateFooterColor);