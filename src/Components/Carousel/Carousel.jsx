import React, { useState, useRef, useEffect, useCallback } from 'react'
import style from './Carousel.module.css'
import classNames from 'classnames'
import { arrow } from '../../Assets/Images/Results'
import { useWindowSize } from '../Hooks'

const Carousel = ({ data }) => {
  const { width } = useWindowSize()

  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const slidesRef = useRef(null)
  const totalSlides = data.length

  const [touchStartX, setTouchStartX] = useState(0)

  const getTransformSize = useCallback(() => {
    if (width >= 1501) return 2.45
    if (width >= 1181) return 2.28
    if (width >= 721) return 1.225
    if (width >= 300) return 1.1
    return 1
  }, [width])

  const getCountSlides = useCallback(() => (width >= 1181 ? 2 : 1), [width])

  const transformSize = getTransformSize()
  const countSlides = getCountSlides()

  const handleNextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => prev + countSlides)
  }, [isAnimating, countSlides])

  const handlePrevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => prev - countSlides)
  }, [isAnimating, countSlides])

  const handleGoToSlide = useCallback(
    (index) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrentSlide(index * countSlides)
    },
    [isAnimating, countSlides],
  )

  const handleTransitionEnd = useCallback(() => {
    if (currentSlide >= totalSlides) {
      setTransitionEnabled(false)
      setCurrentSlide((prev) => prev - totalSlides)
      setTimeout(() => {
        setTransitionEnabled(true)
        setIsAnimating(false)
      }, 50)
    } else if (currentSlide < 0) {
      setTransitionEnabled(false)
      setCurrentSlide((prev) => prev + totalSlides)
      setTimeout(() => {
        setTransitionEnabled(true)
        setIsAnimating(false)
      }, 50)
    } else {
      setIsAnimating(false)
    }
  }, [currentSlide, totalSlides])

  useEffect(() => {
    const slidesElement = slidesRef.current
    slidesElement.addEventListener('transitionend', handleTransitionEnd)
    return () => {
      slidesElement.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [handleTransitionEnd])

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX)

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX
    if (touchStartX - touchEndX > 50) handleNextSlide()
    if (touchStartX - touchEndX < -50) handlePrevSlide()
  }

  return (
    <div className={style.wrap}>
      <div className={style.carousel}>
        <div
          ref={slidesRef}
          className={style.carousel_slides}
          style={{
            transform: `translateX(-${currentSlide * (100 / transformSize)}%)`,
            transition: transitionEnabled
              ? 'transform 0.5s ease-in-out'
              : 'none',
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {[...data, ...data.slice(0, 3)].map((item, index) => (
            <div key={index} className={style.carousel_slides__slide}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className={style.carousel_arrow} onClick={handleNextSlide}>
          <img
            src={arrow}
            alt="Next slide"
            className={style.carousel_arrow__img}
          />
        </div>
      </div>
      <div className={style.indicators}>
        {Array.from({ length: Math.ceil(totalSlides / countSlides) }).map(
          (_, index) => (
            <button
              key={index}
              className={classNames(
                style.indicators__indicator,
                Math.floor(currentSlide / countSlides) === index
                  ? style.indicators__indicator_active
                  : '',
              )}
              onClick={() => handleGoToSlide(index)}
            />
          ),
        )}
      </div>
    </div>
  )
}

export { Carousel }
