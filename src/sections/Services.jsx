import crossfit from '../images/crossfit.jpg';
import muscle from '../images/muscle.jpg';
import boxing from '../images/boxing.jpg';
import yoga from '../images/yoga.jpg';

export default function Services() {
    const services = [
        {image: muscle, title: "Musculación", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nisi dolorum reiciendis velit. Dicta error dolor iste atque dolorem delectus, non facere reprehenderit incidunt veniam temporibus ex similique pariatur explicabo!"},
        {image: crossfit, title: "CrossFit", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nisi dolorum reiciendis velit. Dicta error dolor iste atque dolorem delectus, non facere reprehenderit incidunt veniam temporibus ex similique pariatur explicabo!"},
        {image: boxing, title: "Boxeo", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nisi dolorum reiciendis velit. Dicta error dolor iste atque dolorem delectus, non facere reprehenderit incidunt veniam temporibus ex similique pariatur explicabo!"},
        {image: yoga, title: "Yoga", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nisi dolorum reiciendis velit. Dicta error dolor iste atque dolorem delectus, non facere reprehenderit incidunt veniam temporibus ex similique pariatur explicabo!"}
    ]

    return (
        <div className="services-container">
            <section className="section">
                <div className="scroll" name="services"></div>
                <div className="services">
                    <h2 className="services__title">Conoce más sobre nuestros <span className="services__title--color">servicios</span></h2>
                    <ul className="list">
                        {services.map((service, id) => {
                            return (
                                <li className="list__item" key={id}>
                                    <img className="list__image" src={service.image} alt="title" />
                                    <h5 className="list__title">{service.title}</h5>
                                    <p className="list__description">{service.description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </div>
    )
}