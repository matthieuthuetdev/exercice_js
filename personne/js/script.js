const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.textContent = "liste des personnes inscrites";
const ul = document.createElement("ul");
function creattable(personnes) {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  table.appendChild(tr);
  const tdnom = document.createElement("td");
  tdnom.textContent = "Nom"
  tr.appendChild(tdnom);
  const tdprenom = document.createElement("td");
  tdprenom.textContent = "prenom";
  tr.appendChild(tdprenom);
  const tdemail = document.createElement("td");
  tdemail.textContent = "Email";
  tr.appendChild(tdemail);
  personnes.forEach(Element => {
    const personne = Element.split(" ")
    const nom = personne[1];
    const prenom = personne[0];
    const email = prenom + "." + nom + "@gmail.com"
    tr = document.createElement("tr");
  table.appendChild(tr)
    const tdnom = document.createElement("td");
    tdnom.textContent = nom;
    tr.appendChild(tdnom)
    const tdprenom = document.createElement("td");
    tdprenom.textContent = prenom;
    tr.appendChild(tdprenom)
    const tdemail = document.createElement("td");
    tdemail.textContent = email;

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
