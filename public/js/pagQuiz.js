var idUsuario = Number(sessionStorage.ID_USUARIO);
console.log(idUsuario);
var escolhaUsuario = {
    fkUsuario: idUsuario,
    fkNebulosa: "",
    fkGalaxia: "",
    fkPlaneta: "",
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
var paragrafoNebulosa = document.getElementsByClassName("paragrafoNebulosa");


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

function mudarPagPlaneta() {
    fetch("/viagem/inserir", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkUsuario: escolhaUsuario.fkUsuario,
            fkNebulosa: escolhaUsuario.fkNebulosa,
            fkGalaxia: escolhaUsuario.fkGalaxia,
            fkPlaneta: escolhaUsuario.fkPlaneta,
        }),
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN NA PLANETA");

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then((json) => {
                    console.log(json);
                    console.log("foi");

                    setInterval(
                        () => {
                            window.location = "../dashboard/dashboard.html";
                        },
                        2000,
                        1
                    );
                });
            } else {
                console.log("deu errado");

                resposta.text().then((texto) => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}

function pushJson(nomeNebulosa, nomeID) {
    nomeID.classList.add("likeAnimation");
    escolhaUsuario.fkNebulosa = nomeNebulosa;
    console.log(escolhaUsuario);
    mudarPag();
    // console.log(valueGalaxia)

    let interval = setInterval(
        () => {
            window.scroll({
                top: "0",
                behavior: "smooth",
            });

            clearInterval(interval);
        },
        2000,
        1
    );
}


idFoguteCrab.addEventListener("click", (e) => {
    var nomeNebulosa = Number(e.target.id);
    console.log(nomeNebulosa);
    pushJson(nomeNebulosa, idFoguteCrab);
});
idFoguteRing.addEventListener("click", (e) => {
    var nomeNebulosa = Number(e.target.id);
    console.log(nomeNebulosa);
    pushJson(nomeNebulosa, idFoguteRing);
});
idFoguteRho.addEventListener("click", (e) => {
    var nomeNebulosa = Number(e.target.id);
    console.log(nomeNebulosa);

    pushJson(nomeNebulosa, idFoguteRho);
});
idFoguteClas.addEventListener("click", (e) => {
    var nomeNebulosa = Number(e.target.id);
    console.log(nomeNebulosa);

    pushJson(nomeNebulosa, idFoguteClas);
});
Eso137.addEventListener("click", (e) => {
    var nomeGalaxia = Number(e.target.id);
    // console.log(nomeGalaxia)

    pushJsonGalaxia(nomeGalaxia, Eso137);
});
Ngc7496.addEventListener("click", (e) => {
    var nomeGalaxia = Number(e.target.id);
    pushJsonGalaxia(nomeGalaxia, Ngc7496);
});
Ngc265.addEventListener("click", (e) => {
    var nomeGalaxia = Number(e.target.id);
    pushJsonGalaxia(nomeGalaxia, Ngc265);
});
Vv191.addEventListener("click", (e) => {
    var nomeGalaxia = Number(e.target.id);
    pushJsonGalaxia(nomeGalaxia, Vv191);
});
jupter.addEventListener("click", (e) => {
    var nomePlaneta = Number(e.target.id);
    pushJsonPlaneta(nomePlaneta, jupter);
});
uranu.addEventListener("click", (e) => {
    var nomePlaneta = Number(e.target.id);
    pushJsonPlaneta(nomePlaneta, uranu);
});
saturno.addEventListener("click", (e) => {
    var nomePlaneta = Number(e.target.id);
    pushJsonPlaneta(nomePlaneta, saturno);
});
marte.addEventListener("click", (e) => {
    var nomePlaneta = Number(Number(e.target.id));
    // console.log(nomePlaneta)
    pushJsonPlaneta(nomePlaneta, marte);
});
