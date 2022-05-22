import React,{useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import ListeDePokemon from '../../ListeDePokemon'
import '../../index.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [pokemon, setPokemon]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/pokemons").then(res=>{
    setPokemon(res.data.map(e=>
      
      
      <div>
        <div>ID: {e.id}</div>
        <h1>{e.name.french}</h1>
        <div>Speed: {e.base.Speed}</div>
            
        <br></br>
        <div>
          
          <img src={require(`../../pokemonimg/${e.id}.png`)} />
        </div>


      </div>
      

      ))
      
  })
  },[])

  return (
     <ListeDePokemon pokemon={pokemon}/>
  );
}

export default App;