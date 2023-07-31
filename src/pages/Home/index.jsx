import Banner from '../../components/Banner';
import AccomodationsList from '../../components/AccomodationsList';
import { useState } from 'react';
import accomodations from '../../data/accomodations.json'
import homeBannerImage from '../../assets/Images/home-banner.svg';

function Home() {
  const [ accomodationsData, setAccomodations ] = useState(accomodations)
  return (
    <div>
      <Banner
        title="Chez vous et partout ailleurs"
        backgroundImage={homeBannerImage}
      />
      <AccomodationsList accomodations={accomodationsData}/>
    </div>
  )
}

export default Home;
