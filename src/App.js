import React, { useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import NewSong from './Components/NewSong/NewSong';


function App() {

  const [songs, setSongs] = useState([{title: 'Starbright', artist: 'Dabin'}])

  function addNewSong(song){
    let tempSong = [...songs, song]
    setSongs(tempSong)
  }

  return (
    <div className="App">
      <MusicTable songs={songs} setSongs={setSongs}/>
      <NewSong addNewSongProperty={addNewSong}/>
    </div>
  );
}

export default App;
