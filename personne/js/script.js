import { creattable } from "/js/function.js";
const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.textContent = "liste des personnes inscrites";
const ul = document.createElement("ul");
const personnes = ["Mike Dev", "John Makenzie", "Léa Grande", "delphine THUET", "Emmanuel THUET", "Matthieu THUET"];
body.appendChild(h1);
creatliste(personnes);
creattable(personnes);
const sup = document.querySelectorAll(".supp")
sup.forEach(Element => {
     Element.addEventListener("click", () => {

          const id = Element.id;
          personnes.splice(id.split("l")[1], 1);
          console.log(personnes)
          const tbody = document.querySelector("tbody")
          tbody.removeChild(document.querySelector("tr#" + id))

          const ul = document.querySelector("ul")
          ul.removeChild(document.querySelector("ul   #" + id))

     })
})


