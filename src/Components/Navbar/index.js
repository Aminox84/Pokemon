import React from 'react';
import './style.css';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className='photo' src={require('../../pokemonimg/pokeball.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/pokemons' activeStyle>
            Les pokemons
          </NavLink>
          <NavLink to='/addpokemon' activeStyle>
            Ajouter un pokemon
          </NavLink>
          <NavLink to='/editpokemon' activeStyle>
            Modifier un pokemon
          </NavLink>
          <NavLink to='/deletepokemon' activeStyle>
            Supprimer un pokemon
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Home</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
