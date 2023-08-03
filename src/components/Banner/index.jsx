import React, { useEffect, useState } from 'react';
import './Banner.scss'

function Banner({title, backgroundImage, isAboutPage}) {
  const [isMobile, setIsMobile] = useState(false)

  const bannerClassName = isAboutPage && isMobile ? 'banner about-mobile' : 'banner'

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768 )
    };

    window.addEventListener('resize', handleResize)
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`
  }

  let titleParts = []
  if (title) {
    titleParts = title.split(',');
    titleParts[0] += ','
  }

  return (
    <div className={bannerClassName} style={backgroundStyle}>
      {title && (
      <h1 className="banner-title">
        {titleParts.map((part, index) => (
          <React.Fragment key={index}>
            {index > 0 && isMobile ? <br /> : null}
            {part}
          </React.Fragment>
        ))}
      </h1>)}
    </div>
  )
}

export default Banner
