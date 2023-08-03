import './AccomodationDetails.scss'
import Rating from '../Rating'

function AccomodationDetails({accomodation}) {
  return (
  <section className='details-container'>
    <article>
      <h2> {accomodation.title} </h2>
      <p> { accomodation.location} </p>
      { accomodation.tags.map((tag, index) => (
        <span className='tag' key={index}> {tag} </span>
      ))}
    </article>
    <article className='host-details-wrapper'>
      <div className='host-infos'>
        <p> {accomodation.host.name}</p>
        <img className='host-picture' src={accomodation.host.picture} alt="Host avatar" />
      </div>
      <Rating rating={accomodation.rating}/>
    </article>
  </section>
  )
}

export default AccomodationDetails
