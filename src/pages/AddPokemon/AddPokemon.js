import React,{useEffect, useState} from 'react'
import axios from 'axios';




import 'bootstrap/dist/css/bootstrap.min.css';

const dataBase = "http://localhost:3001/pokemons/"

function AddPokemon() {

 const [post, setPost] = React.useState(null);

  React.useEffect(() => {   
    axios.get(dataBase).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
   
   

      if ( `${document.getElementById("pokemon-name").value}`==="" ) {
            alert("Enter a pokemon name")  ;
             
      }
      else {

        axios
      .post(dataBase, {
        "name": {
          "french": `${document.getElementById("pokemon-name").value}`
        },
        "type": [
          `${document.getElementById("pokemon-type").value}`
        ],
        "base": {
          "HP": parseInt(`${document.getElementById("pokemon-hp").value}`),
          "Attack": parseInt(`${document.getElementById("pokemon-attack").value}`),
          "Defense": parseInt(`${document.getElementById("pokemon-defense").value}`),
          "Sp. Attack": parseInt(`${document.getElementById("pokemon-sp-attack").value}`),
          "Sp. Defense": parseInt(`${document.getElementById("pokemon-sp-defense").value}`),
          "Speed": parseInt(`${document.getElementById("pokemon-speed").value}`)
        }
      })
      .then((response) => {
        setPost(response.data);
        
      });
      window.alert("Un nouveau Pokemon s'est ajouté!")
      
      }
      

  }
 

  return (
    <div class="add-pokemon-container">
        <img src={require("../../pokemonimg/unknown.png")} width="190px" height="150px"></img>
        <br></br>
        <input id="pokemon-name" type="text" placeholder="Nom du pokemon?"></input>
        <br></br>
        <input id="pokemon-type" type="text" placeholder="Type du pokemon?"></input>
        <br></br>
        <input id="pokemon-hp" type="text" placeholder="HP?"></input>
        <br></br>
        <input id="pokemon-attack" type="text" placeholder="Attack?"></input>
        <br></br>
        <input id="pokemon-defense" type="text" placeholder="Defense?"></input>
        <br></br>
        <input id="pokemon-sp-attack" type="text" placeholder="Sp.Attack?"></input>
        <br></br>
        <input id="pokemon-sp-defense" type="text" placeholder="Sp.Defense?"></input>
        <br></br>
        <input id="pokemon-speed" type="text" placeholder="Vitesse?"></input>
        <br></br>
        <button  type="button" class="btn btn-dark" onClick={createPost } >Ajouter</button>
        
    </div>
  )
}

export default AddPokemon


