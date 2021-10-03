var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var shower = document.getElementById("shower");
var hider = document.getElementById("hider");

function showMenu() {
  menu1.style.display = "block";
  menu2.style.display = "block";
  menu1.style.top = "0px";
  menu2.style.top = "335px";
  menu1.style.paddingTop = "150px";
  menu2.style.paddingBottom = "100%";
  hider.style.display = "block";
  shower.style.display = "none";
  document.body.style.overflowY = "hidden";
}

function hideMenu() {
  menu1.style.display = "none";
  menu2.style.display = "none";
  hider.style.display = "none";
  shower.style.display = "block";
  document.body.style.overflowY = "auto";
}
