var color = new Array;
color[1] = "RED";
color[2] = "BLUE";
color[3] = "GREEN";
color[4] = "YELLOW";
var getcolor = Math.floor(Math.random()*color.length);
if (getcolor == 0) {
  var getcolor = Math.floor(Math.random()*color.length);
}
function start(){
  document.getElementById("color").innerHTML = color[getcolor];
  setTimeout(function (){
    document.getElementById("color").style.display="none";
  }, 500);
}
function right(){
  var getcolor = Math.floor(Math.random()*color.length);
  if (getcolor == 0) {
    var getcolor = Math.floor(Math.random()*color.length);
  }
  document.getElementById("color").innerHTML = color[getcolor];
  setTimeout(function (){
    document.getElementById("color").style.display="none";
  }, 500);
}
function red(){
  if (color[getcolor] == "RED"){right()}
  else{alart("Game Over");}
}
function blue(){
  if (color[getcolor] == "BLUE"){right()}
  else{alart("Game Over");}
}
function yellow(){
  if (color[getcolor] == "YELLOW"){right()}
  else{alart("Game Over");}
}
function green(){
  if (color[getcolor] == "GREEN"){right()}
  else{alart("Game Over");}
}
