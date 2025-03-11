function verifPremier (nbe) {
    let isPrime = true;
    for (let i=2; i<=(nbe**0.5); i++) {
        if (nbe % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

function sommeNombresPremiers(n1, n2) {
    let n1isPrime = verifPremier(n1);
    let n2isPrime = verifPremier(n2);
    if (n1isPrime && n2isPrime) {
        console.log(n1 + n2);
    }
    else {
        console.log("Les nombres ne sont pas premiers");
    }
}