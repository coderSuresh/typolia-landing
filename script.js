var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var shower = document.getElementById("shower");
var hider = document.getElementById("hider");

function showMenu() {
    menu1.style.top = '150px';
    menu2.style.top = '356px';
    hider.style.display = 'block';
    shower.style.display = 'none';
}

function hideMenu() {
    menu1.style.top = '-500px';
    menu2.style.top = '-500px';
    hider.style.display = 'none';
    shower.style.display = 'block';
}