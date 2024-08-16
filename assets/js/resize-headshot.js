document.addEventListener('DOMContentLoaded', function() {
  var h1 = document.querySelector('h1');
  var img = document.querySelector('img');
  var body =document.querySelector('body');

  if (h1 && img) {
    img.style.width = h1.offsetWidth + 'px'; // Set image width to match the <h1> width
    img.style.display = "block";
    body.style.visibility = "visible";
  }
});