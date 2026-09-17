import introVideo from '../../assets/introvideo.mp4'

function VideoIntro() {
  return (
    <figure className="video-intro">
      <div className="video-intro__frame">
        <video
          className="video-intro__media"
          src={introVideo}
          controls
          playsInline
          preload="metadata"
          aria-label="Madhu Thakur — short introduction about how I build and what I work with"
        >
          Sorry, your browser does not support embedded videos.
        </video>
      </div>
    </figure>
  )
}

export default VideoIntro