import React from 'react';
import StarWarsList from './StarWarsList';

export default function StarWarsDisplay({ starWarsChars }) {
  return (
    <div className="character-display">
      <StarWarsList starWarsChars={starWarsChars} />
    </div>
  )
}
