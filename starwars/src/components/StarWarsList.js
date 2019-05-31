import React from 'react';
import './StarWars.css';

export default function StarWarsList({  starWarsChars }) {
  return (
    starWarsChars
      .map(character => (
        <div key={character.created} className="character-card">
          <div className="character-header">
            <h4 id="character-name">{character.name}</h4>
            <span id="character-gender">{character.gender}</span>
          </div>
          <div className="character-stats">
            <span>{character.eye_color}</span>
            <span>{character.hair_color}</span>
            <span>{character.skin_color}</span>
            <span>{character.height}</span>
            <span>{character.mass}</span>
          </div>
        </div>
      )
    ) 
  )
}
