import React from 'react';
import PropTypes from 'prop-types';

const Modes = ({ mode, handleMode }) => {
  return (
    <div className="app-modes">
      <div className="app-approaches">
        <div className="app-mode">
          <input
            id="synchronous"
            type="radio"
            className="app-radio"
            name="mode"
            onChange={handleMode}
            checked={mode === 'synchronous'}
          />
          <label htmlFor="synchronous">Synchronous</label>
        </div>
        <div className="app-mode">
          <input
            id="debounced"
            type="radio"
            className="app-radio"
            name="mode"
            onChange={handleMode}
            checked={mode === 'debounced'}
          />
          <label htmlFor="debounced">Debounced</label>
        </div>
        <div className="app-mode">
          <input
            id="asynchronous"
            type="radio"
            className="app-radio"
            name="mode"
            onChange={handleMode}
            checked={mode === 'asynchronous'}
          />
          <label htmlFor="asynchronous">Asynchronous</label>
        </div>
      </div>
    </div>
  );
};

Modes.propTypes = {
  mode: PropTypes.string.isRequired,
  handleMode: PropTypes.func.isRequired
};

export default React.memo(Modes);
