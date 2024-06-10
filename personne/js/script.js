const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerText = "liste des personne inscrites"
const ul = document.createElement("ul");
function creattable(liste) {
    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const tdNom = document.createElement("td").textContent = "Nom";
    const tdPrenom = document.createElement("td").textContent = "Prenom";
    const tdMail = document.createElement("td").textContent = "Mail";
    table.appendChild(tr);
    tr.appendChild(tdNom);
    tr.appendChild(tdPrenom);
    tr.appendChild(tdMail);
    body.appendChild(table);


    ;

}
const personne = ['Mike Dev', 'John Makenzie', 'Léa Grande'];
creattable(personne);
personne.forEach(Element => {
    const li = document.createElement("li")
    li.innerText = Element;
    ul.appendChild(li);


})
body.appendChild(h1);
body.appendChild(ul);