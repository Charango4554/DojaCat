
function refreshrange() {
  document.getElementById('rangeout').innerHTML = document.getElementById('range').value;
}
// Vérifie la validité du formulaire
function checkform() {
  debug();
  var validation = true;
  var fout = "Erreur(s) :";
  var f = document.forms['formulaire'];
  if (!f.elements['nom'].checkValidity()) {
    fout += "\n Nom invalide";
    validation = false;
  }
  if (!f.elements['prenom'].checkValidity()) {
    fout += "\n Prénom invalide";
    validation = false;
  }
  if (!f.elements['tel'].checkValidity()) {
    fout += "\n Numéro de téléphone invalide";
    validation = false;
  }
  if (!f.elements['photo'].checkValidity()) {
    fout += "\n Photo invalide";
    validation = false;
  }
  if (!f.elements['datenaissance'].checkValidity()) {
    fout += "\n Date de naissance invalide";
    validation = false;
  }
  if (!f.elements['age'].checkValidity()) {
    fout += "\n Age invalide";
    validation = false;
  }
  if (!f.elements['semainenaissance'].checkValidity()) {
    fout += "\n Semaine de naissance invalide";
    validation = false;
  }
  if (!f.elements['moisnaissance'].checkValidity()) {
    fout += "\n Mois de naissance invalide";
    validation = false;
  }
  if (!f.elements['email'].checkValidity()) {
    fout += "\n Adresse E-mail invalide";
    validation = false;
  }
  if (!f.elements['mpd'].checkValidity()) {
    fout += "\n Mot de passe invalide";
    validation = false;
  }
  if (!f.elements['range'].checkValidity()) {
    fout += "\n Echelle de satisfaction invalide";
    validation = false;
  }
  if (!f.elements['dojparfait'].checkValidity()||f.elements['dojparfait'].value=="default") {
    fout += "\n Séléctionnez votre prefrerence";
    validation = false;
  }
  if (!f.elements['couleur'].checkValidity()) {
    fout += "\n Couleur préferée invalide";
    validation = false;
  }

  if (!(f.elements['chienanimal'].checkValidity()&&f.elements['chatanimal'].checkValidity())) {
    fout += "\n Séléctionnez chat ou chien";
    validation = false;
  }
  if (!f.elements['cgu'].checkValidity()) {
    fout += "\n Conditions générales d'utilisation non acceptées";
    validation = false;
  }
  if (!f.elements['heure'].checkValidity()) {
    fout += "\n Heure de reception des mails invalide";
    validation = false;
  }
  if (!f.elements['commentaire'].checkValidity()||f.elements['commentaire'].value=="") {
    fout += "\n Commentaire invalide";
    validation = false;
  }
  if (!validation) {
    alert(fout);
  }
  return validation;
}
// pour vérifier les entrées
function debug() {
  var f = document.forms['formulaire'];
  var elmts = ['nom', 'prenom', 'tel', 'photo', 'datenaissance', 'age', 'semainenaissance', 'moisnaissance', 'email', 'mpd', 'range', 'dojparfait', 'couleur', 'chatanimal', 'chienanimal', 'cgu', 'heure', 'datedesinscription', 'commentaire'];
  elmts.forEach(itm => console.log(itm + ' = ' + f.elements[itm].value));
}
