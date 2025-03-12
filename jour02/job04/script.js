function addKeyPressed (event) {
            const isLetter = /^[a-z]$/i.test(event.key);
            if (!isLetter) return;
            const textarea = document.getElementById("keylogger");
            textarea.value += event.key;
        }
        document.addEventListener("keypress", addKeyPressed);