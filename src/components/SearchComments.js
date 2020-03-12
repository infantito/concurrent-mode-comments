import React from 'react';
import PropTypes from 'prop-types';

const SearchComments = props => {
  return (
    <div className="app-filter">
      <h2 className="app-headline">Search a comment!</h2>
      <div className="app-searcher">
        <input
          type="text"
          className="app-control app-input"
          value={props.comment}
          onChange={props.handleChange}
          placeholder="Type a comment"
        />
        <button className="app-control app-button" type="button" onClick={props.handleReset}>
          See All
        </button>
      </div>
    </div>
  );
};

SearchComments.propTypes = {
  comment: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
};

export default React.memo(SearchComments);
