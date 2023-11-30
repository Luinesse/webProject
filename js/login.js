"use strict";

const id = document.getElementById("loginId");
const pw = document.getElementById("loginPw");
const btn = document.getElementById("loginBtn");

function setCookie() {
    document.cookie = "name="+id.value;
}

function goMain() {
    setCookie();
    location.href = "./main.html";
}

function color() {
    if(id.value.length > 0 && pw.value.length >= 5) {
        btn.style.backgroundColor = "#0095F6";
        btn.disabled = false;
    } else {
        btn.style.backgroundColor = "#C0DFFD";
        btn.disabled = true;
    }
}

btn.addEventListener("click", goMain);
id.addEventListener("keyup", color);
pw.addEventListener("keyup", color);
