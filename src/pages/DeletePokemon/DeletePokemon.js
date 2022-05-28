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
        alert("post deleted");
        setPost(null)
      });
  }



  return (
    <div>
    <input id="pokemon-by-id-delete" type="text" placeholder="Le ID du Pokemon"></input>
    <br></br>
    <button type="button" class="btn btn-dark" onClick={deletePokemonX}>Delete Pokemon</button>
    </div>
  )
}

export default DeletePokemon