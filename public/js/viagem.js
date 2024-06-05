var idUsuario = Number(sessionStorage.ID_USUARIO);
console.log(idUsuario);
var escolhaUsuario = {
    fkUsuario: idUsuario,
    fkNebulosa: "",
    fkGalaxia: "",
    fkPlaneta: "",
};
var contador = 0;
var bg = document.getElementsByClassName("paralaxBG");
var idFoguteCrab = document.querySelector(".likeCrab");
var idFoguteRing = document.querySelector(".likeRing");
var idFoguteRho = document.querySelector(".likeRho");
var idFoguteClas = document.querySelector(".likeClas");
var mainNebu = document.querySelector(".partNebulosa");


function mudarPag(nomeID) {
    if (contador == 1) {
        bg[1].style.backgroundImage = "url(../img/galaxiaESO137.jpg)";
        bg[2].style.backgroundImage = "url(../img/galaxiaNGC749.png)";
        bg[3].style.backgroundImage = "url(../img/galaxiaNGC265.png)";
        bg[4].style.backgroundImage = "url(../img/galaxiaVV191.png)";
        topSite.innerHTML = 'Agora vamos para as galaxias';
        nomeID.classList.remove("likeAnimation");
    } else if (contador == 2) {
        bg[1].style.backgroundImage = "url(../img/jupter.png)";
        bg[2].style.backgroundImage = "url(../img/uranus.png)";
        bg[3].style.backgroundImage = "url(../img/saturno.jpg)";
        bg[4].style.backgroundImage = "url(../img/marte.jpg)";
        topSite.innerHTML = 'Agora vamos para os planetas';
        nomeID.classList.remove("likeAnimation");
    } else if (contador == 3) {
        dashFetch();
    }
}

function dashFetch() {
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
function carregando() {
    DivCarregar.style.display = "block";
    mainNebu.style.display = "none";
}
function pushJson(nomeNebulosa, nomeID) {
    contador += 1;
    if (contador == 1) {
        nomeID.classList.add("likeAnimation");
        escolhaUsuario.fkNebulosa = nomeNebulosa;
    } else if (contador == 2) {
        nomeID.classList.add("likeAnimation");
        escolhaUsuario.fkGalaxia = nomeNebulosa;
    } else if (contador == 3) {
        nomeID.classList.add("likeAnimation");
        escolhaUsuario.fkPlaneta = nomeNebulosa;
    }


    var interval = setInterval(() => {
        setTimeout(carregando);
        setTimeout(() => {
            window.scroll({
                top: "0",
                behavior: "smooth",
            });
        }, 1500);
        setTimeout(() => {
            DivCarregar.style.display = "none";
            mainNebu.style.display = "block";
        }, 2000);
        setTimeout(mudarPag(nomeID), 3000);
        clearInterval(interval);
    }, 2000);
}

idFoguteCrab.addEventListener("click", (e) => {
    var nomeNebulosa = Number(e.target.id);
    pushJson(nomeNebulosa, idFoguteCrab);
});
idFoguteRing.addEventListener("click", (e) => {
    var nomeNebulosa = Number(e.target.id);
    pushJson(nomeNebulosa, idFoguteRing);
});
idFoguteRho.addEventListener("click", (e) => {
    var nomeNebulosa = Number(e.target.id);
    pushJson(nomeNebulosa, idFoguteRho);
});
idFoguteClas.addEventListener("click", (e) => {
    var nomeNebulosa = Number(e.target.id);
    console.log(nomeNebulosa);

    pushJson(nomeNebulosa, idFoguteClas);
});
