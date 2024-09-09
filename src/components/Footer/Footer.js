import './Footer.css'

const Footer = () => {
  return `
   <h3>Copyright 2024 - Proyecto 3 - Pinterest - Joachim Gómez</h4>
   `
}

export const printFooter = () => {
  document.querySelector('footer').innerHTML = Footer()
}

printFooter()
