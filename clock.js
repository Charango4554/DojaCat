var c = document.getElementById('clock');
var day = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi","Vendredi", "Samedi"];
var month = ["Janvier", "Février", "Mars", "Avril", "Mai","Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
// Démarre l'horloge
function startclock() {
  var i = setInterval('clock()', 500);
}
// Actualise l'horloge
function clock() {
  var d = new Date();
  var b = day[d.getDay()] + "   " + d.getDate() + "   " + month[d.getMonth()] + "   " + d.getFullYear() + "<br />";
  b += ((d.getHours() < 10)? "0" : "") + d.getHours() + " : " + ((d.getMinutes() < 10)? "0" : "") + d.getMinutes() + " : " + ((d.getSeconds() < 10)? "0" : "") + d.getSeconds();
  c.innerHTML = b;
}
