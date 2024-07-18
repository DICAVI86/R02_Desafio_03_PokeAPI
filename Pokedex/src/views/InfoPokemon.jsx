import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ListGroup, Card, Spinner, Button, Container } from "react-bootstrap";

function InfoPokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const navigate = useNavigate();

  const back = () => {
    navigate("/pokemones");
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Card style={{ width: "18rem" }} className="justify-content-md-center">
        <Card.Img variant="top" src={pokemon.sprites.front_default} />
        <Card.Body>
          <Card.Title className="text-center font-weight-bold">
            # {pokemon.id} - {pokemon.name}
          </Card.Title>
          <ListGroup>
            {" "}
            {pokemon.stats.map((stat, i) => (
              <ListGroup.Item key={i}>
                {stat.stat.name}: {stat.base_stat}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button
            onClick={back}
            className="btn btn-warning mt-4 d-block mx-auto"
          >
            Back
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default InfoPokemon;
