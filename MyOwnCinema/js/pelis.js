window.onload = main();

function main() {
    document.getElementById("menu").style = "margin-top:" + (document.getElementById("header").clientHeight) + "px";
    window.addEventListener('scroll', scroll);
    document.getElementById("marcado").style = "border-bottom: solid white 3px;";
}

function scroll() {
    document.getElementById("menu").style = "margin-top:" + (document.getElementById("header").clientHeight) + "px";
}