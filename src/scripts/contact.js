
import mapImg from '../images/map.png'
import '../styles/contact.css'

export default function loadContactPage() {
  const contactContainer = document.createElement('div')
  contactContainer.className = 'contact-container'

  const mapImgEl = document.createElement('img')
  mapImgEl.className = 'contact-img'
  mapImgEl.src = mapImg

  const contactTxtContainer = document.createElement('div')
  contactTxtContainer.className = 'contact-text-container'

  const contactData = {
    location: { name: 'Location', description: '10963 Peaktimestr. 69 Berlin'},
    contact: { name: 'Contact', description: 'mimosamoor@kreuzberg.de'},
    hours: { name: 'Hours', description: `No reservations. <br> Tue - Sun:    09:00 – 15:00`}
  }

  Object.values(contactData).forEach(value => {
    const sectionEl = document.createElement('div')
    sectionEl.className = 'contact-section'
    const sectionTitle = document.createElement('h2')
    sectionTitle.innerHTML = value['name']
    const sectionDesc = document.createElement('p')
    sectionDesc.innerHTML = value['description']

    sectionEl.append(sectionTitle, sectionDesc)
    contactTxtContainer.appendChild(sectionEl)
  })


  contactContainer.append(contactTxtContainer, mapImgEl)

  return contactContainer
}
