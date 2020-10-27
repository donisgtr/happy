const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

function addMarket({id, name, lat, lng}) {

  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
  }).setContent(`${name}<a href="/orphanege?id=${id}"><img src="/images/arrow-white.svg"/></a>`);
  
  L.marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanegeSpan = document.querySelectorAll('.orphaneges span')

orphanegeSpan.forEach( span => {
  const orphanege = {
    id: span.dataset.id,
    nome: span.dataset.nome,
    lat: span.dataset.lat,
    lng: span.dataset.lng
}
  addMarket(orphanege)
})