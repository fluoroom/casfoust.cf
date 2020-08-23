import React from 'react'

function IcecastPlayer({ title, src }) {
  const handleOnPlay = () => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title,
        artist: 'casfoust',
      });
    }
  }

  return (
    <div className="player">
      <audio
        controls
        autoPlay
        x-webkit-airplay // not sure if this works, if not, try xWebkitAirplay instead
        type="audio/aac"
        title={title}
        src={src}
        onPlay={handleOnPlay}
      />
    </div>
  );
}

export default IcecastPlayer