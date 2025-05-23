import "./hamburger";
import "./swiper";
import "./clarity";
import "./gallery";

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("#darkmode-switch").checked = getCookie("invertedmode") === "true";
    document.querySelector(".header__switch").classList.add("header__switch--transition-ready");
    document.querySelector(":root").classList.add("root--transition-ready")
})

document.querySelector("#darkmode-switch").addEventListener("change", (e) => {
    setCookie("invertedmode", e.target.checked);
})