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
  {src: 'http://ars32.tk/draws/ars-01.png', speed: Math.random()*3, offset: Math.random() },
  {src: 'http://ars32.tk/draws/ars-02.png', speed: Math.random()*3, offset: Math.random()},
  {src: 'http://ars32.tk/draws/ars-03.png', speed: Math.random()*3, offset: Math.random()},
  {src: 'http://ars32.tk/draws/ars-04.png', speed: Math.random()*3, offset: Math.random()},
  {src: 'http://ars32.tk/draws/ars-05.png', speed: Math.random()*3, offset: Math.random()},
  {src: 'http://ars32.tk/draws/ars-06.png', speed: Math.random()*3, offset: Math.random()}
]


function fire(ob){
  if(ob.step>0){
    var objs = $(".fly").each(function(){
      var obj = $(this);
      var speed = obj.speed || 3;
      var offset = ob.offset  + window.innerHeight*( - ob.percent + obj.attr('offset') )+ 'px';
      obj.css('left', (ob.percent * window.innerWidth*speed - window.innerWidth)  + 'px')
      obj.css('top', offset);
    });
  }
}

function create(p){
  var obj = document.createElement('img');
  obj.setAttribute('src', p.src || 'http://ars32.tk/draws/ars-01.png');
  obj.setAttribute('class', 'fly');
  obj.speed = p.speed || 2;
  document.body.appendChild(obj);
  return obj;
}
