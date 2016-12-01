console.log('js file loaded');
var formClicked = function() {
  alert("Click alert! Click alert!");
}
var timeout = setTimeout(function() {
  document.getElementById("pollForm").addEventListener("click", formClicked);
}, 1000);
