function jourTravaille(date) {
    // Vérifie si la date est un objet Date valide
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error("Le paramètre doit être une date valide.");
    }

    // Liste des jours fériés en 2024 au format "jj-mm"
    const joursFeries = [
        "01-01", // Jour de l'An
        "01-04", // Lundi de Pâques
        "01-05", // Fête du Travail
        "08-05", // Victoire 1945
        "10-05", // Ascension
        "20-05", // Lundi de Pentecôte
        "14-07", // Fête Nationale
        "15-08", // Assomption
        "01-11", // Toussaint
        "11-11", // Armistice 1918
        "25-12"  // Noël
    ];

    // Formate la date au format "jj-mm"
    const jourMois = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}`;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    
    // Vérifie si la date est un jour férié
    if (joursFeries.includes(jourMois)) {
        console.log(`Le ${date.toLocaleString('default', options)} est un jour férié.`);
        return;
    }

    // Obtient le jour de la semaine (0 = dimanche, 1 = lundi, ..., 6 = samedi)
    const jour = date.getDay();

    // Vérifie si la date est un week-end
    if (jour === 0 || jour === 6) {
        console.log(`Non, le ${date.toLocaleString('default', options)} est un week-end.`);
        return;
    }

    // Si ce n'est ni un jour férié ni un week-end, c'est un jour travaillé
    console.log(`Oui, le ${date.toLocaleString('default', options)} est un jour travaillé.`);
}

// Exemple d'utilisation :
const date1 = new Date("2024-05-01"); // 1er mai 2024, Fête du Travail
jourTravaille(date1); // Affiche le message pour un jour férié

const date2 = new Date("2024-10-06"); // 6 octobre 2024, un dimanche
jourTravaille(date2); // Affiche le message pour un week-end

const date3 = new Date("2024-10-01"); // 1er octobre 2024, un mardi
jourTravaille(date3); // Affiche le message pour un jour travaillé
