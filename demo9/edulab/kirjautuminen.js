document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === 'kylla') {
    document.getElementById('tervetuloa_teksti').textContent += localStorage.getItem("nimi");
    document.getElementById("kirjaudu_nappi").style.display = "none";
    } else {
        document.getElementById('tervetuloa_teksti').textContent;
        document.getElementById("kirjautumis_nappi");
        document.getElementById("ulos_kirjautuminen").style.display = "none";
    }
}


function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}

function ulosKirjautuminen(){
    localStorage.removeItem("nimi", document.getElementById("nimi").value);
    localStorage.removeItem("kirjautunut", "ei");
}
