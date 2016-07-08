$(document).ready(function(){
  $('body').on('mouseover', function(e){
    console.log( e.clientX / $(this).width() );
    if( e.clientX / $(this).width() > 0.5 ){
      $('#arrow').html("<a href='#'> далее ⟶</a>");
      $('#arrow').removeClass('left');
      $('#arrow').addClass('right');
    }else{
      $('#arrow').html("<a href='#'>⟵ назад</a>");
      $('#arrow').removeClass('right');
      $('#arrow').addClass('left');
    }
  })
})
