import React from 'react';
import {Container, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom"

function Home() {

    const navigate = useNavigate();


  return (
    <Container className="text-center mt-5">
        <h1>Bienvenido Maestro Pokemon</h1>
        <Button 
            variant="outline-warning" 
            onClick={()=>navigate('/characters')}>
                Choose your Pokemon
            </Button>
    </Container>
  )
}

export default Home