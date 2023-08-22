import './Error.scss'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas</p>
        <Link to="/">Retourner à la page d'accueil</Link>
      </div>
    </div>
  )
}

export default Error
