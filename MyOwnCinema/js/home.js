window.onload = main();

function main() {
    console.log(document.getElementById("header").clientHeight)
    document.getElementById("menu").style = "margin-top:" + (document.getElementById("header").clientHeight) + "px";
    window.addEventListener('scroll', scroll);
}

function scroll() {
    document.getElementById("menu").style = "margin-top:" + (document.getElementById("header").clientHeight) + "px";

}