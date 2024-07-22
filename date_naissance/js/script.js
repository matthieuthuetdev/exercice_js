const body = document.body
const form = document.getElementById("form");
const calculer = document.getElementById("calculer")
let age = undefined;
const date_actuel = new Date();
let date_naissance_formater = undefined;
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
function calculer_age(date_naissance) {
    age = date_actuel - date_naissance
    age = Math.floor(age / 1000 / 60 / 60 / 24 / 365);
    const span = "<sppan class='blue'>" + age + "</span>"
    return span
}
function formater_date_naissance(date_naissance) {
    const date_naissance_formater = date_naissance.toLocaleDateString()
    const span = "<sppan class='blue'>" + date_naissance_formater + "</span>"
    return span
}
calculer.addEventListener("click", () => {
    age = calculer_age(new Date(form.value));
    date_naissance_formater = formater_date_naissance(new Date(form.value))
    p2.innerHTML = "depuis votre naissance il s'est écoulé " + age + "année."
    p1.innerHTML = "vous aites né le " + date_naissance_formater + "."

})