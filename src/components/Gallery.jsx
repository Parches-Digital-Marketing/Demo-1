import { useGallery } from "../hooks/useGallery";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';

function Gallery() {
    const images = [{url: image1}, {url: image2}, {url: image3}, {url: image4}, {url: image5}, {url: image6}, {url: image7}, {url: image8}, {url: image9}]
    const {carousel, imageSlider} = useGallery()

    return (
        <div className="gallery-container">

            {/* <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3}>
                <Slider>
                    <Slide index={0}><Image src={image1}/></Slide>
                    <Slide index={1}><Image src={image2}/></Slide>
                    <Slide index={2}><Image src={image3}/></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider> */}

            {
                carousel && 
                    <Carousel emulateTouch useKeyboardArrows styles={styles}>
                        {images.map((image, id) => {
                            return (
                                <div className="image-container" key={id}>
                                    <img className="image" alt="image" src={image.url} />
                                </div>
                            )
                        })}
                    </Carousel>
            }
            <div className="section">
                <div className="scroll" name="gallery"></div>
                <div className="gallery">
                    <h2 className="gallery__title">Nuestra <span className="gallery__title-color">Galería</span></h2>
                    <ul className="list">
                        {images.map((image, id) => {
                            return (
                                <li className="list__item" key={id}>
                                    <img className="list__image" src={image.url} alt="galleryImage" onClick={() => imageSlider()}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Gallery