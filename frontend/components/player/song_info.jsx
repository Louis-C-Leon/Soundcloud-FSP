import React from 'react';

const SongInfo = (props) => {
  let imgSrc;
  if (props.song.imageUrl === undefined) {
    imgSrc = window.images.defaultSong;
  } else {
    imgSrc = props.song.imageUrl;
  }
  return(
    <>
      <div className="playerInfo">
        <img className="playerInfoImage" src={imgSrc} />
        <div className="playerInfoText">{props.song.title}</div>
      </div>
    </>
  )
}

export default SongInfo;