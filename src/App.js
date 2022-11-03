import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import NewSong from './Components/NewSong/NewSong';


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
      <MusicTable songs={songs} setSongs={setSongs} getAllSongs={getAllSongs}/>
      <NewSong addNewSongProperty={addNewSong}/>
    </div>
  );
}

export default App;
