document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
let kirjautunut = 'kylla';
if(kirjautunut === 'kylla'){
    document.getElementById('tervetuloa_teksti').textContent += localStorage.getItem("nimi");
    document.getElementById("kirjaudu_nappi").style.display = "none";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}