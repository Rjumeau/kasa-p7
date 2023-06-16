import logo from '../../assets/Images/logo.svg'

function Navbar() {
  return (
    <nav>
      <img src={ logo } alt="Logo Kasa" className="navbar-image" />
      <ul>
        <li>Accueil</li>
        <li>À propos</li>
      </ul>
    </nav>
  )
}

export default Navbar
