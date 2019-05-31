import React from 'react'

export default function StarWarsList({  starWarsChars }) {
  return (
    starWarsChars
      .map(character => (
        <div key={character.created} className="character-card">
          <div className="character-header">
            <h5 id="character-name">{character.name}</h5>
            <span id="character-name">{character.gender}</span>
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
