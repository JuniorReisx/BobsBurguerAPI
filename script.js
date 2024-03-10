const sessaoPrincipal = document.getElementById("sessaoPrincipal")

let request = new XMLHttpRequest()
request.open("GET", "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265")

request.send()

request.onload = function() {
    console.log(request.response)
    let dadoConvertido = JSON.parse(request.response)
    console.log(dadoConvertido[0])
    aparecerTela(dadoConvertido)
}

function aparecerTela(dadoConvertido) {
    for (let i = 0; i < dadoConvertido.length; i++) {
        const carCard = document.createElement("div")
        carCard.className = "resposta"
        if (dadoConvertido[i].image) {
            const imageElement = document.createElement("img")
            imageElement.src = dadoConvertido[i].image
            imageElement.alt = "Character Image"
            imageElement.className = "imagem"
            carCard.appendChild(imageElement)
        }
        carCard.innerHTML += "<p>Age: " + dadoConvertido[i].age + "</p>"
        carCard.innerHTML += "<p>Occupations: " + dadoConvertido[i].allOccupations + "</p>"
        carCard.innerHTML += "<p>First Episode: " + dadoConvertido[i].firstEpisode + "</p>"
        carCard.innerHTML += "<p>Gender: " + dadoConvertido[i].gender + "</p>"
        carCard.innerHTML += "<p>Hair: " + dadoConvertido[i].hair + "</p>"
        carCard.innerHTML += "<p>ID: " + dadoConvertido[i].id + "</p>"

        sessaoPrincipal.appendChild(carCard)
    }
}

const Esquerda = document.getElementById("Esquerda")
const Direita = document.getElementById("Direita")

let paraLado = 700

Esquerda.addEventListener("click", () => {
    sessaoPrincipal.scrollLeft -= paraLado
})

Direita.addEventListener("click", () => {
    sessaoPrincipal.scrollLeft += paraLado
})
