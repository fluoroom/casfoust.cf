import React from 'react'

function IcecastPlayer ({ title, status, src }) {
  const handleOnPlay = () => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title,
        artist: 'casfoust'
      })
    }
  }

  return status !== 2 ? null
    : (
      <div className="player">
        <audio
          controls
          autoPlay
          content-type="audio/aac"
          x-webkit-airplay // not sure if this works, if not, try xWebkitAirplay instead
          type="audio/aac"
          title={title}
          src={src}
          onPlay={handleOnPlay}
        >
          <track>casfoust</track>
        </audio>
      </div>
    )
}

export default IcecastPlayer
