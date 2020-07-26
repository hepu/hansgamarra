import React from 'react'

const BACKGROUND_URLS = [
  '/images/navijazz.jpg',
  '/images/blc_1.jpg',
  '/images/la_cueva_2.jpeg',
  '/images/la_cueva_5.jpeg'
]

import { BackgroundChangerContainer, Image } from './styles'

const BackgroundChanger = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => {
      rollNextImage()
    }, 6000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const nextArrayIndex = (array, index) => {
    let nextIndex = index + 1

    if (nextIndex >= array.length) {
      nextIndex = 0
    }

    return nextIndex
  }

  const previousArrayIndex = (array, index) => {
    let previousIndex = index - 1

    if (previousIndex <= -1) {
      previousIndex = array.length - 1
    }

    return previousIndex
  }

  const nextBgIndex = index => {
    return nextArrayIndex(BACKGROUND_URLS, index)
  }

  const previousBgIndex = index => {
    return previousArrayIndex(BACKGROUND_URLS, index)
  }

  const rollNextImage = () => {
    setCurrentImageIndex(previousCurrentImageIndex => {
      return nextBgIndex(previousCurrentImageIndex)
    })
  }

  return (
    <BackgroundChangerContainer>
      {BACKGROUND_URLS.map((imageUrl, i) => {
        return (
          <Image
            key={`image-${i.toString()}`}
            active={currentImageIndex === i}
            hide={
              currentImageIndex !== i &&
              previousBgIndex(currentImageIndex) !== i &&
              nextBgIndex(currentImageIndex) !== i
            }
            url={imageUrl}
          />
        )
      })}
    </BackgroundChangerContainer>
  )
}

export default BackgroundChanger
