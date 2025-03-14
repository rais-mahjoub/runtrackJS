$(document).ready(function() {
    var showButton = $('<button>Afficher le texte</button>');
    var hideButton = $('<button>Cacher le texte</button>');
    $('#content').append(showButton).append(hideButton);

    var textElement = $('<p>Les logiciels et les cathédrales, c\'est un peu la même chose - d\'abord, on les construit, ensuite, on prie.</p>').hide();
    $('#content').append(textElement);

    showButton.click(function() {
        textElement.show();
    });

    hideButton.click(function() {
        textElement.hide();
    });
});
