
var logBtn = document.getElementById('btnLogin')
var avatar = document.getElementById('avatar')
console.log(logBtn)


if(sessionStorage.EMAIL_USUARIO ) { 
    logBtn.style.display = 'none'
    avatar.style.display = 'block'
} else {
    console.log('nao tem usuario')
}