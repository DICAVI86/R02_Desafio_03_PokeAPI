import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import InfoPokemon from './views/InfoPokemon';
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemones" element={<Pokemones/>}/>
      <Route path="/pokemon/:id" element={<InfoPokemon/>}/>

     </Routes>
    </>
  )
}

export default App
