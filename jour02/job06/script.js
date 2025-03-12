const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

let i = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === konamiCode[i]) {
        i++;
        if (i === konamiCode.length) {
            activatePlateforme();
        }
    } else {
        i = 0;
    }
});

function activatePlateforme() {
    let text = document.createElement("h1");
        text.id = "dynamic-text";
        text.textContent = "Bienvenue à la Plateforme_ !";
        document.body.appendChild(text);
}