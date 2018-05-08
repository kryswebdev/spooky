import React from 'react';

class NavPlaylistsItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.props.requestPlaylistPlayback(this.props.playlist.id);
  }

  playlistTitle() {
    if (this.props.currentPlaylist === this.props.playlist.id) {
      return (
        <div className="nav-playlists-item info now-playing overflow">
          {this.props.playlist.title}
        </div>
      );
    }
    return (
      <div className="nav-playlists-item info overflow">
        {this.props.playlist.title}
      </div>
    );
  }

  playlistIcon() {
    if (this.props.playlist.count > 0) {
      if (this.props.currentPlaylist === this.props.playlist.id) {
        return null;
        // return <img TODO: this will need some pause logic
        // src="https://res.cloudinary.com/spooky/image/upload/v1500841148/pause_dgdaru.svg"
        // className="playlist-button"
        // onClick={this.handlePlayClick}/>;
      }
      return (<img
        src="https://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg"
        className="playlist-button"
        onClick={this.handlePlayClick}
        alt="Play playlist" // Will need to interpolate playlist name
      />);
    }
  }

  render() {
    return (
      <li className="nav-playlists-item">
        {this.playlistTitle()}
        {this.playlistIcon()}
      </li>
    );
  }
}


export default NavPlaylistsItem;
