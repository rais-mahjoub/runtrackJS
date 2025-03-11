function tri(nbes, ordre) {
    if (ordre !== "asc" && ordre !== "desc") {
        throw new Error("Le paramètre 'order' doit être 'asc' ou 'desc'.");
    }

    if (ordre === "asc") {
        return nbes.sort((a, b) => a - b);
    } else {
        return nbes.sort((a, b) => b - a);
    }
}