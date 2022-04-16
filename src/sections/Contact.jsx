import instagramLogo from '../images/instagramLogo.png'
import facebookLogo from '../images/facebookLogo.png'
import whatsAppLogo from '../images/whatsAppLogo.png'

export default function Contact() {
    return (
        <div className="contact-container">
            <section className="section">
                <div className="scroll" name="contact"></div>
                <h2 className="contact__title">Comunícate con <span className="about-us__title-color">Nosotros</span></h2>
                <div className="contact-info-container">
                    <div className="contact-info">
                        <div className="social-media">
                            <h4 className="subtitle">Redes sociales</h4>
                            <ul className="list">
                                <a href="https://www.facebook.com/gimnasio.tachancka" target="_blank" className="list__link">
                                    <li className="list__item">
                                        <img className="list__image" src={facebookLogo} alt="socialMedia" />
                                        <span className="list__name">/gimnasio.tachancka</span>
                                    </li>
                                </a>
                                <a href="https://www.instagram.com/gimnasiotachancka/?hl=es-la" target="_blank" className="list__link">
                                    <li className="list__item">
                                        <img className="list__image" src={instagramLogo} alt="socialMedia" />
                                        <span className="list__name">@gimasiotachancka</span>
                                    </li>
                                </a>
                                <a href="" className="list__link">
                                    <li className="list__item">
                                        <img className="list__image" src={whatsAppLogo} alt="socialMedia" />
                                        <span className="list__name">+54 9 11 4444-4444</span>
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
                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d74303.34099960186!2d-58.411079662771094!3d-34.609856513161304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1650119255199!5m2!1ses-419!2sar" width="363" height="200" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
