// sessão

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";
    var divErrosLogin = document.getElementById("div_erros_login");

    if (texto) {
        email_input.style.border = "solid red 5px";
        senha_input.style.border = "solid red 5px";
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}
