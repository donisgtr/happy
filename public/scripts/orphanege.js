const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}


const map = L.map('mapid', options).setView([-27.222633, -49.6455874], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})



L.marker([-27.222633, -49.6455874], { icon })
  .addTo(map)



  /* image gallary */

  function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active

    const buttons = document.querySelectorAll('.images button');
    buttons.forEach( (button) => {
        button.classList.remove("active")
    })

    // selecionar a imagem clicada

    const image = button.children[0]
    const imgaContainer =  document.querySelector(".orphanege-details > img ")
 
    // atualizar o container de imagem

    imgaContainer.src = image.src

    // adicionar de volta a classe .active para este botão que foi clicado

    button.classList.add("active")

  }
