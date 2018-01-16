var withButtonClass = document.getElementsByClassName("button");
var ButtonQuantity = withButtonClass.length;
var textContent = "";
for (var i=0; i < ButtonQuantity; i++) {
  textContent = withButtonClass[i];
  alert(textContent.innerText);
}