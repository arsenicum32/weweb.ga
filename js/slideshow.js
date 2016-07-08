$(document).ready(function(){
  $('body').on('mouseover', function(e){
    //console.log( e.clientX / $(this).width() );
    if( e.clientX / $(this).width() > 0.5 ){
      $('#change').text(" далее ⟶");
      $('#arrow').removeClass('left');
      $('#arrow').addClass('right');
    }else{
      $('#change').text("⟵ назад");
      $('#arrow').removeClass('right');
      $('#arrow').addClass('left');
    }
  })

  var projects = [
    {
      title: "ars32 portfolio",
      desc: "portfolio for my site",
      link: "http://ars32.tk"
    },{
      title: "codepen",
      desc: "supersite",
      link: "http://codepen.io"
    },{
      title: "hello agency",
      desc: "supersite",
      link: "http://weweb.ml"
    }
  ],
      index = 0;

  $('#change').on('click', function(){
    if( $(this).text().indexOf('назад') == -1 ){
      index < projects.length - 1 ? index ++ : index = 0;
    }else{
      index ? index-- : index = projects.length - 1;
    }

    $('#case').attr('src', projects[index].link );
    $('#ptitle').text( projects[index].title );
    $('#pdesc').text( projects[index].desc );
    $('#plink').attr('href', projects[index].link );
    $('#plink').text( projects[index].link );
  })
})
