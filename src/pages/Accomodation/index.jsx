import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

import Carousel from '../../components/Carousel';
import AccomodationDetails from '../../components/AccomodationDetails';
import Collapsible from '../../components/Collapsible';

import accomodations from '../../data/accomodations.json'

import './Accomodation.scss'


function Accomodation() {
  const { accomodationId } = useParams()
  const navigate = useNavigate();

  const selectedAccomodation = accomodations.find(accomodation => accomodation.id === accomodationId)

  useEffect(() => {
    if (!selectedAccomodation) {
      navigate('/*/');
    }
  });

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

export default Accomodation
