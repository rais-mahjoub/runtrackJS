function verifMail () {
    // event.preventDefault();
    const domaine = /@laplateforme.io$/
    const mailInput = document.getElementById("Email");

}

addEventListener("keypress", verifMail)

let i = 1;

// Calendrier
document.addEventListener('DOMContentLoaded', function() {
     

    const calendarContainer = document.getElementById('calCont');

    let calendrier = new FullCalendar.Calendar(calendarContainer, {
        initialView: 'dayGridMonth',
        locale: 'fr',
        selectable: true,
        dateClick: function(info) {
            // Afficher un formulaire de demande d'autorisation lorsqu'une date est cliquée
            AfficherDemande(info.dateStr);
        }
    });

    calendrier.render();
});

function AfficherDemande(date) {
    const dateObj = new Date (date);
    const dateFR = dateObj.toLocaleDateString("fr");
    // Afficher un formulaire pour faire une demande d'autorisation
    const form = `
        <form id="Demande">
            <label for="Date">Date:</label>
            <input type="text" id="Date" value="${dateFR}" readonly><br>
            <label for="Raison">Raison:</label>
            <textarea id="Raison"></textarea><br>
            <button type="submit">Demander l'autorisation</button>
        </form>
    `;
    // Afficher le formulaire dans une boîte de dialogue ou une section de la page
    document.getElementById('formCont').innerHTML = form;

    document.getElementById('Demande').addEventListener('submit', function(event) {
        event.preventDefault();
        // Traiter la demande d'autorisation
        let raison = document.getElementById('Raison').value;
        EnregistrerDemande(dateFR, raison);
    });
}

function EnregistrerDemande(date, raison) {
    // Sauvegarder la demande dans le fichier JSON ou envoyer au serveur
    const demande = 'Demande d\'autorisation pour le ' + date + ' : ' + raison;
    console.log(demande);
    AjouterDemande(demande, i);
    i++;
}

// Backboard
function AjouterDemande(demande, i) {
    const backboard = document.getElementById('admin');
    const nvDemande = `
        <p>
            ${demande}
            <button id="accepterDemande${i}">Accepter</button>
            <button id="rejeterDemande${i}">Rejeter</button>
        </p>
    `;
    console.log(i);
    backboard.innerHTML += nvDemande;
    
    
}