import { Link } from 'react-router-dom'
import logo from '../../assets/Images/logo.svg'

function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <Link to="/" className="logo-link">
        <img src={ logo } alt="Logo Kasa" className="logo"/>
      </Link>
      <ul className="navbar-list">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
