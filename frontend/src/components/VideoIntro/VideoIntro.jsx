import { useRef, useState, useEffect, useCallback } from 'react'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import introVideo from '../../assets/introvideo.mp4'
import './VideoIntro.css'

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function VideoIntro() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const reduceMotion = prefersReducedMotion()

  const togglePlayback = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      video.pause()
    } else {
      video.play().catch(() => {})
    }
  }, [isPlaying])

  const toggleMute = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleVolumeChange = () => setIsMuted(video.muted)
    const handleEnded = () => setIsPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('volumechange', handleVolumeChange)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('volumechange', handleVolumeChange)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const handleVideoClick = () => {
    togglePlayback()
  }

  const handleVideoKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      togglePlayback()
    }
  }

  return (
    <figure className="video-intro">
      <div className="video-intro__frame">
        <video
          ref={videoRef}
          className="video-intro__media"
          src={introVideo}
          playsInline
          preload="metadata"
          aria-label="Madhu Thakur — short introduction about how I build and what I work with"
          onClick={handleVideoClick}
          tabIndex={0}
          onKeyDown={handleVideoKeyDown}
        >
          Sorry, your browser does not support embedded videos.
        </video>

        <button
          type="button"
          className={`video-intro__play-btn${
            isPlaying ? ' video-intro__play-btn--hidden' : ''
          }`}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          onClick={(e) => {
            e.stopPropagation()
            togglePlayback()
          }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button
          type="button"
          className="video-intro__mute-btn"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          onClick={(e) => {
            e.stopPropagation()
            toggleMute()
          }}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
    </figure>
  )
}

export default VideoIntro