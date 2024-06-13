import '../styles/index.css';
import loadWelcome from './welcome.js'
import loadMenu from './menu.js'

const loadContent = () => {

  const contentEl = document.getElementById('content')
  const welcomeBtn = document.getElementById('welcome-btn')
  welcomeBtn.addEventListener('click', function() {
    contentEl.innerHTML = ''
    contentEl.appendChild(loadWelcome())
  })
  const menuPage = loadMenu()

  contentEl.append(menuPage)
  return contentEl
}


document.body.appendChild(loadContent())
