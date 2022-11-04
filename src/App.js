import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import "./App.css"

function App() {

  const [songs, setSongs] = useState([])

  useEffect(()=>{
    getAllSongs();
  },[]);
  async function getAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/')
    setSongs(response.data)
  }

  function addNewSong(song){
    let tempSong = [...songs, song]
    setSongs(tempSong)
  }

  return (
    <div className="App">
      <NavBar songs={songs} setSongs={setSongs} getAllSongs={getAllSongs}/>
      <MusicTable songs={songs} setSongs={setSongs} getAllSongs={getAllSongs}/>
    </div>
  );
}

export default App;
