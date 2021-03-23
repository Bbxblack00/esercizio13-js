
// function test() {
//
//   var btns = $('.btn');

  // btns.each(function() {
  //   console.log($(this));
  // })



  // for (var i = 0; i < btns.length; i++) {
  //
  //   var btn = $(btns[i]);
  //   btn.addClass('bg-red')
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

    $('.box').each(function() {

      var rnd = getRandomValue(1, 100);
      // $(this).find('span').text(rnd);

      $(this).html('<span class="text">' + rnd + '</span>')

    });

  }

  function boxGenerator(boxCount) {

    var boxes = $('.boxes');

    for (var i = 0; i < boxCount; i++) {

      boxes.append('<div class="box"></div>')

    }

  }




function init() {

  boxGenerator(10);

  addRandomValue();

}

// JQUERY
$(document).ready(init);
