window.onload = main();

function main() {
    iconos();
    window.addEventListener('scroll', scroll);
}

function scroll() {
    iconos();
}

function iconos() {
    console.log("asd")
    if (document.documentElement.scrollWidth < 400) {
        document.getElementById("acceder").innerHTML = '<a href="login.html"><img id="accederI" src="./img/acceder.png"></a>';
        document.getElementById("registro").innerHTML = '<a href="registro.html"><img id="registroI" src="./img/registro.png"></a>';
    } else {
        document.getElementById("acceder").innerHTML = '<a href="login.html">Acceder</a>';
        document.getElementById("registro").innerHTML = '<a href="registro.html">Registrarse</a>';
    }
    console.log(window.outerWidth)
}