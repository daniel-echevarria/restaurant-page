import restoImg from '../resto.jpg'

export default function hero() {

  const heroContainer = document.createElement('div')
  heroContainer.classList.add('hero-container')

  const heroTitle = document.createElement('h1')
  heroTitle.classList.add('hero-title')
  heroTitle.innerHTML = 'Restunning'

  const heroImg = document.createElement('img')
  heroImg.classList.add('hero-img')
  heroImg.src = restoImg

  heroContainer.appendChild(heroTitle)
  heroContainer.appendChild(heroImg)

  return heroContainer
}
