import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import accomodations from '../../data/accomodations.json'


function Accomodation() {
  const { accomodationId } = useParams()
  const selectedAccomodation =  accomodations.find(accomodation => accomodation.id === accomodationId)
  return (
    <>
      <Carousel
        pictures={selectedAccomodation.pictures}
      />
    </>
  )
}

export default Accomodation
