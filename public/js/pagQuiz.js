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
var value = 0;
var idFoguteCrab = document.querySelector(".likeCrab");
var idFoguteRing = document.querySelector(".likeRing");
var idFoguteRho = document.querySelector(".likeRho");
var idFoguteClas = document.querySelector(".likeClas");
var mainNebu = document.querySelector(".partNebulosa");
var mainGalaxia = document.querySelector(".partGalaxia");
var paragrafoNebulosa = document.getElementsByClassName('paragrafoNebulosa')
var Eso137 = document.querySelector('.likeEso137')
var Ngc7496 = document.querySelector('.likeNgc7496')
var Ngc265 = document.querySelector('.likeNgc265')
var Vv191 = document.querySelector('.likeVv191')
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
