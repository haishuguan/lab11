var a = ["cat", "dog", "bird", "fish", "hamster"];
var b = ["happy", "cute", "lazy", "lovely", "energetic"];
function generate(){
  var num1 = Math.random()*4;
  var num2 = Math.random()*4;
  document.getElementById("output").innerHTML = "What a " + b[num1] + " " + a[num2] + "!";
}
