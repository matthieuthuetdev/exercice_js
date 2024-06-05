const body = document.querySelector("body")
function afficherDate() {
    let maDate = new Date();
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
    let [heures, minutes, secondes] = heureFormater.split(":");
    let red = Math.round((heures / 23) * 255);
    let green = Math.round((minutes / 59) * 255);
    let blue = Math.round((secondes / 59) * 255);
    return [red, green, blue];
}

const btndate = document.querySelector("#btndate");
btndate.addEventListener("click", function () {
    document.querySelector("#txtdate").value = afficherDate();
});

const btnheure = document.querySelector("#btnheure");
btnheure.addEventListener("click", function () {
    const formHeure = document.querySelector("#txtheure");
    setInterval(() => {
        formHeure.value = afficherHeure();
        let color = getColor(afficherHeure());
        body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }, 1000);
});
