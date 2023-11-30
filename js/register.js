"use strict";

const rid = document.getElementById("registerId");
const rpw = document.getElementById("registerPw");
const rbtn = document.querySelector(".registerBtn");

function goLogin() {
    if(checkPW())    location.href = "./Login.html"
}

function colorChange() {
    if(rid.value.length > 0 && rpw.value.length >= 5) {
        rbtn.style.backgroundColor = "#0095F6";
        rbtn.disabled = false;
    } else {
        rbtn.style.backgroundColor = "#C0DFFD";
        rbtn.disabled = true;
    }
}

function checkPW()
{
    let regexPw = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;

    if(rid.value.length < 5)
    {
        alert("아이디는 5자 이상이어야 합니다.");
        return false;
    }
    else if(!regexPw.test(rpw.value))
    {
        alert("8~20자 공백을 제외한 영문 대소문자, 숫자, 특수문자를 사용하세요.");
        return false;
    }

    return true;
}

rbtn.addEventListener("click", () => {
    goLogin();
});

rid.addEventListener("keyup", colorChange);
rpw.addEventListener("keyup", colorChange);
