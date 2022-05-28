import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import ListeDePokemon from './ListeDePokemon'
import './index.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPokemon from './pages/AddPokemon/AddPokemon';
import Pokemons from './pages/Pokemons/Pokemons';
import DeletePokemon from './pages/DeletePokemon/DeletePokemon';
import EditPokemon from './pages/EditPokemon/EditPokemon';
import Home from './pages/Home/Home';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>        
        <Route path="/" element={<Home />}></Route>
        <Route path="/Pokemons" element={<Pokemons />}></Route>
        <Route path="/addpokemon" element={<AddPokemon />}></Route>
        <Route path="/DeletePokemon" element={<DeletePokemon />}></Route>
        <Route path="/EditPokemon" element={<EditPokemon />}></Route>
      </Routes>
    </Router>
  );
}



export default App;



