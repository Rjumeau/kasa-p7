import { Link } from 'react-router-dom'
import './AccomodationsList.scss'

function AccomodationsList({ accomodations }) {
  return (
    <div className="card-container">
      { accomodations.map((accomodation) => (
        <Link key={accomodation.id} to={`accomodations/${accomodation.id}`}>
          <div
            style={{ backgroundImage: `url(${accomodation.cover})`}}
            className="card"
          >
          <p className="card-text">{accomodation.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AccomodationsList
