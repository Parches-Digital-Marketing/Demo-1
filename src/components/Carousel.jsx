import { useState } from "react"
import { useCarousel } from "../hooks/useCarousel"

export default function Carousel({images, selectedImage}) {
    const [activeImage, setActiveImage] = useState(selectedImage)
    const {selectCarouselImage, moveCarouselImage, getAndMoveCorrectPosition} = useCarousel(setActiveImage, images, selectedImage)

    return (
        <div className="carousel-container">
            <section className="carousel-section">
                <div className="carousel">
                    {
                        images.map((image, id) => {
                            return (
                                <div className={activeImage === id ? "carousel__item active" : "carousel__item"} key={id} >
                                    <img className="carousel__img" src={image.url} alt="carouselImage" />
                                </div>
                            )
                        })
                    }
                    <div className="buttons">
                        <button className="button" onClick={() => moveCarouselImage(-1)}><i className="fas fa-angle-left"></i></button>
                        <button className="button" onClick={() => moveCarouselImage(1)}><i className="fas fa-angle-right"></i></button>
                        <button className="close-button" id="close-button"><i className="fas fa-times"></i></button>
                    </div>
                </div>
                <div className="gallery-row">
                    <ul className="list" id="galleryList">
                        {
                            images.map((image, id) => {
                                return (
                                    <div className={activeImage === id ? "list__item active" : "list__item"} key={id}>
                                        <img className="list__thumbnail" src={image.url} onClick={() => selectCarouselImage(id)} alt="galleryImage" />    
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <div className="gallery-buttons">
                        <button className="button" onClick={() => getAndMoveCorrectPosition()}><i className="fas fa-angle-left"></i></button>
                        <button className="button" onClick={() => getAndMoveCorrectPosition("right")}><i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </section>
        </div>
    )
}
