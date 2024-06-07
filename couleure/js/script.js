const body = document.querySelector("body");
const formred = document.querySelector("#formred");
const btnred = document.querySelector("#btnred");
const formgreen = document.querySelector("#formgreen");
const btngreen = document.querySelector("#btngreen");
const formblue = document.querySelector("#formblue");
const btnblue = document.querySelector("#btnblue");
const form = document.querySelectorAll(".form");
const btn = document.querySelectorAll(".btn");
const regle = /^[0-9a-f]{2}$/;
function setcolor(red, green, blue) {
    body.style.backgroundColor = "#" + red + green + blue;

}

btn.forEach(element => {
    element.addEventListener("click", () => {
        const id = element.id;
        if (id == "btnred") {
            formred.value = "ff";
            formgreen.value = "00";
            formblue.value = "00";
            setcolor(formred.value, formgreen.value, formblue.value);
        } else if (id == "btngreen") {
            formred.value = "00";
            formgreen.value = "ff";
            formblue.value = "00";
            setcolor(formred.value, formgreen.value, formblue.value);
        }else{
            formred.value = "00";
            formgreen.value = "00";
            formblue.value = "ff";
            setcolor(formred.value, formgreen.value, formblue.value);
        }
    })
})
form.forEach(champs =>{
    champs.addEventListener("change", ()=>{
        if(!regle.test(champs.value)){
            champs.value = "";
            champs.setAttribute("placeholder","saisie invalide");
        }else{
        }
        setcolor(formred.value,formgreen.value,formblue.value)
    })
})
