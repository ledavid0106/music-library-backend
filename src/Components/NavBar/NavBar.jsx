import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = ({songs, setSongs, getAllSongs}) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <h3  >EDM <small className="text-muted">Bangers</small></h3> |
        <SearchBar songs={songs} setSongs={setSongs} getAllSongs={getAllSongs}/>
      </nav>
    )
    }
  export default NavBar;
  