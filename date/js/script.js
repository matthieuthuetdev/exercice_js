const body = document.querySelector("body")
function afficherDate() {
    let maDate = new Date()
    let annees = maDate.getFullYear();
    let mois = maDate.getMonth() + 1;
    if (mois < 10) {
        mois = "0" + mois;
    }
    let jours = maDate.getDate();
    if (jours < 10) {
        jours = "0" + jours;
    }
    let date = jours + "/" + mois + "/" + annees;
    console.log(date);
    return date;
}
function afficherHeure() {
    let monHeure = new Date();
    let heures = monHeure.getHours();
    heures = (heures < 10) ? "0" + heures : heures;

    let minutes = monHeure.getMinutes();
    minutes = (minutes < 10) ? "0" + minutes : minutes;


    let secondes = monHeure.getSeconds();
    secondes = (secondes < 10) ? "0" + secondes : secondes;
    let chaineheure = heures + ":" + minutes + ":" + secondes;
    return chaineheure;
}
function getColor(heureFormater) {
heureFormater = heureFormater.split(":");
heures = heureFormater[0]
minutes = heureFormater[1]
secondes = heureFormater[2]
let red = Math.round((24/255)*heures);
let green = Math.round((60/255)*minutes);
let blue = Math.round((60/255)*secondes);

return "rgb("+red+" , "+green+" , "+blue+")";
}
const btndate = document.querySelector("#btndate");
btndate.addEventListener("click", function () {
    document.querySelector("#txtdate").value = afficherDate();
})
const btnheure = document.querySelector("#btnheure")
btnheure.addEventListener("click", function () {
    const formHeure = document.querySelector("#txtheure")
    setInterval(() => {
        formHeure.value = afficherHeure();
        body.style.backgroundColor = getColor(afficherHeure());
        console.log(getColor(afficherHeure()))
    }, 1000);
})