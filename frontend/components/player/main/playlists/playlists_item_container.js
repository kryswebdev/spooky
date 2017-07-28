import { connect } from 'react-redux';

import PlaylistsItem from './playlists_item';

import AddTrack from './add_track';

import {requestPlaylistPlayback} from '../../../../actions/playlist_actions';
// import { orderUserPlaylists } from '../../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  playlist: ownProps.playlist,
  playlists: ownProps.playlists,
  // playlists: orderUserPlaylists(state.playlists, state.session.currentUser.id),
});

const mapDispatchToProps = (dispatch) => ({
  requestPlaylistPlayback: (id) => dispatch(requestPlaylistPlayback(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistsItem);