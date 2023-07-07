import Banner from '../../components/Banner';
import AccomodationsList from '../../components/AccomodationsList';
import { useState } from 'react';
import accomodations from '../../data/accomodations.json'

function Home() {
  const [ accomodationsData, setAccomodations ] = useState(accomodations)
  return (
    <div>
      <Banner/>
      <AccomodationsList accomodations={accomodationsData}/>
    </div>
  )
}

export default Home;
