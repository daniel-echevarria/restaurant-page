import '../styles/menu.css'

export default function loadMenuPage() {
  const menuContainer = document.createElement('div')
  menuContainer.classList.add('menu-container')

  const foodContainer = document.createElement('div')
  foodContainer.classList.add('menu-section', 'food-container')
    const foodTitle = document.createElement('h2')
    foodTitle.innerHTML = 'Food'
    foodContainer.appendChild(foodTitle)

  const boozeContainer = document.createElement('div')
  boozeContainer.classList.add('menu-section', 'booze-container')
    const boozeTitle = document.createElement('h2')
    boozeTitle.innerHTML = 'Booze'
    boozeContainer.append(boozeTitle)

  const coffeeContainer = document.createElement('div')
  coffeeContainer.classList.add('menu-section', 'coffee-container')
    const coffeeTitle = document.createElement('h2')
    coffeeTitle.innerHTML = 'Coffee & Other Drinks'
    coffeeContainer.append(coffeeTitle)

  menuContainer.append(foodContainer, boozeContainer, coffeeContainer)

  return menuContainer
}
