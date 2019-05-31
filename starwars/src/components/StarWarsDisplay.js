import React from 'react';
import StarWarsList from './StarWarsList';

export default function StarWarsDisplay({ starWarsChars }) {
  return (
    <div>
      <StarWarsList starWarsChars={starWarsChars} />
    </div>
  )
}
