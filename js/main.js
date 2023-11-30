const goMain = document.getElementById('mainHeader');
const goLogin = document.getElementById('loginText');
const goRegister = document.getElementById('registerText');
const menuContainer = document.getElementById("menuContainer");
const refPopup = document.getElementById("ref");

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

function deleteCookie(name) {
    document.cookie = name + '=; expires= Thu, 01 Jan 1970 00:00:01 GMT;';
}

const nameCookieValue = getCookie('name');

if(nameCookieValue == null) {
    goLogin.innerHTML = "Sign in";
    goRegister.innerHTML = "Sign up";
} else {
    const text = document.createElement("span");
    const logout = document.createElement("span");
    text.innerHTML = nameCookieValue+"님 환영합니다.";
    text.style.marginRight = "30px";
    logout.innerHTML = "Logout";
    logout.addEventListener("click", toLogout);
    menuContainer.appendChild(text);
    menuContainer.appendChild(logout);
    goLogin.innerHTML = "";
    goRegister.innerHTML = "";
}

function toMain() {
    location.href = "main.html";
}

function toLogin() {
    if(goLogin.innerHTML != "") location.href = "Login.html";
}

function toLogout() {
    deleteCookie('name');
    location.href = './main.html';
}

function toRegister() {
    if(goRegister.innerHTML != "")  location.href = "Register.html";
}

goMain.addEventListener("click",toMain);
goLogin.addEventListener("click",toLogin);
goRegister.addEventListener("click",toRegister);
refPopup.addEventListener("click", () => {
    alert("쿠키 참조 : https://bluemint.tistory.com/6");
    alert("이미지 출처 : 1. 도쿄 https://kr.trip.com/hot/articles/%EB%8F%84%EC%BF%84+%ED%83%80%EC%9B%8C.html");
    alert("2. 뉴욕 : https://namu.wiki/w/%EB%89%B4%EC%9A%95%EC%A3%BC");
    alert("3. 파리 : https://www.stubbyplanner.com/guide/detail.asp?serial=2010");
    alert("4. 헝가리 : https://m.blog.naver.com/urimalo_/221237840101");
    alert("5. 런던 : https://www.stubbyplanner.com/guide/detail.asp?serial=1382");
    alert("배경화면 : https://s2.best-wallpaper.net/wallpaper/1920x1080/1908/Eiffel-Tower-Paris-France-night-lights-city_1920x1080.jpg")
});