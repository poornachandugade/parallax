
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
    $('.p2t2,.p1t2').css('transform','translateY('+y/6+'px)');
    if(x>1167){
      $('.p1t2,.p2t2').fadeOut();
    }
    else{
      $('.p1t2,.p2t2').fadeIn();
    }

  $('.p3t1').css('transform','translateY('+(x-1637)/2+'px)');


  $('.p4t1').css('transform','translateY('+(x-2237)/2+'px)');
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
