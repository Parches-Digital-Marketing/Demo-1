import { useEffect, useState } from "react"

export const useCarousel = (setActiveImage, images, selectedImage) => {
    const [carouselIndex, setCarouselIndex] = useState(selectedImage)
    const [position, setPosition] = useState(null)

    useEffect(() => {
        typeof position === "number" && moveGalleryRow()
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
        const imageTotalWidth = galleryList.childNodes[0].offsetWidth + 20
        const totalImages = images.length
        const totalGalleryWidthRequired = imageTotalWidth * totalImages
        if(-screen.width + position < -(totalGalleryWidthRequired + 40)) {
            galleryList.style.transform = `translate(0px)`
            setPosition(null)
        }
        else if(position >= 2) {
            const rightEndPosition = totalGalleryWidthRequired - screen.width
            galleryList.style.transform = `translate(-${rightEndPosition + 40}px)`
            setPosition(-(rightEndPosition + 40))
        }
        else galleryList.style.transform = `translate(${position}px)`
    }

    const getAndMoveCorrectPosition = (right) => {
        const imageWidthReference = document.getElementById('galleryList').childNodes[0].offsetWidth
        if(right) setPosition(position => position + -(40 + imageWidthReference))
        else setPosition(position => position + 40 + imageWidthReference)
    }

    return {selectCarouselImage, moveCarouselImage, getAndMoveCorrectPosition}
}
