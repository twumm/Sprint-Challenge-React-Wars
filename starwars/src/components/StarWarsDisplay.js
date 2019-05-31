import React from 'react';
import StarWarsList from './StarWarsList';

export default function StarWarsDisplay(
  { 
    starWarsChars,
    nextListUrl,
    previousListUrl,
    getCharacters
  }) {

  const onGetCharacters = (event, URL) => {
    getCharacters(URL)
  };

  return (
    <div>
      <div className="character-display">
        <StarWarsList starWarsChars={starWarsChars} />
      </div>
      <div className="pagination-buttons">
        <button
          className="previous-button"
          style={!previousListUrl ? {display: 'none'} : null }
          onClick={(event) => onGetCharacters(event, previousListUrl)}
        >
          Previous
        </button>

        <button
          className="previous-button"
          style={!nextListUrl ? {display: 'none'} : null}
          onClick={(event) => onGetCharacters(event, nextListUrl)}
        >
          Next
        </button>
      </div>
    </div>
  )
}
