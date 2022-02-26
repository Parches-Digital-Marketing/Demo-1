export default function Plans() {
    return (
        <div className="plans-container">
            <div className="section">
                <div className="scroll" name="plans"></div>
                <div className="plans">
                    <h2 className="plans__title">Nuestros <span className="about-us__title-color">Planes</span></h2>
                    <ul className="list">
                        <li className="list__item">
                            <span className="list__title">1 día</span>
                            <span className="list__cost">$375</span>
                            <div className="features">
                                <span className="list__text">Lorem ipsum dolor sit amet</span>
                                <span className="list__text">Lorem ipsum dolor sit amet</span>
                                <span className="list__text">Lorem ipsum dolor sit amet</span>
                            </div>
                        </li>
                        <li className="list__item">
                            <span className="list__title">1 mes</span>
                            <span className="list__cost">$3000</span>
                            <div className="features">
                                <span className="list__text">Lorem ipsum dolor sit amet</span>
                                <span className="list__text">Lorem ipsum dolor sit amet</span>
                                <span className="list__text">Lorem ipsum dolor sit amet</span>
                            </div>
                        </li>
                        <li className="list__item">
                            <span className="list__title">12 meses</span>
                            <span className="list__cost">$35.000</span>
                            <div className="features">
                                <span className="list__text">Lorem ipsum dolor sit amet</span>
                                <span className="list__text">Lorem ipsum dolor sit amet</span>
                                <span className="list__text">Lorem ipsum dolor sit amet</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
