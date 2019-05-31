import React from 'react';
import StarWarsList from './StarWarsList';

export default function StarWarsDisplay({ starWarsChars }) {
  return (
    <div>
      <div className="character-display">
        <StarWarsList starWarsChars={starWarsChars} />
      </div>
      <div className="pagination-buttons">
        <button
          className="previous-button"
        >
          Previous
        </button>

        <button
          className="previous-button"
        >
          Next
        </button>
      </div>
    </div>
  )
}
