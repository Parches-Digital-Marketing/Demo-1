import { Link } from 'react-scroll'

function Home() {
    return (
        <div className="home">
            <div className="home__filter"></div>
            <div className="scroll" name="home"></div>
            <div className="welcome">
                <h2 className="home__text">Gimnasio Tachancka - Tu lugar de entrenamiento favorito</h2>
                <Link activeClass="active" className="home__link" to="plans" spy={true} smooth={true} duration={500}><button className="home__button">Conocer precios</button></Link>
            </div>
        </div>
    )
}

export default Home