const goMain = document.getElementById('mainHeader');
const goLogin = document.getElementById('loginText');
const goRegister = document.getElementById('registerText');

function toMain() {
    location.href = "main.html";
}

function toLogin() {
    location.href = "Login.html";
}

function toRegister() {
    location.href = "Register.html";
}

goMain.addEventListener("click",toMain);
goLogin.addEventListener("click",toLogin);
goRegister.addEventListener("click",toRegister);