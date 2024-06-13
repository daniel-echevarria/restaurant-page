import '../styles/index.css';
import loadWelcome from './welcome.js'
import loadMenu from './menu.js'

const loadContent = () => {
  const contentEl = document.getElementById('content')

  const welcomePage = loadWelcome()
  const welcomeBtns = document.querySelectorAll('.home-btn')
  welcomeBtns.forEach(function(button) {
    button.addEventListener('click', function() {
    contentEl.innerHTML = ''
    contentEl.appendChild(welcomePage)
    })
  })

  const menuBtn = document.getElementById('menu-btn')
  menuBtn.addEventListener('click', function() {
    contentEl.innerHTML = ''
    contentEl.appendChild(loadMenu())
  })

  contentEl.append(welcomePage)
  return contentEl
}


document.body.appendChild(loadContent())
