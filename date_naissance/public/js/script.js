const body = document.body
const form = document.getElementById("form");
const calculer = document.getElementById("calculer")
let age = undefined;
const date_actuel = new Date();
const date_naissance_formater = undefined;
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
function calculer_age(date_naissance) {
    age = date_actuel - date_naissance
    age = Math.floor(age / 1000 / 60 / 60 / 24 / 365);
return age
}
calculer.addEventListener("click", () => {
    age = calculer_age(new Date(form.value))
    console.log(age)
})