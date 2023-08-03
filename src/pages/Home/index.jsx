import Banner from '../../components/Banner';
import AccomodationsList from '../../components/AccomodationsList';

import accomodations from '../../data/accomodations.json'

import homeBannerImage from '../../assets/Images/home-banner.svg';

function Home() {
  return (
    <div>
      <Banner
        title="Chez vous, partout et ailleurs"
        backgroundImage={homeBannerImage}
      />
      <AccomodationsList accomodations={accomodations}/>
    </div>
  )
}

export default Home;
