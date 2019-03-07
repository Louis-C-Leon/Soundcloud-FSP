import React from 'react';

const SongInfo = (props) => {
  return(
    <>
      <div className="playerInfo">
        <img className="playerInfoImage" src={props.song.imageUrl} />
        <div className="playerInfoText">{props.song.title}</div>
      </div>
    </>
  )
}

export default SongInfo;