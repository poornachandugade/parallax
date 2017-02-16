
$(document).ready(function(){

$(document).scroll(function () {
  var x = $(this).scrollTop();
  var y = 1037-x;
  $('.p1t1').css('transform','translateY('+x/2+'px)');
  if(x>315){
    $('.p1t1').fadeOut();
  }
  else{
    $('.p1t1').fadeIn();
  }
  var m = $('.p1t2').offset();
    $('.p2t2,.p1t2').css('transform','translateY('+(x-(m.top))/2+'px)');
    if(x>1167){
      $('.p1t2,.p2t2').fadeOut();
    }
    else{
      $('.p1t2,.p2t2').fadeIn();
    }
  var o = $('.p3t1').offset();
  $('.p3t1').css('transform','translateY('+(x-(o.top))/2+'px)');

  var f = $('.p4t1').offset();
  $('.p4t1').css('transform','translateY('+(x-(f.top))/2+'px)');
    console.log(x);
});

$('.menu').on('click',function(){
  console.log('hi');
  $(this).removeClass('fullFluid1');
  $(this).addClass('fullFluid');
});
$('.bod').on('click',function(){
  console.log('hi1');
  $(this).removeClass('fullFluid');
  $('.menu').addClass('fullFluid1');
});

});
