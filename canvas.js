function draw() {
  // recupere le contexte de dessin du canvas
  var ctx = document.getElementById('canvas').getContext('2d');
  var w = document.getElementById('canvas').width;
  var h = document.getElementById('canvas').height;

  // definit la couleur de remplissage du premier cercle
  ctx.fillStyle = '#642580';

  // dessine le premier cercle
  ctx.beginPath();
  ctx.arc(w / 4, h / 2, h / 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  // definit la couleur de remplissage du deuxieme cercle
  ctx.fillStyle = '#642580';

  // dessine le deuxieme cercle
  ctx.beginPath();
  ctx.arc(3 * w / 4, h / 2, h / 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  // definit la couleur de remplissage du carre
  ctx.fillStyle = '#9737BF';

  // dessine le carre
  ctx.beginPath();
  ctx.rect(w / 4, h / 4, w / 2, h / 2);
  ctx.fill();
  ctx.closePath();

  // definit la police et la couleur de texte
  ctx.font = '48px sans-serif';
  ctx.fillStyle = '#000000';

  // dessine le texte
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('(つ≧▽≦)つ', w / 2, h / 2);


}




