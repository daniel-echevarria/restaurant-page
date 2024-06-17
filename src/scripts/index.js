import '../styles/index.css';
import loadWelcome from './welcome.js'
import loadMenu from './menu.js'
import loadReservations from './reservations.js'
import loadContact from './contact.js'

const loadContent = () => {
  const contentEl = document.getElementById('content')

  const welcomePage = loadWelcome()
  const menuPage = loadMenu()
  const reservationsPage = loadReservations()
  const contactPage = loadContact()

  const homeButtons = document.querySelectorAll('.home-btn')
  homeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
    contentEl.innerHTML = ''
    contentEl.appendChild(welcomePage)
    })
  })

  const menuBtn = document.getElementById('menu-btn')
  menuBtn.addEventListener('click', function() {
    contentEl.innerHTML = ''
    contentEl.appendChild(menuPage)
  })

  const reservationsBtn = document.getElementById('reservations-btn')
  reservationsBtn.addEventListener('click', function() {
    contentEl.innerHTML = ''
    contentEl.appendChild(reservationsPage)
  })

  const contactBtn = document.getElementById('contact-btn')
  contactBtn.addEventListener('click', function() {
    contentEl.innerHTML = ''
    contentEl.appendChild(contactPage)
  })

  contentEl.append(welcomePage)
  return contentEl
}


loadContent()
