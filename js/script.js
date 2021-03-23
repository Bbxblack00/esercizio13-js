
// function test() {
//
//   var btns = $('.btn');

  // btns.each(function() {
  //   console.log($(this));
  // })



  // for (var i = 0; i < btns.length; i++) {
  //
  //   var btn = $(btns[i]);
  //   btn.addClass('bg-red');
  //
  // }




  // $('.btn').each(function() {
  //
  //   console.log($(this));
  //
  // });


//   $('.btn').each(function() {
//
//     var myBtn = $(this)
//
//     // myBtn.pretend('prova');
//     // myBtn.append('prova');
//     myBtn.html(myBtn.html() = 'prova');
//
//   });
//
//
//
// }




  function getRandomValue(min, max) {

    var localMin = min;
    var localMax = max - min + 1;

    return Math.floor(Math.random() * localMax) + localMin;

  }




  function addRandomValue() {

      // $(this).find('span').text(rnd);

      $('.box').click(function() {

        var clickedBtn = $(this);
        var clickedSpan = clickedBtn.find('span');
        var htmlSpan = clickedSpan.text();

        if (htmlSpan % 2 == 0) {
          clickedBtn.toggleClass('gr-sp');
        }else {
          clickedBtn.toggleClass('rd-sp');
        }
        clickedSpan.toggle();
      });

  }


  // creare classe invisibile che al click si rende visibile, rimuovendola

  function boxGenerator(boxCount) {

    var boxes = $('.boxes');

    for (var i = 0; i < boxCount; i++) {

      var rnd = getRandomValue(1, 100);
      boxes.append('<div class="box"><span class="text invisibile">' + rnd + '</span></div>');

    }

  }



// Chiedere all'utente il numero di quadratini da generare dinamicamente
// e far comparire/scomparire il valore casuale (fisso) al click sulla singola box

// Nel momento in cui la box mostra il valore contenuto colorare il background di verde per valori
// pari e rosso per valori dispari, nascondendo poi il colore alla scomparsa del valore


function init() {

  var numBox = parseInt(prompt('inserisci il numero di blocchi che vuoi visualizzare'));

  boxGenerator(numBox);

  addRandomValue();

}

// JQUERY
$(document).ready(init);
