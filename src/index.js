import './style.css'

const component = () => {

  const pageTitle = document.createElement('h1')
  pageTitle.innerHTML = 'Peak Time'

  console.log(pageTitle)
  return pageTitle
}


document.body.appendChild(component())
