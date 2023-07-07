import { Link } from 'react-router-dom'

function AccomodationsList({ accomodations }) {
  return (
    <div className="card-container">
      { accomodations.map((accomodation, index) => (
        <Link to={`accomodation/${accomodation.id}`}>
          <div
            key={index}
            style={{ backgroundImage: `url(${accomodation.cover})`}}
            class="card"
          >
          <p class="card-text">{accomodation.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AccomodationsList
