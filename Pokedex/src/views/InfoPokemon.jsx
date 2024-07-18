import React from 'react'
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { ListGroup, Card, Spinner, Button} from 'react-bootstrap';

function InfoPokemon() {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const url = "https://pokeapi.co/api/v2/pokemon/" + id;

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
                <Card.Title>{pokemon.name}</Card.Title>
                <ListGroup>
                    <ListGroup.Item>#{pokemon.id}</ListGroup.Item>
                    <ListGroup.Item>02</ListGroup.Item>
                    <ListGroup.Item>03s</ListGroup.Item>
                    <ListGroup.Item>04c</ListGroup.Item>
                    <ListGroup.Item>05</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Back</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default InfoPokemon