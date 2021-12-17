window.onload = main();

function main() {
    document.getElementById("registrarse").style = "filter:opacity(0.5);";
    document.getElementById("registrarse").setAttribute("href", "#");
    document.getElementById("footer").setAttribute("style", "bottom: 0; position: fixed;");
    document.getElementById("form").style = "margin-top:" + (window.outerHeight / 5) + "px;";
    console.log(window.outerWidth)
}