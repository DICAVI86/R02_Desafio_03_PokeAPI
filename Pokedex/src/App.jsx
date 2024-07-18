import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import InfoPokemon from './views/InfoPokemon';
import Error from './views/Error';
import {Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemones" element={<Pokemones/>}/>
      <Route path="/pokemon/:id" element={<InfoPokemon/>}/>
      <Route path="*" element={<Error />} />

     </Routes>
    </>
  )
}

export default App
