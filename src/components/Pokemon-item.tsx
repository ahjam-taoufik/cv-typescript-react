import React, {FunctionComponent, useState} from 'react'
import Pokemon from '../models/pokemon';
import './pokemon-item.css'

type props = {
    pokemon:Pokemon,
    borderColor?:string,
}

export const PokemonItem:FunctionComponent<props> = ({pokemon,borderColor='green'}) => {
     const [color, setColor]=useState<string>();

 const showBorder=()=>{
     setColor(borderColor);
 }

 const hideBorder=()=>{
     setColor('#000');
 }


  return (

    <div className="col s6 m4" onMouseEnter={showBorder}  onMouseLeave={hideBorder} >
          <div className="card horizontal" style={{borderColor:color}}>
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
