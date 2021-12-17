window.onload = main();

function main() {
    document.getElementById("acceso").style = "filter:opacity(0.5);";
    document.getElementById("acceso").setAttribute("href", "#");
    document.getElementById("form").style = "margin-top:" + (window.outerHeight / 5) + "px;" + "margin-bottom:" + (window.outerHeight / 5.2) + "px;";
    console.log(window.outerHeight)
}