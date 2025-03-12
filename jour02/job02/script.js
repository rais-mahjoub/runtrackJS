function showhide() {
    let article = document.getElementById("dynamic-article");
    if (!article) {
        article = document.createElement("article");
        article.id = "dynamic-article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    } else {
        article.classList.toggle("hidden");
    }
}
document.getElementById("button").addEventListener("click", showhide);