
import reservImg from '../images/reservations.jpg'
import '../styles/reservations.css'

export default function loadReservationPage() {
  const reservationsContainer = document.createElement('div')
  reservationsContainer.className = 'reservations-container'

  const reservationsImg = document.createElement('img')
  reservationsImg.className = 'reservations-img'
  reservationsImg.src = reservImg

  const reservationsTxtContainer = document.createElement('div')
  reservationsTxtContainer.className = 'reservations-text-container'

  const reservationsTxt = document.createElement('p')
  reservationsTxt.className = 'reservations-txt'
  reservationsTxt.innerHTML = `We generally do not take reservations.<br><br>
      If we are full we will take your name at the door and seat you as quickly as possible.<br><br>
      For special event requests please contact us via <strong>mimosamoor@kreuzberg.de<strong>`

  reservationsTxtContainer.appendChild(reservationsTxt)

  reservationsContainer.append(reservationsImg, reservationsTxtContainer)

  return reservationsContainer
}
