function creattable(personnes) {
    const table = document.createElement("table");
    table.setAttribute("id", "inscrit")
    const thead = table.createTHead();
    const tbody = table.createTBody();
    const tr = document.createElement("tr");
    thead.appendChild(tr);
    const tdnom = document.createElement("th");
    tdnom.textContent = "Nom"
    tr.appendChild(tdnom);
    const thprenom = document.createElement("th");
    thprenom.textContent = "prenom";
    tr.appendChild(thprenom);
    const themail = document.createElement("th");
    themail.textContent = "Email";
    tr.appendChild(themail);
    const thsupprimer = document.createElement("th");
    thsupprimer.textContent = "Supprimer"
    let i = 0
    tr.appendChild(thsupprimer)

    personnes.forEach(Element => {
        const personne = Element.split(" ")
        const nom = personne[1];
        const prenom = personne[0];
        const email = prenom.toLowerCase() + "." + nom.toLowerCase() + "@gmail.com"
        const tr = document.createElement("tr");
        tr.setAttribute("id", "l" + i);

        tbody.appendChild(tr)
        const tdnom = document.createElement("td");
        tdnom.textContent = nom;
        tr.appendChild(tdnom)
        const tdprenom = document.createElement("td");
        tdprenom.textContent = prenom;
        tr.appendChild(tdprenom)
        const tdemail = document.createElement("td");
        tdemail.textContent = email;
        tr.appendChild(tdemail)
        const tdsupprimer = document.createElement("td");
        tdsupprimer.textContent = "X";
        tr.appendChild(tdsupprimer);
        tdsupprimer.setAttribute("id", "l" + i);
        tdsupprimer.setAttribute("class", "supp");
        i++;
    })
    body.appendChild(table)

}

function creatliste(personnes) {
    let i = 0
    personnes.forEach((Element) => {
        const li = document.createElement("li");
        li.innerText = Element;
        li.setAttribute("id", "l" + i);
        ul.appendChild(li);
        ul.setAttribute("id", "liste")
        body.appendChild(ul)
        i++
    });

}

export {creattable};
export {creatliste};