import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom';

import Carousel from '../../components/Carousel';
import AccomodationDetails from '../../components/AccomodationDetails';
import Collapsible from '../../components/Collapsible';

import accommodationService from '../../services/AccomodationService';

import './Accomodation.scss'


function Accomodation() {
  const { accomodationId } = useParams()
  const navigate = useNavigate();
  const selectedAccomodation = accommodationService.getOneAccommodation(accomodationId)

  useEffect(() => {
    if (!selectedAccomodation) {
      navigate('/*')
    }
  }, [selectedAccomodation, navigate])

  if (!selectedAccomodation) {
    return null
  } else {
    return (
      <>
        <Carousel
          pictures={selectedAccomodation.pictures}
        />
        <AccomodationDetails
          accomodation={selectedAccomodation}
        />
        <section className='collapsible-details' >
          <Collapsible
            title="Description"
            text={selectedAccomodation.description}
          />
          <Collapsible
            title="Equipements"
            equipments={selectedAccomodation.equipments}
          />
        </section>
      </>
    )
  }
}

export default Accomodation
