import { useState } from "react"
import { Link } from 'react-scroll'
import logo from '../images/logo.png'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const [burgerMenu, setBurgerMenu] = useState(false)

    const fixNavbar = () => {
        if(window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', fixNavbar)
    
    return (
        <div className={navbar ? "navbar-container active" : "navbar-container"}>
            <div className="content">
                <div className="logo-container">
                    <img className="navbar__logo" src={logo} alt="logo" />
                </div>
                <nav className="navbar">
                    <ul className={burgerMenu ? "list active" : "list"}>
                        <Link activeClass="active" className="list__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}>
                            <li className="list__item">Inicio</li>
                        </Link>
                        <Link activeClass="active" className="list__link" to="about-us" spy={true} smooth={true} duration={500} offset={-200}>
                            <li className="list__item">Nosotros</li>
                        </Link>
                        <Link activeClass="active" className="list__link" to="services" spy={true} smooth={true} duration={500} offset={-200}>
                            <li className="list__item">Servicios</li>
                        </Link>
                        <Link activeClass="active" className="list__link" to="calendar" spy={true} smooth={true} duration={500} offset={-200}>
                            <li className="list__item">Calendario</li>
                        </Link>
                        <Link activeClass="active" className="list__link" to="plans" spy={true} smooth={true} duration={500} offset={-30}>
                            <li className="list__item">Planes</li>
                        </Link>
                        <Link activeClass="active" className="list__link" to="contact" spy={true} smooth={true} duration={500} offset={100}>
                            <li className="list__item">Contacto</li>
                        </Link>
                    </ul>
                    <button className="navbar__button" onClick={() => {burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true)}}><i className="fas fa-bars"></i></button>
                </nav>
            </div>
        </div>
    )
}
