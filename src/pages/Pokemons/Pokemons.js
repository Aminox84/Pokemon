import React,{useState, useEffect} from 'react';
import ListeDePokemon from '../../ListeDePokemon'
import '../../index.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [pokemon, setPokemon]=useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3001/pokemons").then(res=>{
    setPokemon(res.data.map(e=>
   
    /*  <div className="pokemon-container">
        <img src={  e.id <810 ? require(`../../pokemonimg/${e.id}.png`) : (`../../pokemonimg/unknown.png`)}/>
        <h3 id="ID">ID: {e.id}</h3>
        <h5 id="Name">Name:{e.name.french}</h5>
        <h6 id="Base">HP: {e.base.HP}</h6>
        <h6 id="Attack">Attack: {e.base.Attack}</h6>
        <h6 id="Speed">Speed: {e.base.Speed}</h6>
        <h6 id="Defense">Defense: {e.base.Defense}</h6>
      </div>*/

  <div class="container container-pokemons">
  <div class="row">
    <div class="col">
    <img src={e.id <810 ? require(`../../pokemonimg/${e.id}.png`) : require(`../../pokemonimg/newPokemon.png`)}/>
    </div>
    <div class="col">
        <h3 id="ID">ID: {e.id}</h3>
        <h5 id="Name">Name:{e.name.french}</h5>
        <h6 id="Base">HP: {e.base.HP}</h6>
        <h6 id="Attack">Attack: {e.base.Attack}</h6>
        <h6 id="Speed">Speed: {e.base.Speed}</h6>
        <h6 id="Defense">Defense: {e.base.Defense}</h6>
    </div>
  </div>
  <hr id="hr1"></hr>
  </div>

      
      
      
      ))
  })
  },[])

  return (
    <div>
     <ListeDePokemon pokemon={pokemon}/>
    </div>
  );
}

export default App;
