import './Gallery.css'
import { Card } from '../Card/Card'
import { Button } from '../Button/Button'

export const Gallery = () => {
  // Creo los elementos necesarios
  const main = document.querySelector('main')
  const gallery = document.createElement('section')

  const mostrarMas = Button(main, 'Mostrar más', 'primary', 'l')
  const formBusqueda = document.querySelector('#form-busqueda')
  const buscador = document.querySelector('#buscador')

  gallery.id = 'gallery'
  mostrarMas.id = 'mostrar-mas'

  main.append(gallery)
  main.append(mostrarMas)

  let page = 1
  const accessKey = 'FIhMBvBpsCoKRT0aVRCkbo4R_Nw-55vzgByC1WCXE2c'

  // Función que trae los resultados
  async function buscarImagenes(keyword = 'nature') {
    // Si no hay valor en el buscador, usa el valor por defecto 'nature'
    keyword = keyword || 'nature'

    // Armo la URL
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`

    // Realizo la búsqueda
    const response = await fetch(url)
    const data = await response.json()

    // Si es la primera vez que busco limpio el contenedor donde se muestran los resultados
    if (page === 1) {
      gallery.innerHTML = ''
    }

    const resultados = data.results

    // Por cada resultado armo una carta
    Card(gallery, resultados)

    // Muestro el botón mostrar más si hay más resultados
    if (data.total_pages > page) {
      mostrarMas.style.display = 'block'
    } else {
      mostrarMas.style.display = 'none'
    }

    if (data.results.length === 0) {
      const main = document.querySelector('main')
      const sinResultados = document.createElement('section')
      const mensaje = document.createElement('h3')
      const divSugerencias = document.createElement('div')
      const Sugerencia1 = Button(divSugerencias, 'Perros', 'primary', 'l')
      const Sugerencia2 = Button(divSugerencias, 'Gatos', 'primary', 'l')
      const Sugerencia3 = Button(divSugerencias, 'Paisajes', 'primary', 'l')

      sinResultados.className = 'no-results'
      mensaje.className = 'mensaje'
      mensaje.textContent =
        'No se encontraron resultados. Prueba con las siguientes opciones'
      divSugerencias.className = 'sugerencias'

      main.append(sinResultados)
      sinResultados.append(mensaje)
      sinResultados.append(divSugerencias)
      divSugerencias.append(Sugerencia1)
      divSugerencias.append(Sugerencia2)
      divSugerencias.append(Sugerencia3)

      Sugerencia1.addEventListener('click', () => {
        sinResultados.remove()
        buscador.value = Sugerencia1.textContent
        buscarImagenes(buscador.value)
      })

      Sugerencia2.addEventListener('click', () => {
        sinResultados.remove()
        buscador.value = Sugerencia2.textContent
        buscarImagenes(buscador.value)
      })

      Sugerencia3.addEventListener('click', () => {
        sinResultados.remove()
        buscador.value = Sugerencia3.textContent
        buscarImagenes(buscador.value)
      })
    }
  }

  // Agrego funcionalidad para cuando se envía el formulario
  formBusqueda.addEventListener('submit', (e) => {
    // Evito que se recargue la página
    e.preventDefault()
    page = 1
    buscarImagenes(buscador.value)
  })

  // Funcionalidad al botón Mostrar más.
  mostrarMas.addEventListener('click', () => {
    page++
    buscarImagenes(buscador.value)
  })

  // Evento para detectar cuando se presiona Enter en el buscador
  buscador.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault() // Prevenir la recarga de la página
      page = 1
      buscarImagenes(buscador.value)
    }
  })

  // Evento para detectar limpiar el buscador cuando lo selecciono
  buscador.addEventListener('focus', () => {
    buscador.value = ''
  })

  // Llamar a buscarImagenes con "nature" cuando la página se carga
  buscarImagenes()
}
