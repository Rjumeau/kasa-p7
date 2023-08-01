import './Banner.scss'

function Banner({title, backgroundImage}) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`
  }
  return (
    <div className="banner" style={backgroundStyle}>
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  )
}

export default Banner
