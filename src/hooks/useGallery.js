import { useState } from "react"

export const useGallery = () => {
    const [carousel, setCarousel] = useState(false)

    const imageSlider = (id) => {
        const dark = document.getElementsByClassName('dark')[0]
        dark.className = "dark active"
        setCarousel({active: true, id: id})
        document.getElementsByClassName('gallery-container')[0].scrollIntoView()
    }

    window.onclick = (event) => {
        if(carousel && event.target.className !== 'carousel__item' && event.target.className !== 'button' && event.target.className !== 'buttons' && event.target.className !== 'list__thumbnail' && event.target.className !== 'list__image' && event.target.className !== 'fas fa-angle-right' && event.target.className !== 'fas fa-angle-left') {
            setCarousel(false)
            const dark = document.getElementsByClassName('dark')[0]
            dark.className = "dark"
        }
    }

    return {carousel, imageSlider}
}
