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
            <p>Eye color: {character.eye_color}</p>
            <p>Hair color: {character.hair_color}</p>
            <p>Skin color: {character.skin_color}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
          </div>
        </div>
      )
    ) 
  )
}
