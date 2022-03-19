import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import Carousel from "../components/Carousel";

export default function AboutUs() {
    const images = [{url: image1}, {url: image2}, {url: image3}, {url: image4}, {url: image5}, {url: image6}, {url: image7}, {url: image8}, {url: image9}]

    return (
        <div className="about-us-container">
            <section className="section">
                <div className="scroll" name="about-us"></div>
                <div className="wrapper">
                    <div className="about-us">
                        <h2 className="about-us__title">Quienes <span className="about-us__title-color">Somos</span></h2>
                        <div className="about-us-info">
                            <span className="about-us__text--color">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            <p className="about-us__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, aliquam porro illo fugiat facilis quidem doloremque! Corporis sapiente officia tempore, ad quae magnam enim earum quibusdam tenetur, nesciunt numquam! Saepe.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, facilis! Exercitationem voluptatibus eligendi deleniti eius. Eveniet debitis nobis iusto consequuntur praesentium sit modi ratione assumenda? Perferendis officiis rem aperiam corrupti.
                            </p>
                        </div>
                    </div>
                    <Carousel images={images} selectedImage={0}/>
                </div>
            </section>
        </div>
    )
}
