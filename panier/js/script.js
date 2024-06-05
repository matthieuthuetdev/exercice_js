const qt1 = document.querySelector("#qt1");
const qt2 = document.querySelector("#qt2");
const pu1 = document.querySelector("#pu1");
const pu2 = document.querySelector("#pu2");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const prixTotale = document.querySelector("#prixTotale");
function calculer(qte, pu) {
    return qte * pu;
}
function somme(p1, p2) {
    let somme= Number(p1)+ Number(p2);
    return somme;
}
const formulaire = document.querySelectorAll(".formulaire").forEach(champs => {


    champs.addEventListener("input", () => {
        if (champs.id === "qt1" || champs.id === "pu1") {
            p1.value = calculer(qt1.value, pu1.value)
        } else {
            p2.value = calculer(qt2.value, pu2.value)
        }

        prixTotale.value = somme(p1.value, p2.value)
    })
})