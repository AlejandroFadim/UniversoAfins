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
var idFoguteCrab = document.querySelector(".likeCrab");
var idFoguteRing = document.querySelector(".likeRing");
var idFoguteRho = document.querySelector(".likeRho");
var idFoguteClas = document.querySelector(".likeClas");
var mainNebu = document.querySelector(".partNebulosa");
var mainGalaxia = document.querySelector(".partGalaxia");
function executeEnvento() {}
function mudarPag(e) {
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
