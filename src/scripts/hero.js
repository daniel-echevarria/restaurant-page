import restoImg from '../brunch.jpg'

export default function welcome() {

  const heroContainer = document.createElement('div')
  heroContainer.classList.add('hero-container')

  const heroImg = document.createElement('img')
  heroImg.classList.add('hero-img')
  heroImg.src = restoImg

  const heroTexContainer = document.createElement('div')
  heroTexContainer.classList.add('hero-text-container')

  const heroText = document.createElement('p')
  heroText.classList.add('hero-text')
  heroText.innerHTML = `Mimosa Moor is a place to forget everything you thought you knew about food.
                    Prepare yourselves for an adventure that will have you questioning
                    whether you've been eating at all before.`
  heroTexContainer.appendChild(heroText)

  heroContainer.appendChild(heroImg)
  heroContainer.appendChild(heroTexContainer)

  return heroContainer
}
