import React, { useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import NewSong from './Components/NewSong/NewSong';


function App() {

  const [entries, setEntries] = useState([{title: 'Starbright', artist: 'Dabin'}])

  function addNewSong(entry){
    let tempSong = [...entries, entry]
    setEntries(tempSong)
  }

  return (
    <div className="App">
      <MusicTable parentEntries={entries}/>
      <NewSong addNewSongProperty={addNewSong}/>
    </div>
  );
}

export default App;
