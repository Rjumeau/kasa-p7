import Banner from '../../components/Banner';
import Collapsible from '../../components/Collapsible';
import aboutBannerImage from '../../assets/Images/about-banner.svg';

function About() {
  return (
    <>
      <Banner
        backgroundImage={aboutBannerImage}
      />
      <div>
        <Collapsible
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
         />
      </div>
    </>
  );
}

export default About
