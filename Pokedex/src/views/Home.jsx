import React from "react";
import { Container, Button, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <Row>
        <h1>Bienvenido Maestro Pokemon</h1>
        <Image
          type="image"
          src="https://cdn.custom-cursor.com/cursors/pokemon_pikachu_908.png"
        />
        <Button
          className="btn-lg"
          variant="outline-warning"
          onClick={() => navigate("/pokemones")}
        >
          Choose your Pokemon
        </Button>
      </Row>
    </Container>
  );
}

export default Home;
