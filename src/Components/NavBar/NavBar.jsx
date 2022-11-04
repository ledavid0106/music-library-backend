import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = ({songs, setSongs, getAllSongs}) => {
    return ( 
        <nav className="navbar navbar-dark bg-info">
        <h1  >EDM <small className="text-muted">Bangers</small></h1> |
        <SearchBar songs={songs} setSongs={setSongs} getAllSongs={getAllSongs}/>
      </nav>
    )
    }
  export default NavBar;
  