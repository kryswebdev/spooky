import React from 'react';
import PropTypes from 'prop-types';

import TrackItem from '../track_item';
import Loading from '../../../loading';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      tracks: this.props.tracks,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.fireSearch = this.fireSearch.bind(this);
  }

  componentDidMount() {
    this.props.clearSearch();
    this.searchInput.focus();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ tracks: nextProps.tracks });
  }

  handleSearch(e) {
    this.setState({
      searchQuery: e.currentTarget.value,
    });

    clearTimeout(this.idleTimeout);
    this.idleTimeout = setTimeout(this.fireSearch, 500);
  }

  fireSearch() {
    const data = { search: { term: this.state.searchQuery } };
    if (this.state.searchQuery === '') {
      this.props.clearSearch();
    } else {
      this.props.requestSearchResults(data);
    }
  }

  trackview() {
    if (this.props.fetching === true) {
      return <Loading />;
    }
    return (<ul className="track-list">
      {this.state.tracks.map((track, idx) =>
        (<TrackItem
          key={track.id}
          track={track}
          tracks={this.state.tracks}
          enqueuePlayback={this.props.enqueuePlayback}
          idx={idx}
        />),
      )}
    </ul>);
  }

  render() {
    // UPDATE TO REFLECT INPUT CLASS NAME
    return (
      <div className="tracks">
        <h3 className="view-header">SEARCH</h3>
        <form>
          <input
            type="text"
            ref={(input) => { this.searchInput = input; }}
            onChange={this.handleSearch}
            value={this.state.searchQuery}
            className="new-playlist-title"
            placeholder="Start typing..."
          />
        </form>
        <div className="search-tracks">
          {this.trackview()}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  fetching: PropTypes.bool,
  clearSearch: PropTypes.func.isRequired,
  requestSearchResults: PropTypes.func.isRequired,
  enqueuePlayback: PropTypes.func.isRequired,
};

Search.defaultProps = {
  tracks: [],
  fetching: false,
};

export default Search;
