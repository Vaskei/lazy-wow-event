document.addEventListener('DOMContentLoaded', function () {

  function refresh_table() {
    console.log("Refreshing table!");
    var ids = document.querySelectorAll("td");

    ids.forEach(element => {
      element.classList.remove("current-rare");
    });
    console.log("Removed classes");
  
    var id_values = [];
    ids.forEach(element => {
      id_values.push(parseInt(element.attributes.item(0).value));
    });
  
    const today = Math.round(new Date().getTime() / 1000);
  
    var temp = id_values.map(d => Math.abs(today - d + 90));
    var idx = temp.indexOf(Math.min(...temp));
    console.log("Got current index " + idx);
  
    var current_cell = document.getElementById(id_values[idx]);
    console.log("Got curent element " + current_cell);

    current_cell.classList.add("current-rare");
    console.log("Added class to current element");
  
    window.scrollTo({top: document.querySelector(".current-rare").offsetTop, left: document.querySelector(".current-rare").offsetLeft - document.querySelector(".first-column").offsetWidth, behavior: 'smooth' });
  }

  refresh_table();

  setInterval(refresh_table, 30000);
  
});