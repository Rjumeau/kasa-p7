import Banner from '../../components/Banner';
import AccomodationsList from '../../components/AccomodationsList';

import homeBannerImage from '../../assets/Images/home-banner.svg';
import accomodations from '../../data/accomodations.json'

function Home() {
  return (
    <div>
      <Banner
        title="Chez vous, partout et ailleurs"
        backgroundImage={homeBannerImage}
        needSplitTitle='true'
      />
      <AccomodationsList accomodations={accomodations}/>
    </div>
  )
}

export default Home;
