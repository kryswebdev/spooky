import { connect } from 'react-redux';

import Playlists from './playlists';
import {
  selectAllTracks,
  selectAllPlaylists } from '../../../../reducers/selectors';
import { requestAllPlaylists } from '../../../../actions/playlist_actions';

const mapStateToProps = state => ({
  playlists: selectAllPlaylists(state.entities.playlists),
  fetching: state.fetching,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllPlaylists: () => dispatch(requestAllPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlists);
