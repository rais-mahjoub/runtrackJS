function addOne () {
            const compteur = document.getElementById("compteur")
            let count = compteur.textContent;
            count++;
            compteur.textContent = count;
        }
        document.getElementById("button").addEventListener("click", addOne);