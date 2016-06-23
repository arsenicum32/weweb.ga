function fact(n){
	return (n > 1)?n*fact(n-1):1;
}
function ni(n,i){
	 return fact(n)/(fact(i)*fact(n-i));
}
function bin(n,i,t){
	 return ni(n,i)*Math.pow(t,i)*Math.pow(1-t,n-i);
}
function bezier(t,maps){
	var res = {x:0,y:0}, sumX = 0, sumY = 0;
	for(var i = 0; i < maps.length; i++){
	  sumX += maps[i]["x"]*bin(maps.length-1,i,t);
	  sumY += maps[i]["y"]*bin(maps.length-1,i,t);
	}
	return {x:sumX,y:sumY};
}
