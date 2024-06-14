import '../styles/menu.css'
import foodMenu from '../data/food-menu.json'

export default function loadMenuPage() {
  const menuContainer = document.createElement('div')
  menuContainer.classList.add('menu-container')

  const menuSections = ['Food', 'Booze', 'Coffee']
  const menuSectionsEls = []

  menuSections.forEach((item) =>{
    const sectionId = item.toLowerCase()
    const sectionEl = document.createElement('div')
    sectionEl.classList.add('menu-section')
    sectionEl.id = `${sectionId}-container`
    const sectionTitle = document.createElement('h2')
    sectionTitle.innerHTML = `${item}`
    sectionEl.appendChild(sectionTitle)
    menuContainer.appendChild(sectionEl)
    menuSectionsEls.push(sectionEl)
  })

  // Add articles to the food container
  foodMenu.forEach((item) => {
    const articleEl = document.createElement('div')

    const articleTitle = document.createElement('p')
    articleTitle.classList.add('article-title')
    articleTitle.innerHTML = `${item.name}`

    const articleDescription = document.createElement('p')
    articleDescription.classList.add('article-description')
    articleDescription.innerHTML = `${item.description}`

    articleEl.append(articleTitle, articleDescription)
    const foodContainer = menuSectionsEls.find(item => item.id === 'food-container')
    foodContainer.appendChild(articleEl)
  })

  return menuContainer
}
