import React from 'react';
import {Container, Button, Dropdown} from "react-bootstrap";
import {useNavigate} from "react-router-dom"

function Home() {

    const navigate = useNavigate();


  return (
    <Container className="text-center mt-5">
        <h1>Bienvenido Maestro Pokemon</h1>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose your Pokemon
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Charizard</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Button onClick={()=>navigate('/characters')}>Ver Detalle</Button>
    </Container>
  )
}

export default Home