loader.push(function(){
  for(var i in data ){ create(data[i]);}
});

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
  //console.log( bezier( ob.percent , [{x:0,y:0},{x:500,y: 500},{x:1000,y:1000}]) );
    var objs = $(".fly").each(function(){
      var obj = $(this);
      var point = bezier( ob.percent , this.arr );
      obj.css('left',  point['x'] + 'px'); //(ob.percent * window.innerWidth*speed - window.innerWidth * obj.attr('offset') )
      obj.css('top', ob.offset + point['y'] + 'px'  );
    });
}

function create(p){
  function ht(a){
    return a? Math.floor(Math.random() * a ) :
    Math.floor(Math.random() * window.innerHeight );
  }
  var obj = document.createElement('img');
  obj.setAttribute('src', p.src || 'http://ars32.tk/draws/ars-01.png');
  obj.setAttribute('class', 'fly');
  obj.setAttribute('tr', 0 );
  obj.arr = [];
  obj.arr.push({x:-500,y: ht() });
  for(var i=0;i<Math.floor(Math.random()*10);i++){
    obj.arr.push({x: ht( window.innerWidth/2 ), y: ht() });
  }
  obj.arr.push( {x: window.innerWidth + 500 ,y: ht() } )
  document.body.appendChild(obj);
  return obj;
}

/// даём координаты и их время , возвращаем позицию
