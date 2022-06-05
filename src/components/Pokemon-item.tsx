import React, {FunctionComponent, useState} from 'react'
import formatDate from '../helpers/format-date';
import Pokemon from '../models/pokemon';
import './pokemon-item.css'
import formatType from './../helpers/format-type';

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
                  <small>{formatDate(pokemon.created)}</small><br/>
                  {/* <small>{pokemon.created.toString()}</small> */}
                  {pokemon.types.map((type) => (
                    <span key={type} className={formatType(type)} >
                        {type}
                    </span>
                    ))}
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}
