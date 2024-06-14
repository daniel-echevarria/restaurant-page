import '../styles/index.css';
import loadWelcome from './welcome.js'
import loadMenu from './menu.js'

const loadContent = () => {
  const contentEl = document.getElementById('content')

  const welcomePage = loadWelcome()
  const menuPage = loadMenu()
  // const contactPage = loadContact()

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

  contentEl.append(menuPage)
  return contentEl
}


document.body.appendChild(loadContent())
