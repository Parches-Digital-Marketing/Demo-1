import { useEffect, useState } from "react"

export const useGallery = () => {
    const [carousel, setCarousel] = useState(false)

    const imageSlider = () => {
        const dark = document.getElementsByClassName('dark')[0]
        dark.className = "dark active"
        setCarousel(true)
        document.getElementsByClassName('gallery-container')[0].scrollIntoView()
    }

    window.onclick = (event) => {
        if(carousel && event.target.className !== 'thumbs' && event.target.className !== 'list__image' && event.target.className !== 'carousel-slider' && event.target.className !== 'thumb' && event.target.className !== 'thumb selected' && event.target.className !== 'control-arrow control-next' && event.target.className !== 'control-arrow control-prev' && event.target.className !== 'control-arrow control-prev control-disabled' && event.target.className !== 'dot selected' && event.target.className !== 'control-dots' && event.target.className !== 'image-container') {
            setCarousel(false)
            const dark = document.getElementsByClassName('dark')[0]
            dark.className = "dark"
        }
    }

    useEffect(() => {
        if(carousel) {
            const imageContainersObject = document.getElementsByClassName('image-container')
            let imageContainersArray = Object.keys(imageContainersObject).map((key) => [Number(key), imageContainersObject[key]]);
            imageContainersArray.forEach(imageContainer => {
                imageContainer[1].innerHTML += '<button id="close-button"><i className="fas fa-times"></i></button>'
            });
        }
    }, [carousel])

    return {carousel, imageSlider}
}
