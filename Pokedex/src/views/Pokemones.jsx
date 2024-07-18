import React from 'react';
import { useState, useEffect } from 'react';
import {Dropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Pokemones() {

    const url = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemones, setPokemones] = useState([]);

    useEffect(()=>{
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                setPokemones(data.results);
            });
    }, []);


  return (
    <>
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Choose your Pokemon
            </Dropdown.Toggle>
                
                <Dropdown.Menu> {pokemones.map((pokemon, index)=>(
                    
                        <Dropdown.Item key={index}>
                            <NavLink  to={`/pokemon/${pokemon.name}`}>
                                {pokemon.name}
                            </NavLink>
                        </Dropdown.Item>
                   ))}
                </Dropdown.Menu>
                
        </Dropdown>
    </>
  )
}

export default Pokemones