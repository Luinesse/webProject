const goMain = document.getElementById('mainHeader');
const goLogin = document.getElementById('loginText');
const goRegister = document.getElementById('registerText');
const menuContainer = document.getElementById("menuContainer");

function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === name) {
            return cookie[1];
        }
    }

    return null;
}

const nameCookieValue = getCookie('name');

if(nameCookieValue == null) {
    goLogin.innerHTML = "Sign in";
    goRegister.innerHTML = "Sign up";
} else {
    console.log(nameCookieValue);
    const text = document.createElement("span");
    text.innerHTML = nameCookieValue+"님 환영합니다.";
    menuContainer.appendChild(text);
    goLogin.innerHTML = "";
    goRegister.innerHTML = "";
}

function toMain() {
    if(goRegister.innerHTML != "")  location.href = "main.html";
}

function toLogin() {
    if(goLogin.innerHTML != "") location.href = "Login.html";
}

function toRegister() {
    location.href = "Register.html";
}

goMain.addEventListener("click",toMain);
goLogin.addEventListener("click",toLogin);
goRegister.addEventListener("click",toRegister);