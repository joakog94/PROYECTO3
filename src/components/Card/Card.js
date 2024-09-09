import './Card.css'
import { Button } from '../Button/Button'

//Funcion para crear las cartas con cada imagen que obtengo de la API
export const Card = (nodoPadre, resultados) => {
  resultados.map((result) => {
    const card = document.createElement('div')
    const imagen = document.createElement('img')
    const button = Button(card, 'Visitar', 'tertiary', 'm')
    const imagenLink = document.createElement('a')
    const perfil = document.createElement('img')
    const nombre = document.createElement('p')
    const fecha = document.createElement('p')
    //Los elementos que solo aparecen cuando hago hover
    const likesDiv = document.createElement('div')
    const corazon = document.createElement('img')
    const likes = document.createElement('p')
    const fotosDiv = document.createElement('div')
    const camara = document.createElement('img')
    const fotos = document.createElement('p')

    card.classList.add('card')
    imagen.src = result.urls.small
    imagen.classList.add('imagen')
    imagenLink.href = result.links.html
    imagenLink.target = '_blank'
    perfil.classList.add('perfil')
    perfil.src = result.user.profile_image.large
    nombre.textContent = result.user.name
    fecha.textContent = result.created_at.slice(0, 10)
    //Los elementos que solo aparecen cuando hago hover
    likesDiv.classList.add('div-likes')
    corazon.src = './assets/corazon.png'
    likes.textContent = result.likes
    fotosDiv.classList.add('div-fotos')
    camara.src = './assets/camara.png'
    fotos.textContent = result.user.total_photos
    button.classList.add('button')

    nodoPadre.append(card)
    card.append(imagenLink)
    card.append(perfil)
    card.append(nombre)
    card.append(fecha)
    card.append(button)
    imagenLink.appendChild(imagen)
    card.append(likesDiv)
    likesDiv.append(corazon)
    likesDiv.append(likes)
    card.append(fotosDiv)
    fotosDiv.append(camara)
    fotosDiv.append(fotos)

    button.addEventListener('click', () => {
      window.open(imagenLink)
    })
  })
}
