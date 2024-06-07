const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerText = "liste des personne inscrites"
const ul = document.createElement("ul");
function creattable(table) {
    const table = document.createElement("table");
    const thNom = document.createElement("th").innerText = "";;
    const thPrenom = document.createElement("thead");
    const thMail = document.createElement("thead");

}
const personne = ['Mike Dev', 'John Makenzie', 'Léa Grande'];
personne.forEach(Element => {
    const li = document.createElement("li")
    li.innerText = Element;
    ul.appendChild(li);


})
body.appendChild(h1);
body.appendChild(ul);