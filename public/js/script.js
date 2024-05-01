var logBtn = document.getElementById("btnLogin");
var avatar = document.getElementById("avatar");
var spanComentario = document.getElementById("spanComentario")
var LinkComentarioLogin = document.getElementById("LinkComentario")

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

function comentar(){
    if(sessionStorage.EMAIL_USUARIO) {
        console.log('pode comentar')
    }
    else {
        spanComentario.style.display = "block";
        LinkComentarioLogin.style.display = "block";
        console.log(essionStorage.EMAIL_USUARIO) 
    } 

}



pegaTags();
