import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { ListGroup, Card, Spinner, Button} from 'react-bootstrap';

function InfoPokemon() {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const url = "https://pokeapi.co/api/v2/pokemon/" + id;
    const navigate = useNavigate();

    const back = () => {
        navigate("/pokemones");
      };

    useEffect(()=>{
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                setPokemon(data);
                setLoading(false);
            });
    }, [id]);

    if(loading){
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden"> 
                    Loading...
                </span>
            </Spinner>
        );
    }

  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pokemon.sprites.front_default} />
            <Card.Body>
                <Card.Title># {pokemon.id} - {pokemon.name}</Card.Title>
                <ListGroup> {pokemon.stats.map((stat, i) => (
                    <ListGroup.Item key={i}>
                        {stat.stat.name}: {stat.base_stat}
                    </ListGroup.Item>
                 ))}
                </ListGroup>
                <Button onClick={back} className="btn btn-secondary mt-4">Back</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default InfoPokemon