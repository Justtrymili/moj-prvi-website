


var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
  this.width ="29"
});
image.addEventListener("mouseout", function(){
  this.width ="26";


});
var image1 = document.getElementById("image1");
image1.addEventListener("mouseover", function(){
  this.width ="22"
});
image1.addEventListener("mouseout", function(){
  this.width ="20";


});
var image2 = document.getElementById("image2");
image2.addEventListener("mouseover", function(){
  this.width ="22"
});
image2.addEventListener("mouseout", function(){
  this.width ="19";


});

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click",function(){
  var newMesages = document.createElement("li");
  newMesages.innerHTML = textbox.value;
  messages.appendChild(newMesages);
  textbox.value= "";
});

