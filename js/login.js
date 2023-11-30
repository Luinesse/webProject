const id = document.getElementById("loginId");
const pw = document.getElementById("loginPw");
const btn = document.querySelector(".loginBtn");

function setCookie() {
    document.cookie = "name="+id.value;
}

function goMain() {
    location = "./main.html";
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

btn.addEventListener("click", () => {
    setCookie();
    goMain();
});

id.addEventListener("keyup", color);
pw.addEventListener("keyup", color);
