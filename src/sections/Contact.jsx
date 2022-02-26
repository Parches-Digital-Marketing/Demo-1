import instagramLogo from '../images/instagramLogo.png'
import facebookLogo from '../images/facebookLogo.png'
import whatsAppLogo from '../images/whatsAppLogo.png'

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="section">
                <div className="scroll" name="contact"></div>
                <h2 className="contact__title">Comunícate con <span className="about-us__title-color">Nosotros</span></h2>
                <div className="contact-info-container">
                    <div className="contact-info">
                        <div className="social-media">
                            <h4 className="subtitle">Redes sociales</h4>
                            <ul className="list">
                                <a href="https://www.facebook.com/gimnasio.larosa" target="_blank" className="list__link">
                                    <li className="list__item">
                                        <img className="list__image" src={facebookLogo} alt="socialMedia" />
                                        <span className="list__name">/gimnasio.larosa</span>
                                    </li>
                                </a>
                                <a href="https://www.instagram.com/gimnasiolarosa/?hl=es-la" target="_blank" className="list__link">
                                    <li className="list__item">
                                        <img className="list__image" src={instagramLogo} alt="socialMedia" />
                                        <span className="list__name">@gimasiolarosa</span>
                                    </li>
                                </a>
                                <a href="" className="list__link">
                                    <li className="list__item">
                                        <img className="list__image" src={whatsAppLogo} alt="socialMedia" />
                                        <span className="list__name">+54 9 11 5455-8053</span>
                                    </li>
                                </a>
                            </ul>
                        </div>
                        <div className="opening-hours">
                            <h4 className="subtitle">Horarios</h4>
                            <span className="hours">Lunes a sabados de 07:00am - 8:00pm</span>
                        </div>
                        <div className="contact">
                            <h4 className="subtitle">Contacto</h4>
                            <span className="contact__email">loremipsum@gmail.com</span>
                            <span className="contact__phone">+54 11 48276-1057</span>
                        </div>
                        <div className="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.181757691409!2d-58.47059139179054!3d-34.54895314337364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb69bc44fda15%3A0x186972d4ebc3387d!2sLa%20Rosa!5e0!3m2!1ses-419!2sar!4v1645389682508!5m2!1ses-419!2sar" className="map" width="363" height="200" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
