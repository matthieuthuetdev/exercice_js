const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.textContent = "liste des personnes inscrites";
const ul = document.createElement("ul");
function creattable(personnes) {
     const table = document.createElement("table");
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
     tr.appendChild(thsupprimer)
     personnes.forEach(Element => {
          const personne = Element.split(" ")
          const nom = personne[1];
          const prenom = personne[0];
          const email = prenom.toLowerCase() + "." + nom.toLowerCase() + "@gmail.com"
          const tr = document.createElement("tr");
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
     })
     body.appendChild(table)

}
const personnes = ["Mike Dev", "John Makenzie", "Léa Grande"];
personnes.forEach((Element) => {
     const li = document.createElement("li");
     li.innerText = Element;
     ul.appendChild(li);
});
body.appendChild(h1);
body.appendChild(ul);
creattable(personnes);
