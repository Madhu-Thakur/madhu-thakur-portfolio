// VideoIntro — signature personal element.
//
// No real talking-avatar video exists yet, so this renders an intentional
// placeholder that will NOT be mistaken for real content. When a real,
// compressed MP4/WebM is available, drop the file into
// `frontend/public/video/` and set VIDEO_SRC + VIDEO_POSTER below — the
// component will swap to a native <video> without redesign.
const VIDEO_SRC = null // e.g. '/video/intro.mp4'
const VIDEO_POSTER = null // e.g. '/video/intro-poster.jpg'

function VideoIntro() {
  const hasVideo = Boolean(VIDEO_SRC)

  return (
    <figure className="video-intro">
      <figcaption className="video-intro__label">01 — Introduction</figcaption>

      <div className="video-intro__frame">
        {hasVideo ? (
          <video
            className="video-intro__media"
            controls
            preload="metadata"
            poster={VIDEO_POSTER}
            aria-label="Madhu Thakur — short introduction about how I build and what I work with"
          >
            {/* Add <track kind="captions"> here when a captions file exists. */}
            Sorry, your browser does not support embedded videos.
          </video>
        ) : (
          <div className="video-intro__placeholder" role="img">
            <span className="video-intro__placeholder-icon" aria-hidden="true">
              ▶
            </span>
            <p className="video-intro__placeholder-title">
              Talking introduction coming soon
            </p>
            <p className="video-intro__placeholder-text">
              A short introduction about how I build and what I work with.
            </p>
          </div>
        )}
      </div>

      <div className="video-intro__meta">
        <span>~ 20–40 seconds</span>
        <span aria-hidden="true">·</span>
        <span>Who I am · What I build · My mindset</span>
      </div>
    </figure>
  )
}

export default VideoIntro