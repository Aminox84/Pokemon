import React,{useState, useEffect} from 'react';
import ListeDePokemon from './ListeDePokemon'
import './index.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/pokemons").then(res=>{
    setPokemon(res.data.map(e=>
     e.name.french
    ))
  })
  },[])

  return (
     <ListeDePokemon pokemon={pokemon}/>
  );
}

export default App;


/*Hello World*/