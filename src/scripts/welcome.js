import '../styles/welcome.css'
import restoImg from '../brunch.jpg'

export default function loadWelcomePage() {

  const welcomeContainer = document.createElement('div')
  welcomeContainer.classList.add('welcome-container')

  const welcomeImg = document.createElement('img')
  welcomeImg.classList.add('welcome-img')
  welcomeImg.src = restoImg

  const welcomeTextContainer = document.createElement('div')
  welcomeTextContainer.classList.add('welcome-text-container')

  const welcomeText = document.createElement('p')
  welcomeText.classList.add('welcome-text')
  welcomeText.innerHTML = `Mimosa Moor is a place to forget everything you thought you knew about food.
                    Prepare yourselves for an adventure that will have you questioning
                    whether you've been eating at all before.`
  welcomeTextContainer.appendChild(welcomeText)

  welcomeContainer.appendChild(welcomeImg)
  welcomeContainer.appendChild(welcomeTextContainer)

  return welcomeContainer
}
