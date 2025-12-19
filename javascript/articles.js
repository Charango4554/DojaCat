var modal = document.getElementById('modal');
function openmodal(id) {
  modal.style.display = "block";
  document.getElementById(id).style.display = "block";
}

// Fermeture
function closemodal() {
  modal.style.display = "none";
  let tabid = ['Grammy', 'Covid', 'musique'];
  for (let i = 0; i < tabid.length; i++) {
    document.getElementById(tabid[i]).style.display = "none";
  }
}
