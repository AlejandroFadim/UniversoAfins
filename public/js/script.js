var logBtn = document.getElementById("btnLogin");
var avatar = document.getElementById("avatar");

function pegaTags() {

    if (sessionStorage.EMAIL_USUARIO) {
    logBtn.style.display = "none";
    avatar.style.display = "block";
    avatar.style.backgroundColor = "green";
    avatar.innerHTML = sessionStorage.NOME_USUARIO;
    console.log("usuario existe");
    } else {
    console.log("nao tem usuario");
    }
}


pegaTags();
