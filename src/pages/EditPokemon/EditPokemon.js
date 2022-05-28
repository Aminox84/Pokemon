import React,{useState,useEffect} from "react";
import axios from "axios";

const baseURL = "http://localhost:3001/pokemons/";

 function EditPokemon() {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}+${document.getElementById("pokemon-id").value}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}${document.getElementById("pokemon-id").value}`, {"name": {
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
      window.alert("Le Pokemon s'est bien modifié!")
  }

  

  return (
    <div>
      <input id="pokemon-id" type="text" placeholder="l'id du Pokemon?"></input>
        <br></br>
      <input id="pokemon-name" type="text" placeholder="Le nouveau nom?"></input>
        <br></br>
        <input id="pokemon-type" type="text" placeholder="Nouveau type du Pokemon?"></input>
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
        <button  type="button" class="btn btn-dark" onClick={updatePost}>Modifier</button>
    </div>
  )
}
export default EditPokemon