
function test() {

  var btns = $('.btn');

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


  $('.btn').each(function() {

    var myBtn = $(this)

    // myBtn.pretend('prova');
    myBtn.html(myBtn.html() = 'prova');

  });



}

function init() {

  test();

}

$(document).ready(init);
