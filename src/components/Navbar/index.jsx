import { Link } from 'react-router-dom'
import logo from '../../assets/Images/logo.svg'
import './Navbar.scss'

function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <img src={ logo } alt="Logo Kasa" className="logo" />
      <ul className="navbar-list">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
