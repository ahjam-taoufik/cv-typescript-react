import React, { FunctionComponent, useState } from 'react';
import formatType from '../helpers/format-type';
import Pokemon from './../models/pokemon';

type Props = {
  pokemon: Pokemon;
};

type Field = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  name: Field;
  hp: Field;
  cp: Field;
  types: Field;
};

const PokemonForm: FunctionComponent<Props> = ({ pokemon }) => {
  const [form, setForm] = useState<Form>({
    name: {
      value: pokemon.name,
      error: '',
      isValid: true,
    },
    hp: {
      value: pokemon.hp,
      error: '',
      isValid: true,
    },
    cp: {
      value: pokemon.cp,
      error: '',
      isValid: true,
    },
    types: {
      value: pokemon.types,
      error: '',
      isValid: true,
    },
  });

  const types: string[] = [
    'Plante',
    'Feu',
    'Eau',
    'Insecte',
    'Normal',
    'Electrik',
    'Poison',
    'Fée',
    'Vol',
    'Combat',
    'Psy',
  ];

  const hasType= (type:string):boolean =>{
      return form.types.value.includes(type);
  }

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const fieldName:string = e.target.name;
    const fieldValue:string = e.target.value;
    const newField:Field = {[fieldName]:{value:fieldValue}};
    setForm({...form,...newField});
  }
   
  const seletType=(type:string, e:React.ChangeEvent<HTMLInputElement>)=>{
    const checked = e.target.checked;
    let newField:Field;

    if(checked){
      const newType:string[]=form.types.value.concat([type]);
      newField = {value:newType};
    }
    else{
      const newType:string[]=form.types.value.filter((t:string)=>t!==type);
      newField = {value:newType};
    }
    setForm({...form,...{types:newField}});
  }





  return (
    <form>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-image">
              <img
                src={pokemon.picture}
                alt={pokemon.name}
                style={{ width: '250px', margin: '0 auto' }}
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input id="name" name="name" onChange={e=>handleInputChange(e)} type="text" className="form-control" defaultValue={form.name.value} ></input>
                </div>
                {/* Pokemon hp */}  
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input id="hp" name="hp" onChange={e=>handleInputChange(e)} type="number" className="form-control" defaultValue={form.hp.value}></input>
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input id="cp" name="cp" onChange={e=>handleInputChange(e)} type="number" className="form-control" defaultValue={form.cp.value}></input>
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map((type) => (
                    <div key={type} style={{ marginBottom: '10px' }}>
                      <label>
                        <input
                          id={type}
                          type="checkbox"
                          className="filled-in"
                          defaultChecked={hasType(type)}
                          onChange={e=>seletType(type,e)}
                          value={type}
                        ></input>
                        <span>
                          <p className={formatType(type)}>{type}</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PokemonForm;
