import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './Carousel.scss'


function Carousel({pictures}) {
  const [activePicture, setActivePicture] = useState(0);

  const handleNext = () => {
    setActivePicture((prevPicture) => (prevPicture + 1) % pictures.length)
  };

  const handlePrev = () => {
    setActivePicture((prevPicture) => (prevPicture - 1 + pictures.length) % pictures.length)
  };

  const shouldDisplayControls = pictures.length > 1

  // Set transform value in percentage
  const currentTransform = -activePicture * 100

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-items"
        style={{ transform: `translateX(${currentTransform}%)` }}
      >
        { pictures.map((pictureUrl, index) => (
          <div key={index}
               className="carousel-item"
               style={{ backgroundImage: `url(${pictureUrl})` }}
          >
          </div>
        ))}
      </div>

      { shouldDisplayControls && (
      <>
        <FontAwesomeIcon icon={faChevronLeft} className="carousel-control prev" onClick={handlePrev} />
        <FontAwesomeIcon icon={faChevronRight} className="carousel-control next" onClick={handleNext} />
        <div className="carousel-count-wrapper">
          <span className='carousel-count'><strong>{activePicture + 1}/{pictures.length}</strong></span>
      </div>
      </>
      )}
    </div>
  );
}

export default Carousel
