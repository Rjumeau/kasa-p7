import './Banner.scss'

function Banner({ title, backgroundImage, needSplitTitle = false }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`
  };

  const splitTitle = needSplitTitle && title.split(',');

  return (
    <div className='banner' style={backgroundStyle}>
      {title && (
        <h1 className="banner-title">
          {needSplitTitle ? (
            <>
              <span>{splitTitle[0] += ','}</span><span className='split-title'>{splitTitle[1]}</span>
            </>
          ) : (
            title
          )}
        </h1>
      )}
    </div>
  );
}

export default Banner;
