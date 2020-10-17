const map = L.map('mapid').setView([-18.9287974,-48.324422], 16)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], {icon})
    .addTo(map)

})

// adcionar campo de fotos
function addPhotoField() {
    // pegar conteiner de fotos #images
    const container = document.querySelector('#images')
    // pegar conteiner para duplicr .new-upload
    const fieldContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem selecionada.
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    // verificar se o campo esta vazio, se sim, não adicionar ao conteiner de imagens.
    const input = newFieldContainer.children[0]

        if (input.value == ""){
            return
        }    
    // limpar o campo antes de adicionar ao conteiner de imagens
    input.value = ""
    
    // adcionar o clone no conteiner de #images
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }

    // limpar o valor do campo
    span.parentNode.remove();
}

// selecionar sim ou não.
function toggleSelect(event) {

    // retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))
    
    // colocar a class .active nesse botao clicado
        const button = event.currentTarget
        button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')
    
    //verificar se sim ou nao
    input.value = button.dataset.value
}

function validate(event) {
    // validar se lat e lng estão preenchidos
    const locationLat = document.querySelector('[name=lat]');
    const locationLng = document.querySelector('[name=lng]');

    if(locationLat.value == "" || locationLng.value == "") {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
}
