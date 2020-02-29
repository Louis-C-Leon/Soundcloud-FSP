## Note: Due to deprecated dependencies and lack of time to update this project, I've had to take it offline

# SoundCrowd

[Live Site](https://soundcrowd-fsp.herokuapp.com/)

SoundCrowd is a social music app where users listen to music, upload their own songs, and view artists that they enjoy, heavily based on SoundCloud.com. The project was built within a two-week period using Rails and PostgreSQL on the backend and React/Redux on the frontend. The site is still missing several key features which I hope to add in updates shortly.


## Features

* User authentication and tracking of sessions using BCrypt and cokies. Authentication allows users to sign into their accounts, and sign up for a new account, and prevents users from uploading or deleting songs using another user's account.
* Users can upload songs, can choose cover art, titles, and genre/description, and can delete songs if they wish.
* Users can listen to music as they navigate the site using a music player that persists and tracks their current song as they visit different frontend routes.
* Songs are displayed either by genre or by upload time, depending on which feed the user views.
* Each user has a page where their profile picture and uploaded songs are displayed; users can navigate to view other artist's pages and listen to their songs.

## Persistent Music Player

Once a user clicks on a song, SoundCrowd displays a footer music player that continues playing until they pause it, even if they visit a different page. This was done by storing the index of the currently playing song in the Redux state, and mapping the current song to the props of the player component. The player component is also flexible and easy to style with CSS, unlike the default HTML audio player. The component hides the underlying audio component, and interfaces with it using various event listeners. One example of this is the progress bar sub-component, which allows easy navigation of a song's runtime:

```
<div className="progressBarContainer">
  <span className="elapsedTime">{this.state.elapsedString}</span>
    <div className="progressBar" id="help!" onMouseMove={(e) => {
      if(this.state.status === "seeking") {
        const played = ((e.clientX - left) / (width)) * 100;
        const remaining = 100 - played;
        const newTime = ((e.clientX - left) / (width)) * this.props.totalTime;
        const min = Math.floor(newTime / 60);
        const sec = Math.floor(newTime % 60);
        this.setState({playedStyle: {width: `${played}%`}, remainingStyle: {width: `${remaining}%`}, elapsedString: `${min}:${`${sec}`.padStart(2,0)}`});
      }
    }} onMouseEnter={() => this.setState({trackerClass: "trackerVisible"})} onMouseLeave={() => this.setState({trackerClass: "trackerHidden"})}
    onMouseDown = {() => this.setState({status: "seeking"})}
    onMouseUp = {(e) => {
      const newTime = ((e.clientX - left) / (width)) * this.props.totalTime;
      this.seek(newTime);
    }}>

    <div className="songPlayed" style={this.state.playedStyle}/>
    <div className={this.state.trackerClass} />
    <div className="songRemaining" style={this.state.remainingStyle}/>
  </div>
  {this.state.totalString}
</div>
```

When the user presses the mouse on the progress bar, its status in local state is set to "seeking", and it tracks the mouse's X coordinates, adjusting the appearance of the progress bar by dynamically changing CSS styling. When the user releases the mouse, the progress bar calculates the new elapsed time and sends it to the parent player component using its "seek" method.

## Song Uploading

If a user is signed in, they are allowed access to the "Upload" form page. There they can choose a song to upload, choose cover art for their song, and modify the title, description, and genre. If they decide to upload their song, they will be redirected to their library, where their song will be dynamically added to the list. On their library page, they can delete any songs that they have previously uploaded if they choose to.

## Song Display

The main page of SoundCrowd is the `/discover` page, where they can brows songs, sorted by genre, in a visually appealing carousel interface(modeled after the original SoundCloud site). The discover page dynamically requests songs from the server, sorts them by genre, and renders a `SongCarousel` component for each genre.
These Carousel components hold a list of songs and track the "current index" of the first displayed song. Based on the length of the list and the current index, the carousel decides whether the user can navigate forward and/or backwards, and dynamically renders the appropriate buttons by applying classes which affect the buttons CSS styling:

```
goForward() {
  this.setState({offset: this.state.offset - 780, 
    backClass: "carouselShow",
    currIndex: this.state.currIndex + 4,
  }, () => {
    if (this.state.currIndex > (this.props.playlist.length - 4)) {
      this.setState({forwardClass: "carouselHide"})
    }
  })
}

goBack() {
  this.setState({offset: this.state.offset + 780, 
    forwardClass: "carouselShow",
    currIndex: this.state.currIndex - 4,
  }, () => {
    if (this.state.currIndex < 1) {
      this.setState({backClass: "carouselHide"})
    }
  });
}


render() {
  const songPlaylist = this.props.playlist.map(song => song.id)
  return (
    <div className="carouselContainer">
      <div className="carouselHeader">{this.props.genre}</div>
      <div className="songCarousel">
      <div className={`carouselButton leftButton ${this.state.backClass}`} onClick={this.goBack}>{"<"}</div>
      <div className={`carouselButton rightButton ${this.state.forwardClass}`} onClick={this.goForward}>{">"}</div>
      {this.props.playlist.map( (curr_song) => {
        return( <div className="songContainer" style={{left: `${this.state.offset}px`}}>
                  <SongContainer key={`song#${curr_song}`} song={curr_song} playlist={songPlaylist}/>
                </div>);         
      })}
      </div>
    </div>
  );
}
```
