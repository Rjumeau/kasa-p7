import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import AccomodationDetails from '../../components/AccomodationDetails';
import accomodations from '../../data/accomodations.json'


function Accomodation() {
  const { accomodationId } = useParams()
  const selectedAccomodation =  accomodations.find(accomodation => accomodation.id === accomodationId)
  return (
    <>
      <Carousel
        pictures={selectedAccomodation.pictures}
      />
      <AccomodationDetails
        accomodation={selectedAccomodation}
      />
    </>
  )
}

export default Accomodation
