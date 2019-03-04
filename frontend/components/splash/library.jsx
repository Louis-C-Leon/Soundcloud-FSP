import React from "react";
import { Redirect } from "react-router-dom";
import Song from "./_song_splash"

const UserLibrary = (props) => {
  if(props.currUser === undefined) {
    props.openModal();
    return(
      <Redirect to="/discover" />
    );
  } else {
    return(
      <>
        {props.songs.map((song) => {return(
          <>
            <Song key={song.id} song={song} />
            <div onClick={() => props.destroySong(song.id)}>Delete!</div>
          </>
        )})}

      </>
    )
  }
}

export default UserLibrary;