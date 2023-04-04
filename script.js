const baseURL = 'https://api.pexels.com/v1/'
const divPaiImagens = document.getElementById('lugar-imagens')

async function getAllPhotos(){

    const response = await fetch(`${baseURL}/curated?page=10&per_page=12`, {
        headers:{
            Authorization: 'AaJXaRbpMP30i86rUNSWEg6u1KqzxJ2EhydWJNEoNDnaHvgrcdTjMcD7'
        }
    })
    const data = await response.json()

    for(const item of data.photos){
        const urlImg = item.src.tiny

        const divImg = document.createElement('img')
        divImg.setAttribute('src', urlImg)
        divPaiImagens.appendChild(divImg)
    }
}
getAllPhotos()