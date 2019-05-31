import React from 'react';
import StarWarsList from './StarWarsList';

export default function StarWarsDisplay(
  { 
    starWarsChars,
    nextListUrl,
    previousListUrl,
    getCharacters,
    onLoading
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
        {
          !onLoading
          ?
          <div>
            <button
              className="previous-button"
              style={!previousListUrl ? {display: 'none'} : null }
              onClick={(event) => onGetCharacters(event, previousListUrl)}
            >
              Previous
            </button>

            <button
              className="next-button"
              style={!nextListUrl ? {display: 'none'} : null}
              onClick={(event) => onGetCharacters(event, nextListUrl)}
            >
              Next
            </button>
          </div>
          :
          <span className='loader'></span>
        }
        
      </div>
    </div>
  )
}
