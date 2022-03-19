import { useEffect, useRef, useState } from "react"

export const useCarousel = (setActiveImage, images, selectedImage) => {
    const [carouselIndex, setCarouselIndex] = useState(selectedImage)
    const [position, setPosition] = useState(null)
    const imageGap = 20
    const prevPosition = useRef()
    
    useEffect(() => {
        typeof position === "number" && moveGalleryRow()
        prevPosition.current = position
    }, [position])

    useEffect(() => {
        selectCarouselImage(carouselIndex)
    }, [carouselIndex])

    const selectCarouselImage = (imageId) => {
        const totalImages = images.length - 1
        if(imageId > totalImages) {
            setCarouselIndex(0)
            setActiveImage(imageId)
        }
        else if(imageId < 0)  {
            setCarouselIndex(totalImages)
            setActiveImage(imageId)
        }
        else {
            setCarouselIndex(imageId)
            setActiveImage(imageId)
        }
    }

    const moveCarouselImage = (position) => { setCarouselIndex(carouselIndex => carouselIndex + position) }

    const moveGalleryRow = () => {
        const galleryList = document.getElementById('galleryList')
        const totalGalleryWidthRequired = galleryList.clientWidth
        const galleryRow = document.getElementById('galleryRow')
        const widthUsedToDisplayImages = galleryRow.clientWidth
        const imageWidthReference = galleryList.childNodes[0].offsetWidth + imageGap
        const scrollBarWidth = window.innerWidth - document.body.clientWidth
        const rightEndPosition = totalGalleryWidthRequired - widthUsedToDisplayImages
        const additionalSpace = 100
        if(prevPosition.current < (-rightEndPosition + (imageWidthReference)) && prevPosition.current > -rightEndPosition && position <= -rightEndPosition) { //si estas muy cerca de la derecha y te moves a la derecha, se coloca en la ultima imagen derecha
            galleryList.style.transform = `translate(-${rightEndPosition}px)`
            setPosition(-rightEndPosition)
        }
        else if(-widthUsedToDisplayImages + position < -(totalGalleryWidthRequired + scrollBarWidth + additionalSpace)) { //si estas en la ultima imagen derecha y te moves la derecha, se va hacia la primera imagen izq 
            galleryList.style.transform = `translate(0px)`
            setPosition(null)
        }
        else if(prevPosition.current === null && position >= 0) { //si ya estas en la primera imagen de la izq, y te moves más a la izq, se va hacia ultima imagen derecha
            galleryList.style.transform = `translate(-${rightEndPosition}px)`
            setPosition(-rightEndPosition)
        }
        else if(position >= 2) { //si estas muy cerca de la izquierda y te moves más a la izquierda, se coloca en la primera imagen
            galleryList.style.transform = `translate(0px)`
            setPosition(null)
        }
        else galleryList.style.transform = `translate(${position}px)`
    }

    const moveToPositionAndDirection = (right) => {
        const galleryList = document.getElementById('galleryList')
        const imageWidthReference = galleryList.childNodes[0].offsetWidth + imageGap
        if(right) setPosition(position => position + (-imageWidthReference))
        else setPosition(position => position + imageWidthReference)
    }

    return {selectCarouselImage, moveCarouselImage, moveToPositionAndDirection}
}
