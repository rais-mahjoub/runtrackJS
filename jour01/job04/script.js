console.log("Hello JavaScript !");

function bissextile(année) {
    if (année % 4 == 0 && année % 100 != 0 || année % 400 == 0) {
        console.log(année + ' est bissextile')
    } else {
        console.log(année + ' n\'est pas bissextile')
    }
}