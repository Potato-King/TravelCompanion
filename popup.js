document.addEventListener('DOMContentLoaded', function() {
var link = document.getElementById('dropdown');
// onClick's logic below:
link.addEventListener('change', function() {
  var a = setInterval(stretch, 3000);
    alert('Option selected');
  },false);
}, false);

function stretch() {
  alert("It's time to stretch!!");
}
