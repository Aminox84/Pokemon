import React,{useEffect, useState} from 'react';
import axios from "axios";

const baseURL = "http://localhost:3001/pokemons/";

function DeletePokemon() {


  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
    .get(`${baseURL}${document.getElementById("pokemon-by-id-delete").value}`)
    .then((response) => {
      setPost(response.data);
    });
    
  }, []);

  function deletePokemonX() {
    axios
      .delete(`${baseURL}${document.getElementById("pokemon-by-id-delete").value}`)
      .then(() => {
        alert("Le pokemon s'est bien supprimé!");
        setPost(null)
      });
  }



  return (
    <div>
    <input id="pokemon-by-id-delete" type="text" placeholder="L'id du Pokemon?"></input>
    <br></br>
    <button type="button" class="btn btn-dark" onClick={deletePokemonX}>Supprimer</button>
    </div>
  )
}

export default DeletePokemon