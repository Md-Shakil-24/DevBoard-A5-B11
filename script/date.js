
function updateDate() {
    let d = new Date();
    let options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    let parts = d.toLocaleDateString('en-US', options).split(" ");
    document.getElementById("weekday").textContent = parts[0];
    document.getElementById("date").textContent = parts[1] + " " + parts[2] + " " + parts[3];
}
updateDate();
setInterval(updateDate, 60000);