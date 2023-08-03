import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import './Rating.scss'


function Rating({rating}) {
  const maxRating = 5
  const stars = []
  const renderStars = () => {
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={filledStar} className="filled-icon" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={emptyStar} className="empty-icon" />);
      }
    }
    return stars;
  }
  return (
    <div className="rating-wrapper">
      { renderStars() }
    </div>
  )
}

export default Rating
