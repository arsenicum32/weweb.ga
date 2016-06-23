window.onload = function(){
  for(var i in data ){ create(data[i]);}
}

window.onscroll = function(){
  var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  var sc = {
    step: Math.floor(window.pageYOffset/window.innerHeight), //scrollHeight
    percent: window.pageYOffset/scrollHeight,
    offset: window.pageYOffset
  }
  fire( sc );
}

var data = [
  {src: 'http://ars32.tk/draws/ars-01.png', speed: Math.random()*1, offset: Math.random(), leftm: 1.2 },
  {src: 'http://ars32.tk/draws/ars-02.png', speed: Math.random()*1.1, offset: Math.random(), leftm: 1.5 },
  {src: 'http://ars32.tk/draws/ars-07.png', speed: Math.random()*1.3, offset: Math.random(), leftm: 0.9},
  {src: 'http://ars32.tk/draws/ars-04.png', speed: Math.random()*1.43, offset: Math.random(), leftm: 2},
  {src: 'http://ars32.tk/draws/ars-05.png', speed: Math.random()*2, offset: Math.random(), leftm: 1.7},
  {src: 'http://ars32.tk/draws/ars-06.png', speed: Math.random()*1.5, offset: Math.random(), leftm: 1.4}
]


function fire(ob){
  if(ob.step>0){
    var objs = $(".fly").each(function(){
      var obj = $(this);
      var speed = obj.speed || 3;
      var offset =  ob.offset + window.innerHeight*obj.attr('offset')  + 'px';
      var cof = obj.css('left').slice( 0,obj.css('left').length-2 );
      console.log(cof);
      obj.tr += Math.random()*50;
      obj.css('-webkit-transform', 'rotate('+ obj.tr+'deg)');
      obj.css('left', ( parseFloat(cof) + (Math.random() * window.innerWidth*ob.percent)/40 )  + 'px') //(ob.percent * window.innerWidth*speed - window.innerWidth * obj.attr('offset') )
      obj.css('top', offset);
    });
  }
}

function create(p){
  var obj = document.createElement('img');
  obj.setAttribute('src', p.src || 'http://ars32.tk/draws/ars-01.png');
  obj.setAttribute('offset', p.offset || Math.random());
  obj.setAttribute('class', 'fly');
  obj.setAttribute('tr', 0 );
  obj.speed = p.speed || 2;
  obj.leftm = p.leftm || 2;
  obj.tr = 0;
  document.body.appendChild(obj);
  return obj;
}
