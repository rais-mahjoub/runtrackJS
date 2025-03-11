function jourTravaille(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error("Le paramètre doit être une date valide.");
    }

    const joursFeries = ["01-01", "01-04", "01-05", "08-05", "10-05", "20-05", "14-07", "15-08", "01-11", "11-11", "25-12"];
    const jourMois = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}`;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    
    if (joursFeries.includes(jourMois)) {
        console.log(`Le ${date.toLocaleString('default', options)} est un jour férié.`);
        return;
    }

    const jour = date.getDay();
    if (jour === 0 || jour === 6) {
        console.log(`Non, le ${date.toLocaleString('default', options)} est un week-end.`);
        return;
    }
    console.log(`Oui, le ${date.toLocaleString('default', options)} est un jour travaillé.`);
}