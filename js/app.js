var correct;
// inicilaiza el juego
game();

//enlaza el click de los circulos a la funcion guess
$('.option').on('click', guess);


function game(){
  correct = Math.floor(Math.random() * 2);

  $('.option').each(function(index){
    var color = generateColor();
  $(this).css('background-color', color);

    if (index == correct) {
      $('.question').text(color)
    }
  });
}


function guess() {
    var index = $('.option').index(this);
    if (index == correct) {
      alert('Excelente!');
    } else {
      alert('Muy mal');
    }

    game();
}





function random(){
  return Math.floor(Math.random()*255);
}
function generateColor(){
  return 'rgb(' + random() + ', ' + random() + ', ' + random() +')';
}
