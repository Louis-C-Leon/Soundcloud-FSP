import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () =>{
  let store;

  if (window.currentUser) {
    let userSongs;
    const flatUser = window.currentUser;

    if (window.currentUser.songs !== undefined) {
      userSongs = window.currentUser.songs;
      flatUser.songs = Object.keys(flatUser.songs);
    } else {
      userSongs = {};
      flatUser.songs = [];
    }
    
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [flatUser.id]: flatUser },
        songs: userSongs,
      },
      ui: {modal: null, playingSong: null}
    };

    store = configureStore(preloadedState);
    
    delete window.currentUser;
    delete window.userSongs;
  } else {
    store = configureStore();
  }
  
  const root = document.getElementById("root")
  window.store = store;
  ReactDOM.render(<Root store={ store } />, root);
  
})