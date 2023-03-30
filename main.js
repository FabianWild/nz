var map = L.map('map').setView([-40.833333, 172.9], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-40.833333, 172.9]).addTo(map)
    .bindPopup('Abel Tasman Nationalpark')
    .openPopup(); 