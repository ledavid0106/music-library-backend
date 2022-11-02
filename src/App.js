 import React, { useState } from 'react';
 import MusicTable from './Components/MusicTable/MusicTable';



function App() {

  const [entries, setEntries] = useState([{title: 'Starbright', artist: 'Dabin'}])



  return (
    <div className="App">
      <MusicTable parentEntries={entries}/>
    </div>
  );
}

export default App;
