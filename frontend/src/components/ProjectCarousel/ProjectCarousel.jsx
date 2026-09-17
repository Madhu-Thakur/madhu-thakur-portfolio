import { useCallback, useEffect, useRef, useState } from 'react'
import './ProjectCarousel.css'

const AUTOPLAY_INTERVAL = 4000
const SWIPE_THRESHOLD = 48

function formatNumber(value) {
  return String(value).padStart(2, '0')
}

function ProjectCarousel({ images = [], title = '' }) {
  const [current, setCurrent] = useState(0)
  const [previewOpen, setPreviewOpen] = useState(false)
  const touchStartX = useRef(null)
  const intervalRef = useRef(null)

  const hasImages = images.length > 0
  const hasMultipleImages = images.length > 1
  const currentImage = hasImages ? images[current] : null

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (!hasMultipleImages) return
    intervalRef.current = setInterval(() => {
      setCurrent((prev) =>
        ((prev + 1) % images.length + images.length) % images.length
      )
    }, AUTOPLAY_INTERVAL)
  }, [hasMultipleImages, images.length])

  const resetAutoplay = useCallback(() => {
    startAutoplay()
  }, [startAutoplay])

  const goTo = useCallback(
    (index) => {
      if (!hasImages) return
      const wrapped =
        ((index % images.length) + images.length) % images.length
      setCurrent(wrapped)
      resetAutoplay()
    },
    [hasImages, images.length, resetAutoplay]
  )

  const prev = useCallback(() => {
    goTo(current - 1)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo(current + 1)
  }, [current, goTo])

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [startAutoplay])

  const openPreview = () => {
    if (currentImage) {
      setPreviewOpen(true)
    }
  }

  const closePreview = () => {
    setPreviewOpen(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      prev()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      next()
    }

    if (event.key === 'Escape' && previewOpen) {
      closePreview()
    }
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const deltaX =
      event.changedTouches[0].clientX - touchStartX.current

    touchStartX.current = null

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return

    if (deltaX < 0) {
      next()
    } else {
      prev()
    }
  }

  return (
    <div className="project-carousel" onKeyDown={handleKeyDown}>
      <div
        className="project-carousel__frame"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
        tabIndex={hasMultipleImages ? 0 : -1}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {hasImages ? (
          <img
            key={current}
            className="project-carousel__image"
            src={currentImage}
            alt={`${title} screenshot ${current + 1}`}
          />
        ) : (
          <div
            className="project-carousel__placeholder"
            role="img"
            aria-label={`${title} screenshot placeholder`}
          >
            <span className="project-carousel__placeholder-label">
              Screenshot {formatNumber(current + 1)}
            </span>

            <span className="project-carousel__placeholder-line">
              Images coming soon
            </span>
          </div>
        )}

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="project-carousel__arrow project-carousel__arrow--prev"
              aria-label="Previous screenshot"
              onClick={prev}
            >
              <svg
                className="project-carousel__arrow-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M15 5l-7 7 7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="project-carousel__arrow project-carousel__arrow--next"
              aria-label="Next screenshot"
              onClick={next}
            >
              <svg
                className="project-carousel__arrow-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M9 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className="project-carousel__dots"
              aria-label="Screenshot navigation"
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`project-carousel__dot${
                    index === current
                      ? ' project-carousel__dot--active'
                      : ''
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                  aria-current={
                    index === current ? 'true' : undefined
                  }
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {hasImages && (
        <div className="project-carousel__status">
          <p
            className="project-carousel__counter"
            aria-live="polite"
          >
            <span>{formatNumber(current + 1)}</span>
            <span className="project-carousel__counter-sep">/</span>
            <span>{formatNumber(images.length)}</span>
          </p>

          {currentImage && (
            <button
              type="button"
              className="project-carousel__enlarge"
              onClick={openPreview}
            >
              View larger
            </button>
          )}
        </div>
      )}

      {previewOpen && currentImage && (
        <div
          className="project-carousel__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot ${
            current + 1
          } enlarged`}
        >
          <button
            type="button"
            className="project-carousel__lightbox-close"
            aria-label="Close preview"
            autoFocus
            onClick={closePreview}
          >
            ×
          </button>

          <img
            className="project-carousel__lightbox-image"
            src={currentImage}
            alt={`${title} screenshot ${current + 1}`}
            onClick={closePreview}
          />
        </div>
      )}
    </div>
  )
}

export default ProjectCarousel