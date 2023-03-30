let stop_lat = -40.833333;
let stop_lon = 172.9;
let zoom = 13;
let title = "Abel Tasman Nationalpark";

const STOPS = ["Franz-Josef Gletscher", "Abel Tasman Nationalpark", "Picton"];
console.log(STOPS)
console.log(STOPS[0]);
console.log(STOPS[1]);
console.log(STOPS[2]);
console.log(STOPS.length);


let map = L.map('map').setView([stop_lat, stop_lon], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lon]).addTo(map)
    .bindPopup(title)
    .openPopup(); 