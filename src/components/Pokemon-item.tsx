import React, {FunctionComponent} from 'react'
import Pokemon from '../models/pokemon';
import './pokemon-item.css'

type props = {
    pokemon:Pokemon,
    borderColor?:string,
}

export const PokemonItem:FunctionComponent<props> = ({pokemon,borderColor='red'}) => {
  return (

    <div className="col s6 m4">
          <div className="card horizontal" style={{borderColor:borderColor}}>
            <div className="card-image">
              <img src={pokemon.picture} alt={pokemon.name} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{pokemon.name}</p>
                <p>
                  <small>{pokemon.created.toString()}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}
