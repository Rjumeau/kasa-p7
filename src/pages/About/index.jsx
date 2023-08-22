import Banner from '../../components/Banner';
import Collapsible from '../../components/Collapsible';

import aboutBannerImage from '../../assets/Images/about-banner.svg';
import aboutData from '../../data/about_data.json'
import './About.scss'

function About() {
  return (
    <>
      <Banner
        isAboutMobile='true'
        backgroundImage={aboutBannerImage}
      />
      <div>
        { aboutData.map((data) => (
          <Collapsible
            title={data.title}
            text={data.text}
          />
         ))}
      </div>
    </>
  );
}

export default About
