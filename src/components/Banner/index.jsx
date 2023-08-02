import './Banner.scss'

function Banner({title, backgroundImage, useGradient = true, height}) {
  const backgroundStyle = {
    backgroundImage:  useGradient
    ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`
    : `url(${backgroundImage})`,
    ...height,
  }
  return (
    <div className="banner" style={backgroundStyle}>
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  )
}

export default Banner
