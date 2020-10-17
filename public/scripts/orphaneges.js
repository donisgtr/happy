var map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

L.marker([-27.222633, -49.6455874])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
