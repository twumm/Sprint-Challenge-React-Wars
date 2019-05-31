import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './StarWars.css';

export default function StarWarsList({  starWarsChars }) {
  return (
    starWarsChars
      .map(character => (
        <div key={character.created} className="character-card">
          <div className="character-header">
            <h4 id="character-name">{character.name}</h4>
            <span id="character-gender">
              {
                character.gender === 'male'
                ? <FontAwesomeIcon icon="male" size="2x" color="#89cff0" />
                : character.gender === 'female'
                ? <FontAwesomeIcon icon="female" size="2x" color="pink" />
                : <FontAwesomeIcon icon="genderless" size="2x" color="black" spin />
              }
            </span>
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
