import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";


// var origOpen = XMLHttpRequest.prototype.open;
// XMLHttpRequest.prototype.open = function(e1) {
//     this.addEventListener('load', function(e2) {
//         if (!this.responseURL.includes("api")) {
//           this.abort();
//         }
//     });
//     origOpen.apply(this, arguments);
// };

// var origSend = XMLHttpRequest.prototype.send;
// XMLHttpRequest.prototype.send = function(e) {
//   if (this.timeout === 60000) {
//     // this.timeout = 1;
//     console.log("GOTCHA")
//   } else {
//     origSend.apply(this, arguments);
//   }
// }


// $.ajaxSetup({
//   beforeSend: function(jqXHR, settings) {
//     debugger;
//   }
// })

document.addEventListener("DOMContentLoaded", (e) =>{
  console.log(e)

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
      }
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