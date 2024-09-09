import { Button } from '../Button/Button'
import './Header.css'

export const Header = () => {
  const header = document.querySelector('header')
  const logo = document.createElement('img')
  const inicio = Button(header, 'Inicio', 'primary', 'l')
  const explorar = Button(header, 'Explorar', 'secondary', 'l')
  const form = document.createElement('form')
  const buscador = document.createElement('input')
  const user = document.createElement('img')
  const notificaciones = document.createElement('img')
  const mensajes = document.createElement('img')

  header.classList = 'flex-container encabezado'
  logo.id = 'logo'
  logo.src = './assets/logopinteres1.png'
  inicio.classList.add('inicio')
  explorar.classList.add('explorar')
  form.id = 'form-busqueda'
  buscador.id = 'buscador'
  buscador.type = 'text'
  buscador.placeholder = '🔎   Buscar'
  user.id = 'usuario'
  user.src = './assets/foto-de-perfil.png'
  mensajes.id = 'mensajes'
  mensajes.src = './assets/mensajes.png'
  notificaciones.id = 'notificaciones'
  notificaciones.src = './assets/campana.png'

  header.append(logo)
  header.append(inicio)
  header.append(explorar)
  header.append(form)
  form.append(buscador)
  header.append(notificaciones)
  header.append(mensajes)
  header.append(user)

  logo.addEventListener('click', () => {
    window.location.href = 'index.html'
  })
  inicio.addEventListener('click', () => {
    window.location.href = 'index.html'
  })
}
