$(document).ready(function () {

});

// js-extend-main-navigation
function openNav() {
    document.getElementsByClassName("js-extend-main-navigation").style.width = "250px";
    document.getElementsByClassName("main-navigation").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementsByClassName("js-extend-main-navigation").style.width = "0";
    document.getElementsByClassName("main-navigation").style.marginLeft = "0";
}