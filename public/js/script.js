var logBtn = document.getElementById("btnLogin");
var navLink = document.getElementsByClassName("nav-link");
var avatar = document.getElementById("avatar");
var spanComentario = document.getElementById("spanComentario");
var LinkComentarioLogin = document.getElementById("LinkComentario");
var idUsuario = sessionStorage.ID_USUARIO;
var nomeUsuario = sessionStorage.EMAIL_USUARIO;
var iptTutlo = document.getElementById("titulo");
var iptDescricao = document.getElementById("descricao");
var atualURl = window.location.href;
var urlArtigo = atualURl.split("/");
var urlManipulada = urlArtigo[urlArtigo.length - 1];
function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
    } else {
        menuMobile.classList.add("open");
    }
}
function pegaTags() {
    if (sessionStorage.EMAIL_USUARIO) {
        logBtn.style.display = "none";
        avatar.style.display = "block";
        avatar.style.backgroundColor = "green";
        avatar.innerHTML = sessionStorage.NOME_USUARIO;
        viagem.style.display = "block";
        for (var i = 0; i < navLink.length; i++) {
            navLink[i].style.fontSize = "22px";
        }
    } else {
        console.log("nao tem usuario");
        console.log(atualURl);
    }
}

function publicar() {
    var tituloFormComentario = titulo.value;
    var descricaoFormComentario = descricao.value;
    if (sessionStorage.EMAIL_USUARIO) {
        console.log(
            `${tituloFormComentario.length} | ${descricaoFormComentario.length}`
        );
        if (
            tituloFormComentario.length == 0 ||
            descricaoFormComentario.length == 0
        ) {
            console.log("entrei");
            iptTutlo.style.border = "solid 5px red";
            iptDescricao.style.border = "solid 5px red";
            spanComentario.style.display = "block";
            spanComentario.innerHTML =
                "é nescessario preencher todos os campos";
        } else {
            console.log(
                `${tituloFormComentario} || ${descricaoFormComentario}`
            );
            iptTutlo.style.border = "none";
            iptDescricao.style.border = "none";
            spanComentario.style.display = "none";
            var corpo = {
                urlPagina: `${urlManipulada}`,
                titulo: tituloFormComentario,
                descricao: descricaoFormComentario,
            };

            fetch(`/avisos/publicar/${idUsuario}`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(corpo),
            })
                .then(function (resposta) {
                    console.log("resposta: ", resposta);

                    if (resposta.ok) {
                        window.alert(
                            "Post realizado com sucesso pelo usuario de ID: " +
                                idUsuario +
                                "!"
                        );
                        window.location = `./${urlManipulada}`;
                        location.reload();
                        limparFormulario();
                        finalizarAguardar();
                    } else if (resposta.status == 404) {
                        window.alert("Deu 404!");
                    } else {
                        throw (
                            "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
                            resposta.status
                        );
                    }
                })
                .catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                    finalizarAguardar();
                });

            return false;
        }
    } else {
        spanComentario.style.display = "block";
        LinkComentarioLogin.style.display = "block";
        spanComentario.innerHTML = " É necessario se logar para comentar ";
    }
}

function atualizarFeed() {
    fetch(`/avisos/listar/${urlManipulada}`)
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    var feed =
                        document.getElementsByClassName("feed_container");
                    var mensagem = document.createElement("span");
                    mensagem.innerHTML = "Nenhum comentario";
                    feed.appendChild(mensagem);
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {

                    var feed = document.getElementById("feed_container");
                    feed.innerHTML = "";
                    for (let i = 0; i < resposta.length; i++) {
                        var publicacao = resposta[i];

                        
                        var divPublicacao = document.createElement("div");
                        var spanID = document.createElement("span");
                        var spanTitulo = document.createElement("span");
                        var spanNome = document.createElement("span");
                        var divDescricao = document.createElement("div");
                        var divButtons = document.createElement("div");
                        var btnEditar = document.createElement("button");
                        var btnDeletar = document.createElement("button");

                        spanTitulo.innerHTML = `<h3 class="h3Comentario">Título: ${publicacao.titulo} </h3>`;
                        spanNome.innerHTML = `${publicacao.nome}`;
                        divDescricao.innerHTML =
                            "Descrição: <b>" + publicacao.descricao + "</b>";
                        btnEditar.innerHTML = "Editar";
                        btnDeletar.innerHTML = "Deletar";

                        divPublicacao.className = "publicacao";
                        spanTitulo.id = "inputNumero" + publicacao.idAviso;
                        spanNome.className = "publicacao-nome";
                        spanTitulo.className = "publicacao-titulo";
                        divDescricao.className = "publicacao-descricao";

                        divPublicacao.appendChild(spanID);
                        divPublicacao.appendChild(spanNome);
                        divPublicacao.appendChild(spanTitulo);
                        divPublicacao.appendChild(divDescricao);
                        divPublicacao.appendChild(divButtons);

                        feed.appendChild(divPublicacao);
                    }

                    finalizarAguardar();
                });
            } else {
                throw "Houve um erro na API!";
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
            finalizarAguardar();
        });
}

pegaTags();
