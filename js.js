document.addEventListener('DOMContentLoaded', function () {

  var ids = document.querySelectorAll("td");

  var id_values = [];
  ids.forEach(element => {
    id_values.push(parseInt(element.attributes.item(0).value));
  });

  const today = Math.round(new Date().getTime() / 1000);

  var temp = id_values.map(d => Math.abs(today - d + 90));
  var idx = temp.indexOf(Math.min(...temp));

  var current_cell = document.getElementById(id_values[idx]);
  current_cell.classList.add("current-rare");

  window.scrollTo({top: document.querySelector(".current-rare").offsetTop, left: document.querySelector(".current-rare").offsetLeft - document.querySelector(".first-column").offsetWidth, behavior: 'smooth' });
  
});