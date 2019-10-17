var acc = document.getElementsByClassName("boxaccordion");

var i;

for (i = 0; i < acc.length; i++) {

acc[i].addEventListener("click", function() {

this.classList.toggle("boxactive");

var boxpanel = this.nextElementSibling;

if (boxpanel.style.maxHeight) {

boxpanel.style.maxHeight = null;

} else {

boxpanel.style.maxHeight = boxpanel.scrollHeight + "px";

}

});

}
