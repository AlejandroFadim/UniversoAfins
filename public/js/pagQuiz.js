var escolhaUsuario = {
    nebulosas: {
        nomeNebulosa: "",
        valueNebulosa: "",
    },
    galaxias: {
        nomeGalaxia: "",
        valueGalaxia: "",
    },
    planetas: {
        nomePlaneta: "",
        valuePlaneta: "",
    },
};

var value = 0;
var valueGalaxia = 0;
var valuePlaneta = 0;
var idFoguteCrab = document.querySelector(".likeCrab");
var idFoguteRing = document.querySelector(".likeRing");
var idFoguteRho = document.querySelector(".likeRho");
var idFoguteClas = document.querySelector(".likeClas");
var mainNebu = document.querySelector(".partNebulosa");
var mainGalaxia = document.querySelector(".partGalaxia");
var mainPlantas = document.querySelector(".mainPlantas");
var paragrafoNebulosa = document.getElementsByClassName('paragrafoNebulosa')
var Eso137 = document.querySelector('.likeEso137')
var Ngc7496 = document.querySelector('.likeNgc7496')
var Ngc265 = document.querySelector('.likeNgc265')
var jupter = document.querySelector('.likeJupter')
var uranu = document.querySelector('.likeUranus')
var saturno = document.querySelector('.likeSaturno')
var marte = document.querySelector('.likeMarte')

console.log(valueGalaxia)

function mudarPag() {
    setInterval(
        () => {
            mainNebu.style.display = "none";
            mainGalaxia.style.display = "block";
        },
        2000,
        1
    );
}
function mudarPagGalaxia() {
    setInterval(
        () => {
            mainGalaxia.style.display = "none";
            mainPlantas.style.display = "block";
        },
        2000,
        1
    );
}
function mudarPagPlaneta() {
    setInterval(
        () => {
            window.location = "../dashboard/dashboard.html"
        },
        2000,
        1
    );
}
function pushJson(nomeNebulosa, nomeID) {
    nomeID.classList.add("likeAnimation");
    value++;
    escolhaUsuario.nebulosas.nomeNebulosa = nomeNebulosa;
    escolhaUsuario.nebulosas.valueNebulosa = value;
    console.log(escolhaUsuario);
    mudarPag();
    console.log(valueGalaxia)

    let interval = setInterval(
        () => {
            window.scroll({
                top: "0",
                behavior: "smooth",
            });

            clearInterval(interval)
        },
        2000,
        1
    );
}
function pushJsonGalaxia(nomeGalaxia, nomeID) {
    nomeID.classList.add("likeAnimation");
    valueGalaxia++;
    escolhaUsuario.galaxias.nomeGalaxia = nomeGalaxia;
    escolhaUsuario.galaxias.valueGalaxia = valueGalaxia
    console.log(escolhaUsuario);
    mudarPagGalaxia();

    console.log(valueGalaxia)

    let interval = setInterval(
        () => {
            window.scroll({
                top: "0",
                behavior: "smooth",
            });

            clearInterval(interval)
        },
        2000,
        1
    );
}

function pushJsonPlaneta(nomePlaneta, nomeID) {
    nomeID.classList.add("likeAnimation");
    valuePlaneta++;
    escolhaUsuario.planetas.nomePlaneta = nomePlaneta;
    escolhaUsuario.planetas.valuePlaneta = valuePlaneta
    console.log(escolhaUsuario);
    mudarPagPlaneta();

    console.log(valueGalaxia)

    let interval = setInterval(
        () => {
            window.scroll({
                top: "0",
                behavior: "smooth",
            });

            clearInterval(interval)
        },
        2000,
        1
    );



}

idFoguteCrab.addEventListener("click", (e) => {
    var nomeNebulosa = e.target.id;
    pushJson(nomeNebulosa, idFoguteCrab);
});
idFoguteRing.addEventListener("click", (e) => {
    var nomeNebulosa = e.target.id;
    pushJson(nomeNebulosa, idFoguteRing);
});
idFoguteRho.addEventListener("click", (e) => {
    var nomeNebulosa = e.target.id;
    pushJson(nomeNebulosa, idFoguteRho);
});
idFoguteClas.addEventListener("click", (e) => {
    var nomeNebulosa = e.target.id;
    pushJson(nomeNebulosa, idFoguteClas);
});
Eso137.addEventListener("click", (e) => {
    var nomeGalaxia = e.target.id;
    console.log(nomeGalaxia)
    pushJsonGalaxia(nomeGalaxia, Eso137);
});
Ngc7496.addEventListener("click", (e) => {
    var nomeGalaxia = e.target.id;
    pushJsonGalaxia(nomeGalaxia, Ngc7496);
});
Vv191.addEventListener("click", (e) => {
    var nomeGalaxia = e.target.id;
    pushJsonGalaxia(nomeGalaxia, Vv191);
});
jupter.addEventListener("click", (e) => {
    var nomePlaneta = e.target.id;
    pushJsonPlaneta(nomePlaneta, jupter);
});
uranu.addEventListener("click", (e) => {
    var nomePlaneta = e.target.id;
    pushJsonPlaneta(nomePlaneta, uranu);
});
saturno.addEventListener("click", (e) => {
    var nomePlaneta = e.target.id;
    pushJsonPlaneta(nomePlaneta, saturno);
});
marte.addEventListener("click", (e) => {
    var nomePlaneta = e.target.id;
    pushJsonPlaneta(nomePlaneta, marte);
});
