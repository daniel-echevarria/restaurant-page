import '../style.css'
import hero from './hero.js'

const loadContent = () => {

  const contentEl = document.getElementById('content')
  const heroEl = hero()

  contentEl.appendChild(heroEl)
  return contentEl
}


document.body.appendChild(loadContent())
